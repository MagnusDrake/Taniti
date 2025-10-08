const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.getElementById('primary-navigation');

navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('is-active');
});

document.addEventListener('DOMContentLoaded', () => {
    // Find all the filter checkboxes
    const filterCheckboxes = document.querySelectorAll('.filters input[type="checkbox"]');
    // Find all the cards to be filtered
    const cards = document.querySelectorAll('.filterable-cards .card-link');

    const filterCards = () => {
        const selectedCategories = [];
        // Get all the checked categories
        filterCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selectedCategories.push(checkbox.value);
            }
        });

        // Loop through each card
        cards.forEach(card => {
            const cardCategories = card.dataset.category.split(' ');
            
            // If no filters are selected, show all cards
            if (selectedCategories.length === 0) {
                card.style.display = 'block';
                return;
            }
            
            // Check if the card's categories match any of the selected filters
            const hasMatch = selectedCategories.some(category => cardCategories.includes(category));

            if (hasMatch) {
                card.style.display = 'block'; // Show the card
            } else {
                card.style.display = 'none'; // Hide the card
            }
        });
    };

    // Add a click listener to each checkbox
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterCards);
    });
});