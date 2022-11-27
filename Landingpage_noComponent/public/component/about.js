class About extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
   
    connectedCallback(){
      this.render();
    }
   
    render() {
      this.shadowDOM.innerHTML = `      
      <link rel="stylesheet" href="./bootstrap/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="asset/style.css">
      <link rel="stylesheet" href="./font-awesome/css/font-awesome.min.css">
      <script src="./bootstrap/dist/js/bootstrap.bundle.min.js"></script>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" integrity="sha256-3sPp8BkKUE7QyPSl6VfBByBroQbKxKG7tsusY2mhbVY=" crossorigin="anonymous" />

              <!-- About -->
              <div class="container-fluid bg-light pt-5 pb-5">
                  <div class="container">
                      <h2 class="display-3 text-center pb-3" id="about">About FreelanceZone</h2>
                      <p class="text-start">Freelancer-ian is a medium for bringing together freelancers with potential customers. By carrying out the concept of a Content-Based Filtering recommendation system, this website will provide freelancer recommendations to customers based on rating, price and processing time you need.</p>
                      <div class="clearfix pt-5 us">
                          <img src="asset/img/about.jpg" class="col-md-6 float-md-end mb-3 crop-img" width="100%"
                          height="100%" />

                          <h5 class="col-md-4 mt-4 mb-5 text-start py-5">Helping you to find freelancer as you want, as cheap as you need, as worth as you pay by yourself</h5>

                          <h5 class="col-md-4 mt-4 mb-5 text-start py-5">Bringing best freelancer to you, more seller that has many experience based on your job</h5>

                          <h5 class="col-md-4 mt-4 mb-5 text-start py-5">Recommending you best freelancer for you based on your content by yourself</h5>

                          <h5 class="col-md-4 mt-4 mb-5 text-start py-5">Find your freelancer by yourself, more seller with more experience here</h5>

                      </div>
                  </div>
              </div>
      `;
    }
  }
   
  customElements.define('about-page', About);