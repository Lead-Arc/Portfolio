document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar
    const navbar = document.getElementById('draggableNav');
    makeDraggable(navbar);

    function makeDraggable(element) {
        let isDragging = false;
        let offsetX, offsetY;
        let initialLeft, initialTop;

        // Store the initial position of the navbar
        function storeInitialPosition() {
            const rect = element.getBoundingClientRect();
            initialLeft = rect.left;
            initialTop = rect.top;
        }

        // When the user starts dragging (mousedown)
        element.addEventListener('mousedown', function(event) {
            isDragging = true;
            // Store initial position relative to the viewport
            storeInitialPosition();
            offsetX = event.clientX - element.getBoundingClientRect().left;
            offsetY = event.clientY - element.getBoundingClientRect().top;
            element.style.cursor = 'grabbing'; // Change cursor to indicate dragging
        });

        // During the dragging (mousemove)
        document.addEventListener('mousemove', function(event) {
            if (isDragging) {
                // Update the position of the element based on the mouse's position
                element.style.left = `${event.clientX - offsetX}px`;
                element.style.top = `${event.clientY - offsetY}px`;
            }
        });

        // When the user releases the mouse button (mouseup)
        document.addEventListener('mouseup', function() {
            isDragging = false;
            element.style.cursor = 'grab'; // Reset cursor after drag ends
        });

        // Adjust position when window is resized (zoom in/out)
        window.addEventListener('resize', function() {
            const currentZoom = window.innerWidth / document.documentElement.clientWidth;

            // Make sure the navbar stays within the bounds of the viewport after zoom
            const adjustedLeft = initialLeft * currentZoom;
            const adjustedTop = initialTop * currentZoom;

            // Adjust the position and keep it inside the screen
            const maxX = window.innerWidth - element.offsetWidth;
            const maxY = window.innerHeight - element.offsetHeight;

            // Ensure the navbar stays within bounds of the screen
            element.style.left = `${Math.min(adjustedLeft, maxX)}px`;
            element.style.top = `${Math.min(adjustedTop, maxY)}px`;
        });
    }
});
