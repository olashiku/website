import { useState } from 'react';
import { useLocation } from 'wouter';
import { createProject } from '@/lib/projectService';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Upload, Image as ImageIcon, Video, X, Loader2, Plus } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';

function AddProjectContent() {
    const [, setLocation] = useLocation();
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        tags: '',
    });
    const [mediaFiles, setMediaFiles] = useState<File[]>([]);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length === 0) return;

        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif', 'video/mp4', 'video/webm'];
        const newFiles: File[] = [];
        const newUrls: string[] = [];

        for (const file of files) {
            if (!validTypes.includes(file.type)) {
                toast({
                    title: "Invalid file type",
                    description: `File "${file.name}" is not a supported image or video.`,
                    variant: "destructive",
                });
                continue;
            }

            if (file.size > 50 * 1024 * 1024) {
                toast({
                    title: "File too large",
                    description: `File "${file.name}" exceeds the 50MB limit.`,
                    variant: "destructive",
                });
                continue;
            }

            newFiles.push(file);
            newUrls.push(URL.createObjectURL(file));
        }

        setMediaFiles(prev => [...prev, ...newFiles]);
        setPreviewUrls(prev => [...prev, ...newUrls]);
    };

    const handleRemoveFile = (index: number) => {
        URL.revokeObjectURL(previewUrls[index]);
        setMediaFiles(prev => prev.filter((_, i) => i !== index));
        setPreviewUrls(prev => prev.filter((_, i) => i !== index));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title.trim()) {
            toast({
                title: "Missing title",
                description: "Please enter a project title",
                variant: "destructive",
            });
            return;
        }

        if (!formData.description.trim()) {
            toast({
                title: "Missing description",
                description: "Please enter a project description",
                variant: "destructive",
            });
            return;
        }

        if (mediaFiles.length === 0) {
            toast({
                title: "Missing media",
                description: "Please upload at least one image or video",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            await createProject({
                title: formData.title,
                description: formData.description,
                mediaFiles,
                category: formData.category || undefined,
                tags: formData.tags ? formData.tags.split(',').map(t => t.trim()).filter(Boolean) : undefined,
            });

            toast({
                title: "Success!",
                description: `${mediaFiles.length} file(s) uploaded and project created successfully`,
            });

            setLocation('/admin/dashboard');
        } catch (error) {
            console.error('Error creating project:', error);
            toast({
                title: "Error",
                description: "Failed to create project. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="bg-card border-b border-border py-4 sticky top-0 z-10">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setLocation('/admin/dashboard')}
                            className="p-2 hover:bg-accent rounded-full transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 text-foreground" />
                        </button>
                        <h1 className="text-xl font-bold text-foreground">Add New Project</h1>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Title & Description */}
                        <div className="bg-card backdrop-blur-xl rounded-2xl p-6 border border-border space-y-6">
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
                                    Project Title *
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    required
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Enter project title"
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                                    Description *
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    required
                                    rows={6}
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Describe your project..."
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
                                        Category
                                    </label>
                                    <input
                                        type="text"
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        placeholder="e.g. Interior Design"
                                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="tags" className="block text-sm font-medium text-foreground mb-2">
                                        Tags (comma separated)
                                    </label>
                                    <input
                                        type="text"
                                        id="tags"
                                        name="tags"
                                        value={formData.tags}
                                        onChange={handleChange}
                                        placeholder="luxury, modern, urban"
                                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Media Upload */}
                        <div className="bg-card backdrop-blur-xl rounded-2xl p-6 border border-border">
                            <label className="block text-sm font-medium text-foreground mb-4">
                                Project Media * (Upload one or more images/videos)
                            </label>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                                {previewUrls.map((url, index) => (
                                    <div key={url} className="relative aspect-video rounded-2xl overflow-hidden bg-black/80 group border border-border flex items-center justify-center shadow-lg">
                                        {mediaFiles[index]?.type.startsWith('video/') ? (
                                            <video src={url} className="max-w-full max-h-full object-contain" />
                                        ) : (
                                            <img src={url} alt={`Preview ${index}`} className="max-w-full max-h-full object-contain" />
                                        )}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveFile(index)}
                                                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded-md text-[10px] text-white/90">
                                            {mediaFiles[index]?.type.startsWith('video/') ? 'Video' : 'Image'}
                                        </div>
                                    </div>
                                ))}

                                <label className="block cursor-pointer aspect-video">
                                    <div className="h-full border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center text-center hover:border-primary/50 transition-all bg-accent/30">
                                        <Plus className="w-8 h-8 text-primary mb-2" />
                                        <span className="text-xs font-medium text-foreground/70">Add More</span>
                                    </div>
                                    <input
                                        type="file"
                                        accept="image/*,video/*"
                                        multiple
                                        onChange={handleFileChange}
                                        className="hidden"
                                        disabled={isSubmitting}
                                    />
                                </label>
                            </div>

                            {mediaFiles.length === 0 && (
                                <div className="text-center py-8 text-muted-foreground border-2 border-dashed border-border rounded-xl">
                                    <Upload className="w-8 h-8 mx-auto mb-2 opacity-50" />
                                    <p className="text-sm">No files selected</p>
                                </div>
                            )}

                            <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                                <p>• Supported items: Images (JPG, PNG, WebP) and Videos (MP4)</p>
                                <p>• Max file size: 50MB each</p>
                            </div>
                        </div>


                        {/* Submit Buttons */}
                        <div className="flex items-center gap-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 py-4 bg-primary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Creating Project...
                                    </>
                                ) : (
                                    'Create Project'
                                )}
                            </button>
                            <button
                                type="button"
                                onClick={() => setLocation('/admin/dashboard')}
                                disabled={isSubmitting}
                                className="px-8 py-4 bg-accent text-foreground font-bold rounded-xl hover:bg-accent/80 transition-all disabled:opacity-50"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default function AddProject() {
    return (
        <ProtectedRoute>
            <AddProjectContent />
        </ProtectedRoute>
    );
}
