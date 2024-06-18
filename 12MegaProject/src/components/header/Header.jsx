import React from 'react' // Import React library
import Container from '../container/Container' // Import Container component
import Logo from '../Logo' // Import Logo component
import LogoutBtn from './LogoutBtn' // Import LogoutBtn component
import { Link } from 'react-router-dom' // Import Link component from react-router-dom
import { useNavigate } from 'react-router-dom' // Import useNavigate hook from react-router-dom
import { useSelector } from 'react-redux' // Import useSelector hook from react-redux
  
function Header() { // Define Header functional component
  const authStatus = useSelector((state) => state.auth.status) // Get auth status from Redux state
  const navigate = useNavigate(); // Initialize navigate function for programmatic navigation

  // Define navigation items with their properties
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus, // Show if user is not authenticated
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus, // Show if user is not authenticated
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus, // Show if user is authenticated
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus, // Show if user is authenticated
    },
  ]

  return (
    <Header className="py-3 shadow bg-gray-500"> {/* Header component with styling */}
      <Container> {/* Wrap content inside a Container component */}
        <nav className='flex'> {/* Navigation bar with flex display */}
          <div className='mr-4'> {/* Div with right margin for spacing */}
            <Link to='/'> {/* Link to home page */}
              <Logo width='70px'/> {/* Logo component with specified width */}
            </Link>
          </div>
          <ul className='flex ml-auto'> {/* Unordered list with flex display and left margin auto for alignment */}
            {navItems.map((item) => // Map through navigation items
              item.active ? ( // Check if the item should be active
                <li key={item.name}> {/* List item with key as item name */}
                  <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    onClick={() => navigate(item.slug)}> {/* Button with styling and click event to navigate */}
                    {item.name} {/* Display item name */}
                  </button>
                </li>
              ) : null // Render nothing if item is not active
            )}
            {authStatus && ( // Check if user is authenticated
              <li> {/* List item for logout button */}
                <LogoutBtn/> {/* Logout button component */}
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </Header>
  )
}

export default Header // Export Header component as default
