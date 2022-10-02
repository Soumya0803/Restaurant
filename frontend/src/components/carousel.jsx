import P1 from "../Assets/P1.jpg";
import P2 from "../Assets/P2.jpg";
import P3 from "../Assets/P3.jpg";


export default function Carousel() {
    return <>
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={P1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={P1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={P1} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>
}