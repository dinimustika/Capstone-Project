class Footer extends HTMLElement {
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

      <footer>
        <div class="footer-top text-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 text-center">
                        <h4 class="navbar-brand">FreelanceZone<span class="dot">.</span></h4>
                        <p>Supporting our website, making your time easy to use it with this website only together with your freelancer</p>
                        <div class="col-auto social-icons">
                            <a class="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                class="zmdi zmdi-twitter"></i></a>
                            <a class="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                class="zmdi zmdi-facebook"></i></a>
                            <a class="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                class="zmdi zmdi-youtube"></i></a>
                            <a class="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                class="zmdi zmdi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom text-center">
            <p class="mb-0">Copyright Company 2022. All rights Reserved</p>
        </div>
    </footer>
    `;
  }
}

customElements.define('foot-bar', Footer);