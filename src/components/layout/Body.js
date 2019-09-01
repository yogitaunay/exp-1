import React, { Component }from 'react';
import Slider from '../Slider';
import "../../styles/body.scss";

class Body extends Component {
	render(){
		return (
      <div>
        <Slider />
        <div className=" container-fluid p-0 mt-3">
          <div className="row no-gutters mx-0">
            <div className="col-sm mr-2">
              <img
                src="https://ik.imagekit.io/nasmoco/Rush/rush-toyota-semarang.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Harga Toyota Terbaru</h5>
                <p className="card-text">
                  Toyota Semarang mengahadirkan jejeran mobil terbaru 2019.
                  Berikut harga / price list Toyota terbaru.
                </p>
                <p className="card-text">
                  <a href="#" className="card-link">
                    Harga
                  </a>
                  <a href="#" className="card-link">
                    Promo Rush Semarang
                  </a>
                </p>
              </div>
            </div>
            <div className="col-sm mr-2 mt-0">
              <img
                src="https://ik.imagekit.io/nasmoco/Rush/rush-toyota-semarang.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Promo Avanza Toyota Semarang 2019
                </h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="col-sm mt-0">
              <img
                src="https://ik.imagekit.io/nasmoco/Rush/rush-toyota-semarang.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Yaris Toyota Semarang 2019</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mt-5 mb-4">Serah Terima</h2>
        <div className="card-deck">
          <div className="card">
            <img src="https://ik.imagekit.io/nasmoco/DEC/dec__23_.jpg" className="card-img-top" alt="..." />
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".modal-serahterima-1">Lihat Gambar</button>
            <div className="modal fade modal-serahterima-1" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Toyota Rush Semarang</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <img src="https://ik.imagekit.io/nasmoco/DEC/dec__23_.jpg" className="card-img-top" alt="..." />
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Serah Terima Toyota Rush</h5>
              <p className="card-text">Serah terima Toyota Rush Semarang</p>
            </div>
          </div>
          <div class="card">
            <img src="https://ik.imagekit.io/nasmoco/DEC/dec__8_.jpg" class="card-img-top" alt="..." />
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".modal-serahterima-2">Lihat Gambar</button>
            <div className="modal fade modal-serahterima-2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Toyota Avanza Semarang</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <img src="https://ik.imagekit.io/nasmoco/DEC/dec__8_.jpg" className="card-img-top" alt="..." />
                </div>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Serah Terima Toyota Avanza</h5>
              <p class="card-text">Serah terima Toyota Avanza Semarang</p>
            </div>
          </div>
          <div class="card">
            <img src="https://ik.imagekit.io/nasmoco/DEC/dec__4_.jpg" class="card-img-top" alt="..." />
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".modal-serahterima-3">Lihat Gambar</button>
            <div className="modal fade modal-serahterima-3" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Toyota Voxy Semarang</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <img src="https://ik.imagekit.io/nasmoco/DEC/dec__4_.jpg" className="card-img-top" alt="..." />
                </div>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Serah Terima Toyota Voxy</h5>
              <p class="card-text">Serah terima Toyota Voxy Semarang</p>
            </div>
          </div>
          <div class="card">
            <img src="https://ik.imagekit.io/nasmoco/DEC/dec__26_.jpg" class="card-img-top" alt="..." />
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".modal-serahterima-4">Lihat Gambar</button>
            <div className="modal fade modal-serahterima-4" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Toyota Innova Semarang</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <img src="https://ik.imagekit.io/nasmoco/DEC/dec__26_.jpg" className="card-img-top" alt="..." />
                </div>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Serah Terima Toyota Innova</h5>
              <p class="card-text">Serah terima Toyota Innova Semarang</p>
            </div>
          </div>
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
	}
}

export default Body;
