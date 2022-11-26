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
            <h2 class="display-3 text-start pt-5 p-5" id="about">About Freelancezone</h2>
            <p class="text-center"></p>
            <div class="clearfix pt-5 p-5">
              <img src="asset/img/about.jpg" class="col-md-6 float-md-end mb-3 crop-img"
              width="100%"
              height="100%"
              />
    
              <h3 class="col-md-4 mt-5 mb-5 text-start">Making easy your job with this website</h3>
              <p>Websites that can provide your experience in finding freelancers based on your needs at work that recommend freelancers based on the content you choose.
              </p> <br> <br>
  
              <button class="btn btn-primary mt-4">Read More</button>
  
              <div class="social pt-5">
                <ul>
                  <a href=""><i class="fa fa-github"></i></a>
                  <a href=""><i class="fa fa-instagram"></i></a>
                  <a href=""><i class="fa fa-twitter"></i></a>
                </ul>
              </div>
    
            </div>
          </div>
      </div>
      `;
    }
  }
   
  customElements.define('about-page', About);