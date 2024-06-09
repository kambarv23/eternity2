document.addEventListener('DOMContentLoaded', function() {
    var modeOfDispatch = document.getElementById('mode_of_dispatch');
    var byHandFields = document.getElementById('by_hand_fields');
    var courierFields = document.getElementById('courier_fields');
    var form = document.getElementById('eternity-form');
    var dcNoInput = document.getElementById('eternity-dc-no');
    var counter = 1; // Initialize counter

    // Initial state
    if (modeOfDispatch.value === 'by_hand') {
        byHandFields.style.display = 'block';
        courierFields.style.display = 'none';
    } else if (modeOfDispatch.value === 'courier') {
        byHandFields.style.display = 'none';
        courierFields.style.display = 'block';
    }

    // Event listener for mode of dispatch change
    modeOfDispatch.addEventListener('change', function() {
        if (this.value === 'by_hand') {
            byHandFields.style.display = 'block';
            courierFields.style.display = 'none';
        } else if (this.value === 'courier') {
            byHandFields.style.display = 'none';
            courierFields.style.display = 'block';
        }
    });

    // Function to generate a unique DC number
    function generateDCNumber() {
        const prefix = "ETR-";
        const paddedCounter = pad(counter, 3); // Pad the counter to ensure it has 3 digits
        return prefix + paddedCounter;
    }

    // Function to pad a number with leading zeros
    function pad(num, size) {
        var s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    }

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var generatedDCNumber = generateDCNumber();
        dcNoInput.value = generatedDCNumber;
        console.log("Form submitted with Eternity DC No:", generatedDCNumber);
        counter++; // Increment counter
        // Here you can handle the form data as needed
    });
});
