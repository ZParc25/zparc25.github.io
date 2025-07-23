document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATA: Your menu items ---
    // In a real application, you might load this from a server.
    const menuItems = [
        { id: 1, name: "Margherita Pizza" },
        { id: 2, name: "Classic Burger" },
        { id: 3, name: "Spaghetti Carbonara" },
        { id: 4, name: "Caesar Salad" },
        { id: 5, name: "Coke" },
        { id: 6, name: "Garlic Bread" },
        { id: 7, name: "Cheeseburger" },
        { id: 8, name: "Fries" }
    ];

    // --- 2. HTML ELEMENT REFERENCES ---
    const searchInput = document.getElementById('item-search');
    const autocompleteResults = document.getElementById('autocomplete-results');
    const orderItemsContainer = document.getElementById('order-items');
    const addMoreBtn = document.getElementById('add-more-btn');
    const reviewSubmitBtn = document.getElementById('review-submit-btn');

    // This array will hold the items the user has added to the order.
    let currentOrder = [];

    // --- 3. EVENT LISTENERS ---

    // Listen for input in the search bar
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        autocompleteResults.innerHTML = ''; // Clear previous results

        if (query) {
            const filteredItems = menuItems.filter(item => item.name.toLowerCase().includes(query));
            displayAutocomplete(filteredItems);
        } else {
            autocompleteResults.style.display = 'none';
        }
    });

    // "Add More" button functionality
    addMoreBtn.addEventListener('click', () => {
        searchInput.focus(); // Simply move the user's cursor back to the search bar
    });

    // "Review and Submit" button functionality
    reviewSubmitBtn.addEventListener('click', () => {
        // Build a final, clean order object from our currentOrder array
        const finalOrder = currentOrder.map(item => {
            return {
                id: item.id,
                name: item.name,
                quantity: parseInt(item.quantityInput.value, 10) || 1 // Default to 1 if quantity is invalid
            };
        });

        if (finalOrder.length === 0) {
            alert("Your order is empty!");
            return;
        }

        // For now, we'll just log it to the console and show an alert.
        // Later, this is where you would send the data to a server.
        console.log('Final Order Submitted:', finalOrder);
        alert('Your order has been submitted for review! Check the console (F12) to see the data.');
        
        // Optional: Clear the form after submission
        orderItemsContainer.innerHTML = '';
        currentOrder = [];
    });

    // --- 4. HELPER FUNCTIONS ---

    // Shows the filtered autocomplete results in the UI
    function displayAutocomplete(items) {
        if (items.length > 0) {
            autocompleteResults.innerHTML = '';
            items.forEach(item => {
                const div = document.createElement('div');
                div.textContent = item.name;
                div.addEventListener('click', () => {
                    selectItem(item);
                });
                autocompleteResults.appendChild(div);
            });
            autocompleteResults.style.display = 'block';
        } else {
            autocompleteResults.style.display = 'none';
        }
    }

    // Handles adding a selected item to the order list
    function selectItem(item) {
        // Hide the autocomplete box
        autocompleteResults.style.display = 'none';
        searchInput.value = ''; // Clear the search bar

        // Create the new HTML element for the selected item
        const itemElement = document.createElement('div');
        itemElement.classList.add('order-item');
        itemElement.innerHTML = `<span>${item.name}</span>`;

        // Create the quantity input pop-up
        const quantityPopup = document.createElement('div');
        quantityPopup.classList.add('quantity-popup');
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.min = '1';
        quantityInput.value = '1';
        quantityInput.placeholder = 'Qty';
        quantityPopup.appendChild(quantityInput);

        // Add the quantity input to the item element
        itemElement.appendChild(quantityPopup);

        // Add the completed item element to the page
        orderItemsContainer.appendChild(itemElement);

        // Store a reference to the item and its quantity input for later submission
        currentOrder.push({
            id: item.id,
            name: item.name,
            quantityInput: quantityInput // We keep a direct reference to the input element
        });
    }

    // Hide autocomplete if user clicks elsewhere on the page
    document.addEventListener('click', function(e) {
        if (!e.target.matches('#item-search')) {
            autocompleteResults.style.display = 'none';
        }
    });
});