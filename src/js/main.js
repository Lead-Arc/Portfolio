document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar
    // const navbar = document.getElementById('draggableNav');
    // makeDraggable(navbar);

    // function makeDraggable(element) {
    //     let isDragging = false;
    //     let offsetX, offsetY;
    //     let initialLeft, initialTop;

    //     // Store the initial position of the navbar
    //     function storeInitialPosition() {
    //         const rect = element.getBoundingClientRect();
    //         initialLeft = rect.left;
    //         initialTop = rect.top;
    //     }

    //     // When the user starts dragging (mousedown)
    //     element.addEventListener('mousedown', function(event) {
    //         isDragging = true;
    //         // Store initial position relative to the viewport
    //         storeInitialPosition();
    //         offsetX = event.clientX - element.getBoundingClientRect().left;
    //         offsetY = event.clientY - element.getBoundingClientRect().top;
    //         element.style.cursor = 'grabbing'; // Change cursor to indicate dragging
    //     });

    //     // During the dragging (mousemove)
    //     document.addEventListener('mousemove', function(event) {
    //         if (isDragging) {
    //             // Update the position of the element based on the mouse's position
    //             element.style.left = `${event.clientX - offsetX}px`;
    //             element.style.top = `${event.clientY - offsetY}px`;
    //         }
    //     });

    //     // When the user releases the mouse button (mouseup)
    //     document.addEventListener('mouseup', function() {
    //         isDragging = false;
    //         element.style.cursor = 'grab'; // Reset cursor after drag ends
    //     });

    //     // Adjust position when window is resized (zoom in/out)
    //     window.addEventListener('resize', function() {
    //         const currentZoom = window.innerWidth / document.documentElement.clientWidth;

    //         // Make sure the navbar stays within the bounds of the viewport after zoom
    //         const adjustedLeft = initialLeft * currentZoom;
    //         const adjustedTop = initialTop * currentZoom;

    //         // Adjust the position and keep it inside the screen
    //         const maxX = window.innerWidth - element.offsetWidth;
    //         const maxY = window.innerHeight - element.offsetHeight;

    //         // Ensure the navbar stays within bounds of the screen
    //         element.style.left = `${Math.min(adjustedLeft, maxX)}px`;
    //         element.style.top = `${Math.min(adjustedTop, maxY)}px`;
    //     });
    // }

    const mediaQuery = window.matchMedia("(max-width: 1800px)");
    const collapseButton = document.getElementById("btncollapse");
    const collapseContent = document.getElementById("coll");

    function handleScreenChange(event) {
        if (event.matches) {
            // The screen is small
            collapseContent.classList.remove("show");
            collapseButton.style.display = "block";
        } else {
            // The screen is large
            collapseContent.classList.add("show");
            collapseButton.style.display = "none";
        }
    }

    // Run the handler on initial page load
    handleScreenChange(mediaQuery);
    // Listen for changes in screen size
    mediaQuery.addEventListener("change", handleScreenChange);

    collapseButton.addEventListener("click", function(event) {
        event.preventDefault();
        // Toggle the text between "See More.." and "See Less.."
        if (collapseButton.innerText == "See Less..") {
            collapseButton.textContent = "See More.."; // Text when collapsed
        } else {
            collapseButton.textContent = "See Less.."; // Text when expanded
        }
    });

    const sr = ScrollReveal({
        origin:'top',
        distance:'1000px',
        duration:2500,
        delay:100,
        reset:true
    });
    sr.reveal('#card3')
    sr.reveal('#card1',{origin:'left',delay:100})
    sr.reveal('#card2',{origin:'left',delay:100}) 
    sr.reveal('#card_educ',{origin:'left',delay:100})
    sr.reveal('#card_tech',{origin:'left',delay:200})
    sr.reveal('#card_admin',{origin:'left',delay:300})
    sr.reveal('#card_soft',{origin:'left',delay:400}) 

    // Select all accordion headers
    const accordionHeaders = document.querySelectorAll('.card-header');

    // Loop through each header
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Get the body of the clicked header
            const accordionBody = this.nextElementSibling;

            // Close all other accordion bodies and add qualCollapse class
            const allBodies = document.querySelectorAll('.accordionChild');
            allBodies.forEach(body => {
                if (body !== accordionBody) {
                    body.classList.remove('show'); // Remove 'show' from other bodies
                    body.classList.add('qualCollapse'); // Add 'qualCollapse' to hide them
                }
            });

            // Toggle the clicked accordion body
            if (accordionBody.classList.contains('qualCollapse')) {
                accordionBody.classList.remove('qualCollapse');
                accordionBody.classList.add('show'); // Add 'show' to display the clicked body
            } else {
                accordionBody.classList.remove('show');
                accordionBody.classList.add('qualCollapse'); // Add 'qualCollapse' to hide it
            }
        });
    });
});
