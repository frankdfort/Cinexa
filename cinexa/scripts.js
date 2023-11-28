// Get the buttons
const getStartedButton = document.querySelector('.cta-button');
const signInButton = document.querySelector('.cta-button2');
const subscribeButton = document.querySelector('.subscribe-section .cta-button');
const bingeWatchButton = document.querySelector('.binge-watch-section .cta-button');

// Get the modal and close button
const modal = document.getElementById('disclaimerModal');
const closeBtn = document.querySelector('.close');

// Function to show the modal at the center of the viewport
function showModal() {
    modal.style.display = 'flex'; // Change display to flex
    modal.style.justifyContent = 'center'; // Center horizontally
    modal.style.alignItems = 'center'; // Center vertically
}

// Function to hide the modal
function hideModal() {
    modal.style.display = 'none';
}

// Event listeners for showing the modal on button click
getStartedButton.addEventListener('click', () => {
    showModal();
    window.scrollTo(0, 0); // Scroll to the top of the page when modal is shown
});
signInButton.addEventListener('click', () => {
    showModal();
    window.scrollTo(0, 0);
});
subscribeButton.addEventListener('click', () => {
    showModal();
    window.scrollTo(0, 0);
});
bingeWatchButton.addEventListener('click', () => {
    showModal();
    window.scrollTo(0, 0);
});

// Event listener to hide the modal when close button is clicked
closeBtn.addEventListener('click', hideModal);

// Get the download button and the modal
const downloadBtn = document.getElementById('androidDownloadBtn');
const developmentModal = document.getElementById('developmentModal');
const closeModalBtn = developmentModal.querySelector('.close');

// Function to show the modal at the center of the viewport
function showModal() {
    developmentModal.style.display = 'flex'; // Change display to flex
    developmentModal.style.justifyContent = 'center'; // Center horizontally
    developmentModal.style.alignItems = 'center'; // Center vertically
}

// Function to hide the modal
function hideModal() {
    developmentModal.style.display = 'none';
}

// Event listener for showing the modal on button click
downloadBtn.addEventListener('click', () => {
    showModal();
});

// Event listener to hide the modal when close button is clicked
closeModalBtn.addEventListener('click', hideModal);
