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
    <style>
      .footer{
        margin-top: auto;
        background-color: orange;
        height: 220px;
      }
      .py-5{
        padding: 35px;
      }
    </style>
      <link rel="stylesheet" href="./bootstrap/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="./font-awesome/css/font-awesome.min.css">

      <div class="container-fluid footer">
        <footer class="py-5">
          
          <div class="d-flex flex-column flex-sm-row justify-content-between pt-5 mt-4 border-top">
              <p>&copy; 2022 Freelance, Dicoding Indonesia</p>
              <ul class="list-unstyled d-flex">
                <li><i class="fa fa-instagram fa-lg" style="margin: 10px;"></i></li>
                <li><i class="fa fa-twitter fa-lg" style="margin: 10px;"></i></li>
                <li><i class="fa fa-facebook fa-lg" style="margin: 10px;"></i></li>
              </ul>
          </div>
        </footer>
      </div>
    `;
  }
}

customElements.define('foot-bar', Footer);