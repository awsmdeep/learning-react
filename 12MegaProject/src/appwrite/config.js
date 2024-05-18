import conf from '../conf'; // Import configuration details from the conf file
import { Client, ID, Databases, Storage, Query } from "appwrite"; // Import necessary modules from the Appwrite SDK

// Service class handles operations related to posts and file storage
export class Service {
    client = new Client(); // Initialize Appwrite client
    databases; // Declare databases property
    bucket; // Declare bucket property

    constructor() {
        // Configure the Appwrite client with endpoint and project ID
        this.client
            .setEndpoint(conf.appwriteUrl) // Set the API endpoint from configuration
            .setProject(conf.appwriteProjectId); // Set the project ID from configuration
        this.databases = new Databases(this.client); // Initialize Databases with the configured client
        this.bucket = new Storage(this.client); // Initialize Storage with the configured client
    }

    // Method to create a new post
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            // Create a new document in the specified database and collection with the post details
            return await this.databases.createDocument(
                conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.log(error); // Log any errors
        }
    }

    // Method to update an existing post
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            // Update the document with the specified slug in the specified database and collection
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        } catch (error) {
            console.log(error); // Log any errors
        }
    }

    // Method to delete a post
    async deletePost(slug) {
        try {
            // Delete the document with the specified slug in the specified database and collection
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId, conf.appwriteCollectionId, slug
            );
            return true; // Return true if deletion is successful
        } catch (error) {
            console.log(error); // Log any errors
            return false; // Return false if deletion fails
        }
    }

    // Method to get a single post by slug
    async getPost(slug) {
        try {
            // Get the document with the specified slug in the specified database and collection
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log(error); // Log any errors
            return false; // Return false if fetching the post fails
        }
    }

    // Method to get multiple posts with optional queries
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            // List documents in the specified database and collection with optional queries
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            );
        } catch (error) {
            console.log(error); // Log any errors
        }
    }

    // Method to upload a file
    async uploadFile(file) {
        try {
            // Upload a file to the specified bucket with a unique ID
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log(error); // Log any errors
            return false; // Return false if file upload fails
        }
    }

    // Method to delete a file
    async deleteFile(fileId) {
        try {
            // Delete a file with the specified file ID in the specified bucket
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true; // Return true if file deletion is successful
        } catch (error) {
            console.log(error); // Log any errors
            return false; // Return false if file deletion fails
        }
    }

    // Method to get a file preview
    getFilePreview(fileId) {
        // Get a preview of the file with the specified file ID in the specified bucket
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        );
    }
}

// Create an instance of Service
const service = new Service();

export default service; // Export the service instance for use in other parts of the application
