## LoginPage Component

This is a React component that represents a login page for The Toy Lab application. It allows users to log in using their email and password.


## Navbar Component
Renders a logo image.
Provides a menu for mobile devices and a horizontal navigation bar for larger screens.
Supports dropdown functionality for the menu.
Renders navigation links to various pages of the application.
Displays user-specific options if a user is logged in.
Provides a "Login" button if no user is logged in.
Utilizes React, react-router-dom, Tooltip, and AuthContext.
Handles user logout functionality.
Provides responsive design for different screen sizes.



## AboutUs Component
## The AboutUs component is a React component that provides information about The Thy Lab, an online toy store.

## Features
Displays the toy store logo and a welcome message.
Describes the mission and values of The Thy Lab.
Highlights the wide range of high-quality toys available.
Emphasizes the commitment to safety, durability, and entertainment value.
Promises secure online transactions, fast shipping, and excellent customer service.
Expresses gratitude for choosing The Thy Lab and looks forward to serving customers.


## Blogs Component
## The Blogs component is a React component that displays a list of blog posts and allows users to read more about specific topics.

## Features
Displays a list of blog post titles.
Provides a "Read Answer" button for each blog post.
Uses modal functionality to show the full answer when a user clicks on the "Read Answer" button.
Utilizes state variables (showModal, selectedQuestion, selectedAnswer) to manage the modal state and selected question and answer.
Provides a modal component (Modal) for displaying the full answer.
Handles modal open and close actions through event handlers (handleModalOpen, handleModalClose).
Renders blog post content dynamically using JSX and state variables.
Supports responsive design for different screen sizes.




## Carousel Component
## The Carousel component is a React component that displays a slideshow of images in a carousel format.

## Features
Renders a carousel container to hold the carousel component.
Displays a carousel with a set of images that automatically transition every 2 seconds.
Utilizes state variable currentIndex to keep track of the currently displayed image index.
Uses the useEffect hook to set up an interval to automatically increment the currentIndex value.
Updates the carousel display based on the current value of currentIndex.
Supports a set of carousel images stored in an array (carouselItems).
Renders each image as a carousel item with appropriate styling.
Provides responsive design with a fixed height of 80 units.


## FeedbackPage Component
## The FeedbackPage component is a React component that allows users to submit feedback through a form.

## Features
Renders a feedback page with a background color and layout.
Displays a form for users to enter their name, email, and message.
Utilizes the Swal.fire function from the SweetAlert2 library to show a success message upon form submission.
Handles form submission by preventing the default form behavior and triggering the success message.
Provides input fields for the user's name, email, and message with appropriate styling.
Requires all input fields to be filled out before allowing form submission.
Renders a submit button to trigger the form submission.
Provides responsive design with appropriate margin and padding.