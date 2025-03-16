
# 📌 A very simple Image Carousel HTML element JS package

A small simple image-carousel HTML element JS package for personal use. Feel free to use it though! 🎉

Link to the package: 

My another npm package (a simple dropdown menu!): https://www.npmjs.com/package/sbassan1-dropdown-menu

## 🚀 Usage Example

```js
import { ImageCarousel } from "./image-carousel.js";
import image1 from "./images/pexels-alinaskazka-31120801.jpg";
import image2 from "./images/pexels-miami302-30663489.jpg";
import image3 from "./images/pexels-gya-den-768256-2304204.jpg";
import image4 from "./images/pexels-yfshoot-14878587.jpg";

import "./style.css";

const imageList = [image1, image2, image3, image4];

const imageCarouselExample = new ImageCarousel(imageList);
const divExample = document.getElementsByClassName("example")[0];
divExample.append(imageCarouselExample.render());

```

## 📖 How It Works :

<ul>
  <li>
    1️⃣ Import all images you wish to use in the image carousel
  </li>  
  <li>
    2️⃣ Put all images into a list
  </li>  
  <li>
    3️⃣ Instantiate the ImageCarousel class and render it inside the desired <div>
  </li>  
</ul>

### ✅ You can customize the styling, add new effects, and extend the eventHandler function to add more effects!

:)
