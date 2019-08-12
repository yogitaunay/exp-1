import React, { Component } from 'react';
import "../../styles/header.scss";

class Header extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img
              src="https://ik.imagekit.io/nasmoco/logo-nasmoco_ylAwpb2HE.png"
              width="50"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            {" Toyota Semarang"}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                >
                  Product
                </a>

                <div
                  class="modal fade bd-example-modal-lg"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      {/* --------------Start Accordion--------------- */}
                      <div class="accordion" id="accordionExample">
                        <div class="card">
                          <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                              <button
                                class="btn"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Product MPV
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseOne"
                            class="collapse"
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                          >
                            <div class="card-body">
                              <div class="row">
                                <div class="col">
                                  <img
                                    src="https://ik.imagekit.io/nasmoco/allnewavanza_q8uFzFblP.png"
                                    width="250"
                                    height="150"
                                    class="d-inline-block align-top"
                                    alt=""
                                  />
                                  <h6 class="text-left">All New Avanza</h6>
                                </div>
                                <div class="col">
                                  <img
                                    src="https://ik.imagekit.io/nasmoco/newventurer_c_U3a5a6Y.png"
                                    width="250"
                                    height="150"
                                    class="d-inline-block align-top"
                                    alt=""
                                  />
                                  <h6 class="text-left">New Venturer</h6>
                                </div>
                                <div class="col">
                                  <img
                                    src="https://ik.imagekit.io/nasmoco/veloz_wOlLZpVMi.png"
                                    width="250"
                                    height="150"
                                    class="d-inline-block align-top"
                                    alt=""
                                  />
                                  <h6 class="text-left">Avanza Veloz</h6>
                                </div>
                                <div class="col">
                                  <img
                                    src="https://ik.imagekit.io/nasmoco/Alphard_eJDblFot8.png"
                                    width="250"
                                    height="150"
                                    class="d-inline-block align-top"
                                    alt=""
                                  />
                                  <h6 class="text-left">Alphard</h6>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <img
                                    src="https://ik.imagekit.io/nasmoco/Kijang_Innova_asxPAP3jt.png"
                                    width="250"
                                    height="150"
                                    class="d-inline-block align-top"
                                    alt=""
                                  />
                                  <h6 class="text-left">Kijang Innova</h6>
                                </div>
                                <div class="col">
                                  <img
                                    src="https://ik.imagekit.io/nasmoco/20190409144854sienta_Mc-xDE3Up.png"
                                    width="250"
                                    height="150"
                                    class="d-inline-block align-top"
                                    alt=""
                                  />
                                  <h6 class="text-left">New Sienta</h6>
                                </div>
                                <div class="col">
                                  <img
                                    src="https://ik.imagekit.io/nasmoco/20190409144108calya_UqwY6wl7s.png"
                                    width="250"
                                    height="150"
                                    class="d-inline-block align-top"
                                    alt=""
                                  />
                                  <h6 class="text-left">All New Calya</h6>
                                </div>
                                <div class="col">
                                  <img
                                    src="https://ik.imagekit.io/nasmoco/toyota-semarang-vellfire.png"
                                    width="250"
                                    height="150"
                                    class="d-inline-block align-top"
                                    alt=""
                                  />
                                  <h6 class="text-left">New Vellfire</h6>
                                </div>
                                <div class="col">
                                  <img
                                    src="https://ik.imagekit.io/nasmoco/2019voxy.png"
                                    width="250"
                                    height="150"
                                    class="d-inline-block align-top"
                                    alt=""
                                  />
                                  <h6 class="text-left">All New Voxy</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                              <button
                                class="btn collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                Product SUV
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseTwo"
                            class="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionExample"
                          >
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Collapsible Group Item #3
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseThree"
                            class="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordionExample"
                          >
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* --------------End Accordion--------------- */}
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Price List
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Promo
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
