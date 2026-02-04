import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { getProjects, deleteProject, type Project } from '@/lib/projectService';
import { useToast } from '@/hooks/use-toast';
import { Plus, LogOut, Trash2, Image as ImageIcon, Video, Loader2, ExternalLink } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';

function AdminDashboardContent() {
    const [, setLocation] = useLocation();
    const { user, logout } = useAuth();
    const { toast } = useToast();
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = async () => {
        try {
            setIsLoading(true);
            const data = await getProjects();
            setProjects(data);
        } catch (error) {
            console.error('Error loading projects:', error);
            toast({
                title: "Error",
                description: "Failed to load projects",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            setLocation('/admin/login');
            toast({
                title: "Logged out",
                description: "You have been successfully logged out",
            });
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const handleDelete = async (id: string, title: string) => {
        if (!confirm(`Are you sure you want to delete "${title}"?`)) {
            return;
        }

        try {
            setDeletingId(id);
            await deleteProject(id);
            setProjects(projects.filter(p => p.id !== id));
            toast({
                title: "Project deleted",
                description: "The project has been successfully deleted",
            });
        } catch (error) {
            console.error('Error deleting project:', error);
            toast({
                title: "Error",
                description: "Failed to delete project",
                variant: "destructive",
            });
        } finally {
            setDeletingId(null);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="bg-card backdrop-blur-xl border-b border-border sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
                            <p className="text-muted-foreground text-sm mt-1">Welcome back, {user?.email}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setLocation('/admin/projects/new')}
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all"
                            >
                                <Plus className="w-5 h-5" />
                                Add Project
                            </button>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-4 py-2 bg-accent text-foreground rounded-lg hover:bg-accent/80 transition-all border border-border"
                            >
                                <LogOut className="w-5 h-5" />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-foreground mb-2">All Projects</h2>
                    <p className="text-muted-foreground">Manage your portfolio projects</p>
                </div>

                {isLoading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="text-center">
                            <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
                            <p className="text-muted-foreground">Loading projects...</p>
                        </div>
                    </div>
                ) : projects.length === 0 ? (
                    <div className="text-center py-20 bg-card backdrop-blur-xl rounded-2xl border border-border">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                            <ImageIcon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">No projects yet</h3>
                        <p className="text-muted-foreground mb-6">Get started by creating your first project</p>
                        <button
                            onClick={() => setLocation('/admin/projects/new')}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all"
                        >
                            <Plus className="w-5 h-5" />
                            Create Project
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group bg-card backdrop-blur-xl rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
                            >
                                {/* Media Preview */}
                                <div className="relative aspect-video bg-black/90 overflow-hidden flex items-center justify-center">
                                    {project.mediaType === 'video' ? (
                                        <video
                                            src={project.mediaUrl}
                                            className="max-w-full max-h-full object-contain"
                                            muted
                                            loop
                                            playsInline
                                            autoPlay
                                        />
                                    ) : (
                                        <img
                                            src={project.mediaUrl}
                                            alt={project.title}
                                            className="max-w-full max-h-full object-contain"
                                            loading="lazy"
                                        />
                                    )}

                                    <div className="absolute top-3 right-3">
                                        <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white/90 capitalize">
                                            {project.mediaType}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {project.category && (
                                        <div className="mb-4">
                                            <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">
                                                {project.category}
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-4 border-t border-border">
                                        <span className="text-xs text-muted-foreground">
                                            {new Date(project.createdAt).toLocaleDateString()}
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <Link
                                                href={`/projects/${project.id}`}
                                                className="flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all text-sm"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                View
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(project.id, project.title)}
                                                disabled={deletingId === project.id}
                                                className="flex items-center gap-1 px-3 py-1.5 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-all text-sm disabled:opacity-50"
                                            >
                                                {deletingId === project.id ? (
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                ) : (
                                                    <Trash2 className="w-4 h-4" />
                                                )}
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}

export default function AdminDashboard() {
    return (
        <ProtectedRoute>
            <AdminDashboardContent />
        </ProtectedRoute>
    );
}
