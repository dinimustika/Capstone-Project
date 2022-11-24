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
      <link rel="stylesheet" href="public/asset/style.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  
      <link rel="stylesheet" href="path/to/bootstrap/css/bootstrap.min.css">
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">

      <!-- Navigasi -->
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark shadow-lg fixed-top">
          <div class="container">
            <a class="navbar-brand" href="index.html">FreelanceZone.</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-right" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="index.html">Home</a>
                </li>
    
                <li class="nav-item">
                  <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="service.html">Service</a>
                </li>
                     
              </ul>
            </div>
          </div>
       </nav>
  
      <!-- About -->
      <div class="container-fluid bg-light pt-5 pb-5">
          <div class="container">
            <h2 class="display-3 text-start pt-5 p-5" id="about">About Freelancezone</h2>
            <p class="text-center"></p>
            <div class="clearfix pt-5 p-5">
              <img src="asset/img/freelance4.jpg" class="col-md-6 float-md-end mb-3 crop-img"
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