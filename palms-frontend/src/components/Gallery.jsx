import "./Gallery.css";

import img1 from "../assets/gallery/gallery1.jpg";
import img2 from "../assets/gallery/gallery2.jpg";
import img3 from "../assets/gallery/gallery3.jpg";
import img4 from "../assets/gallery/gallery4.jpg";
import img5 from "../assets/gallery/gallery5.jpg";
import img6 from "../assets/gallery/gallery6.jpg";
import img7 from "../assets/gallery/gallery7.jpg";
import img8 from "../assets/gallery/gallery8.jpg";

function Gallery() {

const images=[
img1,img2,img3,img4,
img5,img6,img7,img8
];

return(

<section className="gallery" id="gallery">

<h4>OUR WORK</h4>

<h2>Project Gallery</h2>

<div className="gallery-grid">

{

images.map((image,index)=>(

<div className="gallery-item" key={index}>

<img src={image} alt={`Gallery ${index+1}`} />

</div>

))

}

</div>

</section>

);

}

export default Gallery;