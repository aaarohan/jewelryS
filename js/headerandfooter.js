// header
class MyHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="search-box position-relative overflow-hidden w-100">
          <div class="search-wrap">
            <div class="close-button position-absolute">
              <svg class="close-btn" width="22" height="22">
                <use xlink:href="#close-btn"></use>
              </svg>
            </div>
            <form id="search-form" class="text-center pt-3" action="" method="">
              <input type="text" class="search-input p-4 bg-body" placeholder="Search...">
              <svg class="search mb-1" width="22" height="22">
                <use xlink:href="#search"></use>
              </svg>
            </form>
          </div>
        </div>

        <header id="header" class="site-header border-bottom mx-lg-5 py-4">
          <div class="container-fluid px-4 px-lg-2">
            <div class="row">
              <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler d-flex d-lg-none p-0 order-3 border-0 shadow-none" type="button"
                  data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <svg class="navbar-icon" width="40" height="40">
                    <use xlink:href="#navbar-icon"></use>
                  </svg>
                </button>
                <a href="/index.html" class="navbar-brand d-flex d-lg-none title">
                  <img src="/images/main-logo.png" alt="Logo">
                </a>
                <div class="offcanvas offcanvas-end " tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
                  <div class="offcanvas-header p-4">
                    <button type="button" class="btn-close btn-close-black shadow-none" data-bs-dismiss="offcanvas"
                      aria-label="Close" data-bs-target="#bdNavbar"></button>
                  </div>
                  <div class="offcanvas-body d-flex justify-content-lg-between align-items-lg-center p-4 p-lg-0">

                    <div>
                      <a href="/index.html" class="navbar-brand  d-none d-lg-flex">
                        <img src="/images/main-logo.png" alt="Logo">
                      </a>
                    </div>
                    <div>
                      <div class="navbar-collapse " id="navbarMenu">
                        <ul class="navbar-nav ">
                          <li class="nav-item">
                            <a class="nav-link active text-uppercase pe-4" href="../index.html">Home</a>
                          </li>
                          <li class="nav-item dropdown">
                            <a class="nav-link text-uppercase me-4" href="../shop.html"
                              role="button" aria-expanded="false">Shop</a>
                          </li>
                          <li class="nav-item dropdown">
                            <a class="nav-link text-uppercase me-4" href="../more/blog.html"
                              role="button" aria-expanded="false">Blog</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-uppercase pe-4" href="../about.html">About</a>
                          </li>
                          <li class="nav-item dropdown">
                            <a class="nav-link text-uppercase me-4 dropdown-toggle" data-bs-toggle="dropdown" href="#"
                              role="button" aria-expanded="false">more</a>
                            <ul class="dropdown-menu">
                              <li>
                                <a href="/more/wishlist.html" class="dropdown-item">Wishlist </a>
                              </li>
                              <li>
                                <a href="/contact.html" class="dropdown-item">Contact </a>
                              </li>
                              <li>
                                <a href="/more/faqs.html" class="dropdown-item">FAQs </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <ul
                        class="user-items list-unstyled d-none d-lg-flex justify-content-end align-items-center flex-grow-1 gap-4 m-0">
                        <li>
                          <a href="/more/account.html">
                            <svg class="user" width="20" height="20">
                              <use xlink:href="#user"></use>
                            </svg>
                          </a>
                        </li>
                        <li class="search-item" data-bs-toggle="collapse" data-bs-target="#search-box"
                          aria-controls="search-box" aria-expanded="false" aria-label="Toggle navigation">
                          <a href="#">
                            <svg class="search" width="20" height="20">
                              <use xlink:href="#search"></use>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a class="icon-cart" href="../mycart.html" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart"
                            aria-controls="offcanvasCart">
                            <svg class="cart" width="20" height="20">
                              <use xlink:href="#cart"></use>
                            </svg>
                            <span>0</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
        `;
    }
  }
  customElements.define("my-header", MyHeader);
  

  // footer
  class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer id="footer" class="overflow-hidden my-lg-9">
        <div class="container-lg">
          <div class="row justify-content-center">
            <div class="col-md-5">
              <div class="image-holder  mb-4">
                <img src="/images/footer-logo.png" alt="logo" class="img-fluid">
              </div>
    
              <div>
                <p><a href="mailto:Lenrogoldgallery@proton.me">Lenrogoldgallery@proton.me</a></p>
                <p>Sahra Street, Fereshteh Street, Tehran, Iran </p>
                <p><a href="tel:+989121089732">+98 912 108 9732</a></p>
              </div>
    
              <ul class="social-links list-unstyled d-flex mt-4">
                <li class="border border-primary rounded-circle p-3 me-4">
                  <a href="https://wa.me/message/NZJ5FARTTV4HM1" class="svg-primary">
                    <svg class="fa-brands fa-whatsapp" width="25" height="25">
                      <use xlink:href="#whatsapp"></use>
                    </svg>
                  </a>
                </li>
                <li class="border border-primary rounded-circle p-3 me-4">
                  <a href="#" class="svg-primary">
                    <svg class="twitter" width="25" height="25">
                      <use xlink:href="#twitter"></use>
                    </svg>
                  </a>
                </li>
                <li class="border border-primary rounded-circle p-3 me-4">
                  <a href="https://instagram.com/lenrogoldgallery" class="svg-primary">
                    <svg class="instagram" width="25" height="25">
                      <use xlink:href="#instagram"></use>
                    </svg>
                  </a>
                </li>
                <li class="border border-primary rounded-circle p-3 me-4">
                  <a href="#" class="svg-primary">
                    <svg class="linkedin" width="25" height="25">
                      <use xlink:href="#linkedin"></use>
                    </svg>
                  </a>
                </li>
              </ul>
    
            </div>
            <div class="offset-md-2 col-md-5 mt-5 mt-lg-0">
              <div class="subscribe-content">
                <div class="subscribe-header ">
                  <h2 class="display-3">Subscribe to get our daily updates</h2>
                </div>
                <form id="form" class="py-3 position-relative">
                  <input type="text" name="email" placeholder="Write your email address here..."
                    class="w-100 bg-transparent border-0 border-bottom pb-3 ">
                  <a href="#" class="position-absolute end-0">
                    <svg class="send svg-primary" width="50" height="50">
                      <use xlink:href="#send"></use>
                    </svg>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="footer-bottom border-top py-3 mx-lg-5">
        <div class="container-lg">
          <div class="d-md-flex justify-content-between align-items-center">
            <div class="">
              <p class="m-0">© 2023 Copyright Lenro Gold Gallery. by <a href="https://webair.ir/" class="text-decoration-underline" target="_blank">
                  Webair</a>
              </p>
            </div>
            <div class=" d-flex flex-wrap">
              <div class="shipping me-4">
                <span>We ship with:</span>
                <img src="/images/arct-icon.png" alt="icon">
                <img src="/images/dhl-logo.png" alt="icon">
              </div>
              <div class="payment-option">
                <span>Payment Option:</span>
                <img src="/images/visa-card.png" alt="card">
                <img src="/images/paypal-card.png" alt="card">
                <img src="/images/master-card.png" alt="card">
              </div>
            </div>
          </div>
        </div>
      </div>`;
    }
  }
  customElements.define("my-footer", MyFooter);