import about1 from "../Assets/about-1.jpg";
import about2 from "../Assets/about-2.jpg";
import about3 from "../Assets/about-3.jpg";
import about4 from "../Assets/about-4.jpg";



export default function AboutUs() {
    return <>        
       <div class="container-fluid py-5 bg-dark">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="row g-3">
                            <div class="col-6 text-start">
                                <img class="img-fluid  w-100 wow animate__animated animate__zoomIn" data-wow-delay="0.1s" src={about1}/>
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid rounded w-75 wow animate__animated animate__zoomIn" data-wow-delay="0.3s" src={about2} style={{marginTop:"25%"}}/>
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid rounded w-75 wow animate__animated animate__zoomIn" data-wow-delay="0.5s" src={about3}/>
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid rounded w-100 wow animate__animated animate__zoomIn" data-wow-delay="0.7s" src={about4}/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h2 class="section-title ff-secondary text-start text-primary fw-normal wow animate__animated animate__bounce">About Us</h2>
                        <h1 class="mb-4 text-light">Welcome to our <i class="fa fa-utensils text-primary me-2"></i>Restraunt</h1>
                        <p class="mb-4  text-light">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                        <p class="mb-4  text-light">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div class="row g-4 mb-4">
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 class="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                                    <div class="ps-4">
                                        <p class="mb-0  text-light">Years of</p>
                                        <h6 class="text-uppercase mb-0  text-light">Experience</h6>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 class="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                                    <div class="ps-4">
                                        <p class="mb-0  text-light">Popular</p>
                                        <h6 class="text-uppercase mb-0  text-light">Master Chefs</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        
    </>
}
