//Feature 1: Search functionality

//Select the search input field
const searchInput = document.getElementById("searchInput");

//Select all the apartment cards
const apartmentCards = document.querySelectorAll(".Apartment-card");

//Select the no results message
const noResults = document.getElementById("noResults");

//run the code whenever the user types
searchInput.addEventListener("input", () => {

    //Get the search text and covert it to lowercase
    const searchText = searchInput.value.toLowerCase().trim();

    //count how many apartment match the search
    let matchCount = 0;

    //loop through every apartment card
    apartmentCards.forEach((card) => {

        //get the apartment section name
        const apartmentName = card.querySelector("h3").textContent.toLowerCase();

        //Get description name
        const description = card.querySelector(".apartment").textContent.toLowerCase();

        //Check whether the search matches the name or section of the apartment
        if (apartmentName.includes(searchText) || description.includes(searchText)) {

            //Display matching cards
            card.hidden = false;

            //incerease matching count
            matchCount++;

        } else {

            //hide the cards that do not match
            card.hidden = true;
        }
    });

    //Shows a message when there are no matches
    noResults.hidden = matchCount !== 0;
});

//Feature 2: Lightbox

// Select all gallery images
const galleryImages = document.querySelectorAll(".gallery-image");

// Select the lightbox background
const lightbox = document.getElementById("lightbox");

// Select the enlarged image element
const lightboxImage = document.getElementById("lightboxImage");

// Select the close button
const closeLightbox = document.getElementById("closeLightbox");

// Remember the element used to open the lightbox
let previousFocus = null;

// Function to open the lightbox
function openLightbox(image) {

    // Save the current keyboard focus
    previousFocus = document.activeElement;

    // Use the image that the student clicked
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    // Display the lightbox overlay
    lightbox.classList.add("show");

    // Move focus to the close button
    closeLightbox.focus();
}

// Function to close the lightbox
function hideLightbox() {

    // Hide the lightbox overlay
    lightbox.classList.remove("show");

    // Return focus to the previous element
    if (previousFocus) {
        previousFocus.focus();
    }
}

// Add a click event to each image
galleryImages.forEach((image) => {

    image.addEventListener("click", () => {
        openLightbox(image);
    });

    // Allow keyboard users to open the image using Enter
    image.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            openLightbox(image);
        }

    });

});

// Close when the X button is clicked
closeLightbox.addEventListener("click", hideLightbox);

// Close when the dark background is clicked
lightbox.addEventListener("click", (event) => {

    // Only close if the overlay itself was clicked
    if (event.target === lightbox) {
        hideLightbox();
    }

});

// Close lightbox by pressing the Escape key
document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        lightbox.classList.contains("show")
    ) {
        hideLightbox();
    }

    // Keep keyboard focus within the open lightbox
    if (
        event.key === "Tab" &&
        lightbox.classList.contains("show")
    ) {
        event.preventDefault();
        closeLightbox.focus();
    }

});