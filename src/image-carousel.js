

/*
const imageList = [
  "./src/images/image1.jpg",
  "./src/images/image2.jpg",
  "./src/images/image3.jpg",
];
*/

export class ImageCarousel {
    constructor(imageList) {
        this.imageList = imageList; // Array of image sources
        this.elements = {}; // Store references to DOM elements
        this.currentIndex = 0; // Track active image

        this.eventHandlers();
    }

    render() {
        const frameDiv = document.createElement('div');
        frameDiv.className = "img-carousel-frame";

        const slides = document.createElement('div'); // Contains images
        slides.className = "img-carousel-slides";

        const controls = document.createElement('div');
        controls.className = "img-carousel-controls";

        const imagePickers = document.createElement('div');
        imagePickers.className = "img-carousel-pickers";

        const prevBtn = document.createElement('button');
        prevBtn.className = "img-carousel-prev";
        prevBtn.textContent = "←"; 

        const nextBtn = document.createElement('button');
        nextBtn.className = "img-carousel-next";
        nextBtn.textContent = "→";

        this.imageList.forEach((imageSrc, index) => {
            const imageSlide = document.createElement('img');
            imageSlide.className = "img-carousel-image";
            imageSlide.src = imageSrc;
            if (index !== 0) {
                imageSlide.style.display = "none"; // Hide all but the first image
            }
            slides.append(imageSlide);

            const imgBtn = document.createElement('button');
            imgBtn.textContent = '';
            imgBtn.className = "img-carousel-btn-picker";
            imgBtn.dataset.index = index; 
            imagePickers.append(imgBtn);
        });

        controls.append(prevBtn, nextBtn, imagePickers);
        frameDiv.append(slides, controls);

        this.elements = {
            frameDiv,
            slides,
            prevBtn,
            nextBtn,
            imagePickers,
            images: slides.querySelectorAll(".img-carousel-image"),
            buttons: imagePickers.querySelectorAll(".img-carousel-btn-picker"),
        };

        return frameDiv;
    }

}
