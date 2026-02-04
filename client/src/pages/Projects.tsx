import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { getProjects, type Project } from "@/lib/projectService";
import { updateMetaTags } from "../lib/seo";
import { Loader2, Image as ImageIcon, Video, Play } from "lucide-react";

export default function Projects() {
    const [, setLocation] = useLocation();
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        updateMetaTags({
            title: "Our Projects | Rock City Home",
            description: "Explore our portfolio of construction, development, and property management projects. See the quality and expertise we bring to every project.",
            keywords: "rock city projects, construction portfolio, development projects, property projects",
        });

        loadProjects();
    }, []);

    const loadProjects = async () => {
        try {
            setIsLoading(true);
            const data = await getProjects();
            setProjects(data);

            // Extract unique categories
            const uniqueCategories = Array.from(
                new Set(data.map(p => p.category).filter(Boolean))
            ) as string[];
            setCategories(uniqueCategories);
        } catch (error) {
            console.error('Error loading projects:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                            Our Projects
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Explore our portfolio of exceptional construction, development, and property management projects that showcase our commitment to quality and innovation.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    {/* Category Filters */}
                    {categories.length > 0 && (
                        <AnimatedSection className="mb-12">
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === 'all'
                                        ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/30'
                                        : 'bg-accent hover:bg-accent/80 text-foreground'
                                        }`}
                                >
                                    All Projects
                                </button>
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                            ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/30'
                                            : 'bg-accent hover:bg-accent/80 text-foreground'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </AnimatedSection>
                    )}

                    {/* Loading State */}
                    {isLoading ? (
                        <div className="flex items-center justify-center py-20">
                            <div className="text-center">
                                <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
                                <p className="text-muted-foreground">Loading projects...</p>
                            </div>
                        </div>
                    ) : filteredProjects.length === 0 ? (
                        /* Empty State */
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                                <ImageIcon className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">No Projects Yet</h3>
                            <p className="text-muted-foreground mb-8">
                                {selectedCategory === 'all'
                                    ? 'Check back soon for our latest projects'
                                    : `No projects found in "${selectedCategory}" category`}
                            </p>
                            {selectedCategory !== 'all' && (
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className="px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all"
                                >
                                    View All Projects
                                </button>
                            )}
                        </div>
                    ) : (
                        /* Projects Grid */
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => (
                                <AnimatedSection key={project.id} delay={index * 100}>
                                    <div className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/50">
                                        <div className="relative aspect-video bg-black/90 overflow-hidden">
                                            {project.mediaType === 'video' ? (
                                                <div className="relative w-full h-full">
                                                    <video
                                                        src={project.mediaUrl}
                                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                                        muted
                                                        loop
                                                        playsInline
                                                        autoPlay
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                                                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                            <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <img
                                                    src={project.mediaUrl}
                                                    alt={project.title}
                                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                                    loading="lazy"
                                                />
                                            )}

                                            {/* Media Type Badge */}
                                            <div className="absolute top-4 right-4 z-10">
                                                <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-[10px] text-white font-medium flex items-center gap-1.5 border border-white/10">
                                                    {project.mediaType === 'video' ? (
                                                        <>
                                                            <Video className="w-3 h-3 text-primary" />
                                                            Video
                                                        </>
                                                    ) : (
                                                        <>
                                                            <ImageIcon className="w-3 h-3 text-primary" />
                                                            Image
                                                        </>
                                                    )}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-4 line-clamp-3">
                                                {project.description}
                                            </p>

                                            {/* Tags/Category */}
                                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                                {project.category && (
                                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                                        {project.category}
                                                    </span>
                                                )}
                                                {project.tags?.slice(0, 2).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 bg-accent text-foreground rounded-full text-xs"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Footer */}
                                            <div className="flex items-center justify-between pt-4 border-t border-border">
                                                <span className="text-sm text-muted-foreground">
                                                    {new Date(project.createdAt).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                    })}
                                                </span>
                                                <Link
                                                    href={`/projects/${project.id}`}
                                                    className="text-sm font-medium text-primary hover:underline"
                                                >
                                                    View Details →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            {filteredProjects.length > 0 && (
                <section className="py-20 bg-gradient-to-r from-primary to-purple-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-xl text-white/90 mb-8">
                                Let's work together to bring your vision to life with the same quality and dedication you see in our projects.
                            </p>
                            <button
                                onClick={() => setLocation('/contact')}
                                className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:shadow-2xl hover:scale-105 transition-all"
                            >
                                Get Started Today
                            </button>
                        </AnimatedSection>
                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
}
