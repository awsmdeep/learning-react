import conf from '../conf/conf'; // Import configuration details from the conf file
import { Client, Account, ID } from "appwrite"; // Import necessary modules from the Appwrite SDK

// AuthService class handles authentication-related operations
export class AuthService {
    client = new Client(); // Initialize Appwrite client
    account; // Declare account property

    constructor() {
        // Configure the Appwrite client with endpoint and project ID
        this.client
            .setEndpoint(conf.appwriteUrl) // Set the API endpoint from configuration
            .setProject(conf.appwriteProjectId); // Set the project ID from configuration
        this.account = new Account(this.client); // Initialize Account with the configured client
    }

    // Method to create a new user account
    async createAccount({ email, password, name }) {
        try {
            // Create a new user account with unique ID, email, password, and name
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // If account creation is successful, log in the user
                return this.login({ email, password });
            } else {
                return userAccount; // Return the user account details
            }
        } catch (error) {
            throw error; // Throw error if account creation fails
        }
    }

    // Method to log in a user with email and password
    async login({ email, password }) {
        try {
            // Create a session using email and password
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error; // Throw error if login fails
        }
    }

    // Method to get the currently logged-in user
    async currentUser() {
        try {
            return await this.account.get(); // Fetch the current user details
        } catch (error) {
            throw error; // Throw error if fetching user details fails
        }
        return null; // Return null if no user is logged in
    }

    // Method to log out the current user
    async logout() {
        try {
            await this.account.deleteSessions(); // Delete the current user session
        } catch (error) {
            throw error; // Throw error if logout fails
        }
    }
}

// Create an instance of AuthService
const authService = new AuthService();

export default authService; // Export the authService instance for use in other parts of the application
