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
                Toyota Semarang mengahadirkan jejeran mobil terbaru 2019. Berikut harga / price list Toyota terbaru.
              </p>
              <p className="card-text">
                <a href="#" className="card-link">Harga</a>
                <a href="#" className="card-link">Promo Rush Semarang</a>
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
              <h5 className="card-title">Promo Avanza Toyota Semarang 2019</h5>
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
      </div>
    );
	}
}

export default Body;
