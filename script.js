// Get the image element
const image = document.getElementById("FileImage1");

let offsetX, offsetY, isDragging = false;

// Function to handle the start of dragging
image.addEventListener("mousedown", (event) => {
    // When the mouse is pressed down, start dragging
    isDragging = true;
    offsetX = event.clientX - image.getBoundingClientRect().left;
    offsetY = event.clientY - image.getBoundingClientRect().top;

    // Prevent text selection during dragging
    document.body.style.userSelect = 'none';
});

// Function to handle dragging
document.addEventListener("mousemove", (event) => {
    if (isDragging) {
        image.style.position = 'absolute';
        image.style.left = `${event.clientX - offsetX}px`;
        image.style.top = `${event.clientY - offsetY}px`;
    }
});

// Function to handle the end of dragging
document.addEventListener("mouseup", () => {
    // When the mouse button is released, stop dragging
    isDragging = false;
    document.body.style.userSelect = '';  // Reset the user select style
});

