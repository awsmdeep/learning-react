import React from 'react'  // Import React library
import { Editor } from '@tinymce/tinymce-react'  // Import Editor component from TinyMCE React integration
import { Controller } from 'react-hook-form'  // Import Controller from react-hook-form

// Define a functional component named RTE (Rich Text Editor) that takes name, control, label, and defaultValue as props
export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className='w-full'>  // Container div with full width
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}  // Conditionally render a label if provided

      <Controller
        name={name || "content"}  // Set the name for the form control, default to "content" if name is not provided
        control={control}  // Pass the control prop from react-hook-form
        render={({ field: { onChange } }) => (  // Use the render function to get the onChange method from field
          <Editor
            initialValue={defaultValue}  // Set the initial value for the editor
            init={{
              initialValue: defaultValue,  // Initial value for the editor content
              height: 500,  // Set the height of the editor
              menubar: true,  // Enable the menu bar
              plugins: [  // List of plugins to include in the editor
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "help",
                "wordcount",
              ],
              toolbar:  // Define the toolbar layout and options
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"  // Define the content style
            }}
            onEditorChange={onChange}  // Handle changes in the editor content and update the form field
          />
        )}
      />
    </div>
  )
}
