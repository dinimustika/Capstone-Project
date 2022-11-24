class Navbar extends HTMLElement {
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
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark shadow-lg fixed-top">
        <div class="container">
            <a class="navbar-brand" href="index.html">FreelanceZone.</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-right" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="index.html">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="service.html">Service</a>
                    </li>

                    <nav class="navbar bg-dark">
                        <div class="container-fluid">
                        </div>
                    </nav>

                </ul>
            </div>
        </div>
    </nav>

    `;
  }
}

customElements.define('app-bar', Navbar);