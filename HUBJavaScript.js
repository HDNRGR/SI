
        let currentStep = 1;

        const stepsContent = [
            "Step 1: Initial Text", // Step 1 content
            "Step 2: Now you're on the second step!", // Step 2 content
            "Step 3: Congratulations, you've reached the third step!", // Step 3 content
            "Step 4: Congratulations, you've reached the forth step!"
        ];

        function moveNext() {
            currentStep++;
            updateTextContent();
            updateButtons();
        }

        function moveBack() {
            currentStep--;
            updateTextContent();
            updateButtons();
        }

        function updateTextContent() {
            const textContent = document.getElementById('textContent');
            if (currentStep <= stepsContent.length) {
                textContent.innerHTML = `<h2>${stepsContent[currentStep - 1]}</h2>`;
            }

            // Show pros and cons section only on Step 2
            const prosConsSection = document.getElementById('prosConsSection');
            if (currentStep === 2) {
                prosConsSection.classList.remove('hidden');
            } else {
                prosConsSection.classList.add('hidden');
            }

            // Show slider only on Step 3
            const slider = document.getElementById('slider');
            if (currentStep === 3) {
                slider.classList.remove('hidden');
            } else {
                slider.classList.add('hidden');
            }
        }

        function updateButtons() {
            const backButton = document.getElementById('backButton');
            const nextButton = document.getElementById('nextButton');
            
            // Show or hide the Back button based on the current step
            if (currentStep === 1) {
                backButton.classList.add('hidden'); // Hide the Back button on first step
            } else {
                backButton.classList.remove('hidden'); // Show the Back button on steps after the first
            }

            // Optionally, hide the Next button on the last step, or keep it visible.
            // For now, we keep it visible.
        }

        // Image Slider Logic
        let currentImageIndex = 0;

        function showImage(index) {
            const images = document.querySelectorAll('.slider-image');
            images.forEach((image, i) => {
                if (i === index) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        }

        function nextImage() {
            const images = document.querySelectorAll('.slider-image');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        }

        function prevImage() {
            const images = document.querySelectorAll('.slider-image');
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showImage(currentImageIndex);
        }

        // Initialize slider display
        showImage(currentImageIndex);

        // Initialize button visibility and text content
        updateTextContent();
        updateButtons();
