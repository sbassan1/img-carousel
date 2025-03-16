import {ImageCarousel} from "./image-carousel.js"
import image1 from "./images/pexels-alinaskazka-31120801.jpg";
import image2 from "./images/pexels-miami302-30663489.jpg";
import image3 from "./images/pexels-gya-den-768256-2304204.jpg";
import image4 from "./images/pexels-yfshoot-14878587.jpg";

import "./style.css"

const imageList = [
    image1,
    image2,
    image3,
    image4
];

const imageCarouselExample = new ImageCarousel(imageList);
const divExample = document.getElementsByClassName("example")[0];
divExample.append(imageCarouselExample.render());


