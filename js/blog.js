class MyBlog extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section id="blog" class="my-lg-9">
            <div class="container-lg">
            <div class="banner-content my-lg-5 mt-0">
                <p class="fw-light sub-heading text-uppercase">Our Blogs</p>
                <h2 class="display-3">Read our latest blogs</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 mb-5">
                <div class="card-item">
                    <div class="card-image text-center">
                    <a href="/more/blog.html">
                        <img src="../images/post-image1.jpg" alt="post" class="img-fluid">
                    </a>
                    </div>
                    <div class="card-body">
                    <div class="post-header">
                        <h4 class="display-6 mt-3">
                        <a href="/more/blog.html">Trend Alert: Mixed Metal Jewelry</a>
                        </h4>
                        <p>Stay ahead of the fashion curve with our Trend Alert series, starting with the hottest trend in jewelry: mixed metal. Explore the art of combining different metals to create unique and stylish pieces that add a modern twist to any outfit. Discover how to effortlessly incorporate mixed metal jewelry into your wardrobe and elevate your style. <a href="blog.html"
                            class="text-black-50 text-decoration-underline">Learn more</a></p>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-5">
                <div class="card-item">
                    <div class="card-image text-center">
                    <a href="/more/blog.html">
                        <img src="../images/post-image2.jpg" alt="post" class="img-fluid">
                    </a>
                    </div>
                    <div class="card-body">
                    <div class="post-header">
                        <h4 class="display-6 mt-3">
                        <a href="/more/blog.html">Caring for Your Luxury Jewelry</a>
                        </h4>
                        <p>Ensure your jewelry stays as stunning as the day you bought it with our comprehensive guide to caring for your jewelry. Learn the best practices for cleaning, storing, and maintaining your precious pieces to keep them looking their best for years to come. From diamonds to pearls, our tips will help you preserve the beauty. <a href="blog.html"
                            class="text-black-50 text-decoration-underline">Learn more</a></p>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-5">
                <div class="card-item">
                    <div class="card-image text-center">
                    <a href="/more/blog.html">
                        <img src="../images/post-image3.jpg" alt="post" class="img-fluid">
                    </a>
                    </div>
                    <div class="card-body">
                    <div class="post-header">
                        <h4 class="display-6 mt-3">
                        <a href="/more/blog.html">Spotlight on Sustainable Jewelry Brands</a>
                        </h4>
                        <p>Join us as we shine a spotlight on sustainable jewelry brands that are making a difference in the industry. Discover the eco-friendly practices and ethical sourcing methods that these brands employ to create stunning pieces that are as good for the planet as they are for your style. Learn how you can support sustainable jewelry brands. <a href="blog.html"
                            class="text-black-50 text-decoration-underline">Learn more</a></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
      `;
    }
  }
  customElements.define("my-blog", MyBlog);
