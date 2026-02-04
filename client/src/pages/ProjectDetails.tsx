import { useState, useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import { getProjectById, type Project } from '@/lib/projectService';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Calendar, Tag, User, Loader2, PlayCircle, ChevronLeft, ChevronRight, Video } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProjectDetails() {
    const [match, params] = useRoute('/projects/:id');
    const { toast } = useToast();
    const [project, setProject] = useState<Project | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    useEffect(() => {
        if (params?.id) {
            loadProject(params.id);
        }
    }, [params?.id]);

    const loadProject = async (id: string) => {
        try {
            setIsLoading(true);
            const data = await getProjectById(id);
            if (data) {
                setProject(data);
            } else {
                toast({
                    title: "Project not found",
                    description: "The project you're looking for doesn't exist.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error('Error loading project details:', error);
            toast({
                title: "Error",
                description: "Failed to load project details",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const nextMedia = () => {
        if (!project) return;
        setCurrentMediaIndex((prev) => (prev + 1) % project.media.length);
    };

    const prevMedia = () => {
        if (!project) return;
        setCurrentMediaIndex((prev) => (prev - 1 + project.media.length) % project.media.length);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <main className="flex-grow flex items-center justify-center">
                    <Loader2 className="w-12 h-12 text-primary animate-spin" />
                </main>
                <Footer />
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
                    <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
                    <p className="text-muted-foreground mb-8">The project you are looking for might have been moved or deleted.</p>
                    <Link href="/projects" className="px-6 py-3 bg-primary text-white rounded-lg hover:shadow-lg transition-all">
                        Back to Projects
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    const currentMedia = project.media[currentMediaIndex] || { url: '', type: 'image' };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-grow">
                {/* Project Hero / Media Area */}
                <section className="relative w-full bg-card overflow-hidden border-b border-border">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <Link href="/projects" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 group">
                            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Projects
                        </Link>

                        <div className="flex flex-col gap-12">
                            {/* Media Carousel - Enhanced for visibility */}
                            <div className="flex flex-col gap-6">
                                <div className="w-full min-h-[400px] md:min-h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-black relative group border border-white/10 flex items-center justify-center">
                                    {currentMedia.type === 'video' ? (
                                        <video
                                            key={currentMedia.url}
                                            src={currentMedia.url}
                                            controls
                                            autoPlay
                                            muted
                                            loop
                                            className="max-w-full max-h-[80vh] object-contain"
                                            poster={currentMedia.thumbnailUrl || project.thumbnailUrl}
                                        />
                                    ) : (
                                        <img
                                            key={currentMedia.url}
                                            src={currentMedia.url}
                                            alt={`${project.title} - ${currentMediaIndex + 1}`}
                                            className="max-w-full max-h-[80vh] object-contain animate-in fade-in zoom-in-95 duration-500"
                                        />
                                    )}

                                    {/* Carousel Controls */}
                                    {project.media.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevMedia}
                                                className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-black/40 backdrop-blur-xl text-white rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-primary shadow-2xl border border-white/10 z-20"
                                            >
                                                <ChevronLeft className="w-8 h-8" />
                                            </button>
                                            <button
                                                onClick={nextMedia}
                                                className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-black/40 backdrop-blur-xl text-white rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-primary shadow-2xl border border-white/10 z-20"
                                            >
                                                <ChevronRight className="w-8 h-8" />
                                            </button>
                                            <div className="absolute bottom-8 right-8 px-4 py-2 bg-black/60 backdrop-blur-xl rounded-full text-sm text-white/90 font-medium border border-white/10 z-20">
                                                {currentMediaIndex + 1} / {project.media.length}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Thumbnails - Larger and more visible */}
                                {project.media.length > 1 && (
                                    <div className="flex gap-4 overflow-x-auto py-4 px-2 scrollbar-hide snap-x">
                                        {project.media.map((item, index) => (
                                            <button
                                                key={item.url}
                                                onClick={() => setCurrentMediaIndex(index)}
                                                className={`relative w-32 aspect-video rounded-xl overflow-hidden flex-shrink-0 transition-all border-2 snap-start ${currentMediaIndex === index
                                                    ? 'border-primary ring-4 ring-primary/20 scale-105 shadow-xl'
                                                    : 'border-white/5 opacity-50 hover:opacity-100 hover:border-white/20'
                                                    }`}
                                            >
                                                {item.type === 'video' ? (
                                                    <div className="w-full h-full bg-accent/20 flex items-center justify-center">
                                                        <Video className="w-8 h-8 text-primary/60" />
                                                    </div>
                                                ) : (
                                                    <img src={item.url} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
                                                )}
                                                {item.type === 'video' && (
                                                    <div className="absolute top-2 right-2">
                                                        <PlayCircle className="w-5 h-5 text-white/90 shadow-2xl" />
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Project Info - Reorganized below for better flow with large media */}
                            <div className="max-w-4xl mx-auto w-full">
                                <div className="mb-6 flex items-center gap-3">
                                    {project.category && (
                                        <span className="px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                                            {project.category}
                                        </span>
                                    )}
                                    <span className="px-5 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/20 capitalize">
                                        {currentMedia.type}
                                    </span>
                                </div>

                                <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-8 leading-tight tracking-tight">
                                    {project.title}
                                </h1>

                                <div className="flex flex-wrap items-center gap-8 text-muted-foreground mb-10 border-y border-border py-6">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-6 h-6 text-primary" />
                                        <span className="text-base font-medium">
                                            {new Date(project.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                    {project.tags && project.tags.length > 0 && (
                                        <div className="flex items-center gap-3">
                                            <Tag className="w-6 h-6 text-primary" />
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="text-base font-medium px-2 py-0.5 bg-muted rounded-md tracking-wider">#{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed text-lg">
                                    {project.description.split('\n').map((paragraph, i) => (
                                        <p key={i} className="mb-6">{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-24 bg-primary/5">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold text-foreground mb-6">Interested in a similar project?</h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                            We leverage our expertise to bring your vision to life. Contact our team today to discuss how we can help with your next project.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="/contact" className="px-10 py-5 bg-primary text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-105">
                                Start a Conversation
                            </Link>
                            <Link href="/services" className="px-10 py-5 bg-white border border-border text-foreground font-bold rounded-2xl hover:bg-muted transition-all">
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
