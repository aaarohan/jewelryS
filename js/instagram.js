class MyInstagram extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
        <section id="instagram-wrap" class="my-lg-9 bg-overlay">
            <div class="container-fluid ">
            <div class="section-header text-center mb-5">
                <h2 class="display-3">Shop Our Insta</h2>
            </div>
            <div class="row">
                <div class="col-lg-2 col-md-4 col-sm-6 mb-3">
                <div class="image-holder position-relative">
                    <a href="https://instagram.com/lenrogoldgallery">
                    <img src="../images/insta-item1.jpg" alt="instagram" class="img-fluid">
                    <div class="insta-item overlay-item position-absolute d-flex align-items-center justify-content-center">
                        <svg class="instagram svg-white" width="45" height="45">
                        <use xlink:href="#instagram"></use>
                        </svg>
                    </div>
                    </a>
                </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 mb-3">
                <div class="image-holder position-relative">
                    <a href="https://instagram.com/lenrogoldgallery">
                    <img src="../images/insta-item2.jpg" alt="instagram" class="img-fluid">
                    <div class="insta-item overlay-item position-absolute d-flex align-items-center justify-content-center">
                        <svg class="instagram svg-white" width="45" height="45">
                        <use xlink:href="#instagram"></use>
                        </svg>
                    </div>
                    </a>
                </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 mb-3">
                <div class="image-holder position-relative">
                    <a href="https://instagram.com/lenrogoldgallery">
                    <img src="../images/insta-item3.jpg" alt="instagram" class="img-fluid">
                    <div class="insta-item overlay-item position-absolute d-flex align-items-center justify-content-center">
                        <svg class="instagram svg-white" width="45" height="45">
                        <use xlink:href="#instagram"></use>
                        </svg>
                    </div>
                    </a>
                </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 mb-3">
                <div class="image-holder position-relative">
                    <a href="https://instagram.com/lenrogoldgallery">
                    <img src="../images/insta-item4.jpg" alt="instagram" class="img-fluid">
                    <div class="insta-item overlay-item position-absolute d-flex align-items-center justify-content-center">
                        <svg class="instagram svg-white" width="45" height="45">
                        <use xlink:href="#instagram"></use>
                        </svg>
                    </div>
                    </a>
                </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 mb-3">
                <div class="image-holder position-relative">
                    <a href="https://instagram.com/lenrogoldgallery">
                    <img src="../images/insta-item5.jpg" alt="instagram" class="img-fluid">
                    <div class="insta-item overlay-item position-absolute d-flex align-items-center justify-content-center">
                        <svg class="instagram svg-white" width="45" height="45">
                        <use xlink:href="#instagram"></use>
                        </svg>
                    </div>
                    </a>
                </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 mb-3">
                <div class="image-holder position-relative">
                    <a href="https://instagram.com/lenrogoldgallery">
                    <img src="../images/insta-item6.jpg" alt="instagram" class="img-fluid">
                    <div class="insta-item overlay-item position-absolute d-flex align-items-center justify-content-center">
                        <svg class="instagram svg-white" width="45" height="45">
                        <use xlink:href="#instagram"></use>
                        </svg>
                    </div>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </section>
    `;
    }
}
customElements.define("my-instagram", MyInstagram);