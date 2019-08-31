import React, { Component } from "react";
import '../../styles/index.scss'
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
                                class="btn btn-block btn-primary"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                <b>MPV</b>
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
                                class="btn collapsed btn-block btn-secondary"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                <b>SUV</b>
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseTwo"
                            class="collapse show"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionExample"
                          >
                            <div class="card-body">
                              <div class="row">
                                <div class="col">
                                  <img
                                    src="https://ik.imagekit.io/nasmoco/fortuner-toyota-semarang.png"
                                    width="250"
                                    height="150"
                                    class="d-inline-block align-top"
                                    alt=""
                                  />
                                  <h6 class="text-left">Fortuner</h6>
                                </div>
                                <div class="col">
                                  <img
                                    src="https://ik.imagekit.io/nasmoco/rush-toyota-semarang.png"
                                    width="250"
                                    height="150"
                                    class="d-inline-block align-top"
                                    alt=""
                                  />
                                  <h6 class="text-left">All New Rush</h6>
                                </div>
                                <div class="col">
                                  <img
                                    src="https://ik.imagekit.io/nasmoco/all-new-chr-toyota-semarang.png"
                                    width="250"
                                    height="150"
                                    class="d-inline-block align-top"
                                    alt=""
                                  />
                                  <h6 class="text-left">All New CH-R</h6>
                                </div>
                                <div class="col">
                                  <img
                                    src="https://ik.imagekit.io/nasmoco/land-cruiser-toyota-semarang.png"
                                    width="250"
                                    height="150"
                                    class="d-inline-block align-top"
                                    alt=""
                                  />
                                  <h6 class="text-left">Land Cruiser</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                              <button
                                type="button"
                                class="btn btn-warning btn-block"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <b>HATCHBACK</b>
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
                              <div class="row">
                                <div class="col">
                                  <img
                                    src="https://ik.imagekit.io/nasmoco/agya/toyota-semarang-agya.png"
                                    width="250"
                                    height="150"
                                    class="d-inline-block align-top"
                                    alt=""
                                  />
                                  <h6 class="text-left">New Agya</h6>
                                </div>
                                <div class="col">
                                  <img
                                    src="https://ik.imagekit.io/nasmoco/Yaris/toyota-semarang-yaris.png"
                                    width="250"
                                    height="150"
                                    class="d-inline-block align-top"
                                    alt=""
                                  />
                                  <h6 class="text-left">New Yaris</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" id="headingFour">
                            <h2 class="mb-0">
                              <button
                                type="button"
                                class="btn btn-danger btn-block"
                                data-toggle="collapse"
                                data-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                <b>SEDAN</b>
                              </button>
                            </h2>
                          </div>

                          <div
                            id="collapseFour"
                            class="collapse"
                            aria-labelledby="headingFour"
                            data-parent="#accordionExample"
                          >
                            <div class="card-body">
                              <div class="row">
                                <div class="col">
                                  <img
                                    src="https://ik.imagekit.io/nasmoco/Camry/camry-toyota-semarang.png"
                                    width="250"
                                    height="150"
                                    class="d-inline-block align-top"
                                    alt=""
                                  />
                                  <h6 class="text-left">New Camry</h6>
                                </div>
                                <div class="col">
                                  <img
                                    src="https://ik.imagekit.io/nasmoco/Altis/altis-toyota-semarang.png"
                                    width="250"
                                    height="150"
                                    class="d-inline-block align-top"
                                    alt=""
                                  />
                                  <h6 class="text-left">New Corolla Altis</h6>
                                </div>
                                <div class="col">
                                  <img
                                    src="https://ik.imagekit.io/nasmoco/Vios/vios-toyota-semarang.png"
                                    width="250"
                                    height="150"
                                    class="d-inline-block align-top"
                                    alt=""
                                  />
                                  <h6 class="text-left">New Vios</h6>
                                </div>
                              </div>
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
