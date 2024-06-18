import React from 'react' // Import the React library
import appwriteService from '../appwrite/config' // Import the appwriteService for interacting with the Appwrite backend
import { Link } from 'react-router-dom' // Import the Link component from react-router-dom for navigation

// Define a functional component named PostCard
function PostCard({ $id, title, featuredImage }) {
  return (
    // Use the Link component to make the entire card a clickable link
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'> {/* Wrapper div with styles */}
        <div className='w-full justify-center mb-4'> {/* Inner div to center and style the image */}
          {/* Display the featured image using the getFilePreview method from appwriteService */}
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
        </div>
        {/* Display the post title */}
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard // Export the PostCard component as the default export
