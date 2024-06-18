import React, { useCallback } from 'react'  // Import React library and useCallback hook
import { useForm } from 'react-hook-form'  // Import useForm hook from react-hook-form
import Button from '../Button'  // Import Button component
import Select from '../Select'  // Import Select component
import Input from '../Input'  // Import Input component
import RTE from '../RTE'  // Import RTE (Rich Text Editor) component
import appwriteService from '../../appwrite/config'  // Import appwriteService for interacting with backend
import { useNavigate } from 'react-router-dom'  // Import useNavigate hook from react-router-dom for navigation
import { useSelector } from 'react-redux'  // Import useSelector hook from react-redux to access Redux store

// Define a functional component named PostForm that takes post as a prop
function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        // Initialize useForm hook with default values for form fields
        defaultValues: {
            title: post?.title || '',  // Set default value for title field
            slug: post?.slug || '',  // Set default value for slug field
            content: post?.post || '',  // Set default value for content field
            status: post?.status || 'active',  // Set default value for status field
        }
    })
    const navigate = useNavigate()  // Initialize useNavigate hook for navigation
    const userData = useSelector(state => state.user.userData)  // Access user data from Redux store

    // Define a submit function to handle form submission
    const submit = async (data) => {
        if (post) {
            // If editing an existing post
            const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null  // Upload new image file if provided

            if (file) {
                appwriteService.deleteFile(post.featuredImage)  // Delete existing featured image from backend
            }
            const dbPost = await appwriteService.updatePost(post.$id, {
                // Update post data in backend
                ...data,
                featuredImage: file ? file.$id : undefined,  // Update featured image ID if new image uploaded
            })
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)  // Navigate to the updated post page
            }
        } else {
            // If creating a new post
            const file = await appwriteService.uploadFile(data.image[0])  // Upload new image file

            if (file) {
                const fileId = file.$id
                data.featuredImage = fileId  // Set featured image ID in form data
                const dbPost = await appwriteService.createPost({
                    // Create new post in backend
                    ...data,
                    userId: userData.$id  // Set user ID for the new post
                })
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)  // Navigate to the newly created post page
                }
            }
        }
    }

    // Define a function to transform title into slug
    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string')
            return value
                .trim()
                .toLowerCase()
                .replace(/^[a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-")

        return ''
    }, [])

    // Listen for changes in the title field and update the slug field accordingly
    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title), { shouldValidate: true })  // Update slug value based on title
            }
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])

    return (
        // Form for post submission with input fields and buttons
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"  // Label for title input field
                    placeholder="Title"  // Placeholder text for title input field
                    className="mb-4"  // Additional CSS class for styling
                    {...register("title", { required: true })}  // Register title input field with useForm hook and set validation rules
                />
                <Input
                    label="Slug :"  // Label for slug input field
                    placeholder="Slug"  // Placeholder text for slug input field
                    className="mb-4"  // Additional CSS class for styling
                    {...register("slug", { required: true })}  // Register slug input field with useForm hook and set validation rules
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true })  // Update slug value based on input
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />  // Rich Text Editor for content input
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"  // Label for featured image input field
                    type="file"  // Input type for file selection
                    className="mb-4"  // Additional CSS class for styling
                    accept="image/png, image/jpg, image/jpeg, image/gif"  // Acceptable file formats for image upload
                    {...register("image", { required: !post })}  // Register image input field with useForm hook and set validation rules
                />
                {post && (
                    // Display existing featured image for editing
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}  // Source URL for existing featured image
                            alt={post.title}  // Alt text for accessibility
                            className="rounded-lg"  // Additional CSS class for styling
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}  // Options for status select input
                    label="Status"  // Label for status select input
                    className="mb-4"  // Additional CSS class for styling
                    {...register("status", { required: true })}  // Register status select input with useForm hook and set validation rules
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">  // Button for form submission
                    {post ? "Update" : "Submit"}  // Display "Update" if editing existing post, otherwise display "Submit"
                </Button>
            </div>
        </form>
    )
}

export default PostForm  // Export the PostForm component
