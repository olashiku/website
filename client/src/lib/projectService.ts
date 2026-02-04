import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    updateDoc,
    deleteDoc,
    query,
    orderBy,
    Timestamp,
    where,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from './firebase';

export interface ProjectMedia {
    url: string;
    type: 'image' | 'video';
    thumbnailUrl?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    media: ProjectMedia[];
    mediaUrl: string; // Kept for backward compatibility
    mediaType: 'image' | 'video'; // Kept for backward compatibility
    thumbnailUrl?: string;
    category?: string;
    tags?: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateProjectData {
    title: string;
    description: string;
    mediaFiles: File[];
    category?: string;
    tags?: string[];
}

const PROJECTS_COLLECTION = 'projects';

/**
 * Normalizes project data from Firestore, ensuring backward compatibility
 */
function normalizeProject(docSnap: any): Project {
    const data = docSnap.data();
    let media = data.media || [];

    // Fallback for older single-media projects
    if (media.length === 0 && data.mediaUrl) {
        media = [{
            url: data.mediaUrl,
            type: data.mediaType || 'image',
            thumbnailUrl: data.thumbnailUrl
        }];
    }

    return {
        id: docSnap.id,
        ...data,
        media,
        mediaUrl: media[0]?.url || data.mediaUrl || '',
        mediaType: media[0]?.type || data.mediaType || 'image',
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
    } as Project;
}

/**
 * Upload a media file to Firebase Storage
 */
export async function uploadMediaFile(file: File, projectId: string): Promise<ProjectMedia> {
    const timestamp = Date.now();
    const fileName = `${projectId}_${timestamp}_${file.name}`;
    const storageRef = ref(storage, `projects/${fileName}`);

    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    return {
        url: downloadURL,
        type: file.type.startsWith('video/') ? 'video' : 'image',
    };
}

/**
 * Get all projects from Firestore
 */
export async function getProjects(): Promise<Project[]> {
    const projectsRef = collection(db, PROJECTS_COLLECTION);
    const q = query(projectsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(normalizeProject);
}

/**
 * Get a single project by ID
 */
export async function getProjectById(id: string): Promise<Project | null> {
    const docRef = doc(db, PROJECTS_COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return normalizeProject(docSnap);
    }

    return null;
}

/**
 * Create a new project
 */
export async function createProject(data: CreateProjectData): Promise<Project> {
    const { mediaFiles, ...projectData } = data;

    // First, create the document to get an ID
    const projectsRef = collection(db, PROJECTS_COLLECTION);
    const tempDoc = await addDoc(projectsRef, {
        ...projectData,
        media: [],
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
    });

    // Upload all media files
    const media: ProjectMedia[] = [];
    for (const file of mediaFiles) {
        const mediaItem = await uploadMediaFile(file, tempDoc.id);
        media.push(mediaItem);
    }

    // Update the document with all media URLs
    // We also set mediaUrl/mediaType for compatibility with older components
    await updateDoc(tempDoc, {
        media,
        mediaUrl: media[0]?.url || '',
        mediaType: media[0]?.type || 'image',
    });

    // Return the created project
    const project = await getProjectById(tempDoc.id);
    return project!;
}

/**
 * Update an existing project
 */
export async function updateProject(
    id: string,
    data: Partial<CreateProjectData> & { existingMedia?: ProjectMedia[] }
): Promise<void> {
    const docRef = doc(db, PROJECTS_COLLECTION, id);
    const { mediaFiles, existingMedia, ...updateData } = data;

    const updates: any = {
        ...updateData,
        updatedAt: Timestamp.now(),
    };

    // Keep track of media
    let currentMedia = existingMedia || [];

    // If new media files are provided, upload them and append to current media
    if (mediaFiles && mediaFiles.length > 0) {
        const newMedia: ProjectMedia[] = [];
        for (const file of mediaFiles) {
            const mediaItem = await uploadMediaFile(file, id);
            newMedia.push(mediaItem);
        }
        currentMedia = [...currentMedia, ...newMedia];
    }

    if (currentMedia.length > 0) {
        updates.media = currentMedia;
        updates.mediaUrl = currentMedia[0].url;
        updates.mediaType = currentMedia[0].type;
    }

    await updateDoc(docRef, updates);
}

/**
 * Delete a project and its associated media
 */
export async function deleteProject(id: string): Promise<void> {
    const project = await getProjectById(id);

    if (project) {
        // Delete all media files from storage
        for (const item of project.media) {
            try {
                // Try to extract path from URL or use item.url if it's a full path
                // Firebase Storage refs can handle URLs but it's safer to use paths if possible
                // For now, deleteObject works with refs
                const mediaRef = ref(storage, item.url);
                await deleteObject(mediaRef);
            } catch (error) {
                console.error('Error deleting media file:', error);
            }
        }

        // Delete the document
        const docRef = doc(db, PROJECTS_COLLECTION, id);
        await deleteDoc(docRef);
    }
}

/**
 * Get projects by category
 */
export async function getProjectsByCategory(category: string): Promise<Project[]> {
    const projectsRef = collection(db, PROJECTS_COLLECTION);
    const q = query(
        projectsRef,
        where('category', '==', category),
        orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(normalizeProject);
}

