document.addEventListener('DOMContentLoaded', () => {

    // --- START: New Store Location Data ---
    const storeLocations = [
        { id: '0096759', name: 'Sprouts Farmers Market 802', address: '24 E 2nd St, Edmond, OK 73034', group: 'Sprouts Farmers Market/HQ' },
        { id: '7199954', name: 'Sprouts Farmers Market 803', address: '559 W Main St, Norman, OK 73069', group: 'Sprouts Farmers Market/HQ' },
        { id: '0894750', name: 'Sprouts Farmers Market 801', address: '6410 N May Ave, Oklahoma City, OK 73116', group: 'Sprouts Farmers Market/HQ' },
        { id: '7457795', name: 'Sprouts Farmers Market 808', address: '12200 N Macarthur Blvd, Oklahoma City, OK 73162', group: 'Sprouts Farmers Market/HQ' },
        { id: '7587844', name: 'Sprouts Farmers Market 812', address: '12100 S Pennsylvania Ave, Oklahoma City, OK 73170', group: 'Sprouts Farmers Market/HQ' },
        { id: '0917279', name: 'Sprouts Farmers Market 602', address: '1375 S State St, Orem, UT 84097', group: 'Sprouts Farmers Market/HQ' },
        { id: '1790983', name: 'Whole Foods Market 10167', address: '3135 Washtenaw Ave, Ann Arbor, MI 48104', group: 'Whole Foods Market/Midwest Reg' },
        { id: '0776454', name: 'Whole Foods Market 10315', address: '990 W Eisenhower Pkwy, Ann Arbor, MI 48103', group: 'Whole Foods Market/Midwest Reg' },
        { id: '2621863', name: 'Whole Foods Market 10303', address: '1160 Town & Country Commons Dr, Chesterfield, MO 63017', group: 'Whole Foods Market/Midwest Reg' },
        { id: '7448444', name: 'Whole Foods Market 10535', address: '4577 W Pine Blvd, Saint Louis, MO 63108', group: 'Whole Foods Market/Midwest Reg' },
        { id: '3981138', name: 'Whole Foods Market 10376', address: '6001 N Western Ave, Oklahoma City, OK 73118', group: 'Whole Foods Market/Southwest Reg' },
        { id: '3901439', name: 'Whole Foods Market 10280', address: '544 S 700 E, Salt Lake City, UT 84102', group: 'Whole Foods Market/Rocky Mtn Reg' },
        { id: '0972029', name: 'Whole Foods Market 10415', address: '1131 E Wilmington Ave, Salt Lake City, UT 84106', group: 'Whole Foods Market/Rocky Mtn Reg' },
        { id: '1869854', name: 'Whole Foods Market 10430', address: '6930 S Highland Dr, Salt Lake City, UT 84121', group: 'Whole Foods Market/Rocky Mtn Reg' },
        { id: '7550624', name: 'Whole Foods Market 10646', address: '6598 N Landmark Dr, Park City, UT 84098', group: 'Whole Foods Market/Rocky Mtn Reg' },
        { id: '5531742c456995835c2ddb05', name: 'Whole Foods Market 10694', address: '5700 Penn Ave, Pittsburgh, PA 15206', group: 'Whole Foods Market/Midwest Reg' },
        { id: '586e817bfd1842ab90570ca9', name: 'Whole Foods Market 10242', address: '111 Siena Dr, Upper St Clair, PA 15241', group: 'Whole Foods Market/Midwest Reg' },
        { id: '5531742c456995835c2ddb0b', name: 'Whole Foods Market 10377', address: '10576 Perry Hwy, Wexford, PA 15090', group: 'Whole Foods Market/Midwest Reg' }
    ];
    // --- END: New Store Location Data ---

    // --- 1. DATA: Your menu items ---
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
    const storeSelector = document.getElementById('store-selector'); // New reference
    const searchInput = document.getElementById('item-search');
    const autocompleteResults = document.getElementById('autocomplete-results');
    const orderItemsContainer = document.getElementById('order-items');
    const addMoreBtn = document.getElementById('add-more-btn');
    const reviewSubmitBtn = document.getElementById('review-submit-btn');

    let currentOrder = [];

    // --- 3. EVENT LISTENERS ---

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        autocompleteResults.innerHTML = ''; 
        if (query) {
            const filteredItems = menuItems.filter(item => item.name.toLowerCase().includes(query));
            displayAutocomplete(filteredItems);
        } else {
            autocompleteResults.style.display = 'none';
        }
    });

    addMoreBtn.addEventListener('click', () => {
        searchInput.focus(); 
    });

    // --- START: Updated "Review and Submit" button logic ---
    reviewSubmitBtn.addEventListener('click', () => {
        const selectedStoreId = storeSelector.value;

        // First, validate that a store has been selected
        if (!selectedStoreId) {
            alert("Please select a store location before submitting.");
            return; // Stop the function here
        }

        const items = currentOrder.map(item => {
            return {
                id: item.id,
                name: item.name,
                quantity: parseInt(item.quantityInput.value, 10) || 1
            };
        });

        if (items.length === 0) {
            alert("Your order is empty!");
            return;
        }

        // Find the full store object from our data
        const storeInfo = storeLocations.find(store => store.id === selectedStoreId);

        // Create a final order object that includes both store and item info
        const finalOrder = {
            store: storeInfo,
            items: items
        };

        console.log('Final Order Submitted:', finalOrder);
        alert('Your order has been submitted for review! Check the console (F12) to see the data.');
        
        // Clear the form for the next order
        orderItemsContainer.innerHTML = '';
        currentOrder = [];
        storeSelector.value = ""; // Reset the dropdown
    });
    // --- END: Updated "Review and Submit" button logic ---

    // --- 4. HELPER FUNCTIONS ---

    // --- START: New function to populate the store dropdown ---
    function populateStoreDropdown() {
        storeLocations.forEach(store => {
            const option = document.createElement('option');
            option.value = store.id; // The value sent with the form
            option.textContent = `${store.name} - ${store.address}`; // The text the user sees
            storeSelector.appendChild(option);
        });
    }
    // --- END: New function to populate the store dropdown ---

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

    function selectItem(item) {
        autocompleteResults.style.display = 'none';
        searchInput.value = ''; 

        const itemElement = document.createElement('div');
        itemElement.classList.add('order-item');
        itemElement.innerHTML = `<span>${item.name}</span>`;

        const quantityPopup = document.createElement('div');
        quantityPopup.classList.add('quantity-popup');
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.min = '1';
        quantityInput.value = '1';
        quantityInput.placeholder = 'Qty';
        quantityPopup.appendChild(quantityInput);

        itemElement.appendChild(quantityPopup);
        orderItemsContainer.appendChild(itemElement);

        currentOrder.push({
            id: item.id,
            name: item.name,
            quantityInput: quantityInput
        });
    }

    document.addEventListener('click', function(e) {
        if (!e.target.matches('#item-search')) {
            autocompleteResults.style.display = 'none';
        }
    });

    // --- 5. INITIALIZATION ---
    populateStoreDropdown(); // Call the new function to build the dropdown when the page loads

});
