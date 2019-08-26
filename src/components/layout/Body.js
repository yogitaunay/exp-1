import React, { Component }from 'react';
import Slider from '../Slider';
import '../../styles/index.scss';

class Body extends Component {
	render(){
		return (
      <div>
        <Slider />
        <div class="card-deck mt-3">
          <div class="card">
            <img
              src="https://ik.imagekit.io/nasmoco/Rush/rush-toyota-semarang.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Rush Toyota Semarang 2019</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <a href="#" class="card-link">Harga</a>
                <a href="#" class="card-link">Promo Rush Semarang</a>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://ik.imagekit.io/nasmoco/Rush/rush-toyota-semarang.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Promo Avanza Toyota Semarang 2019</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://ik.imagekit.io/nasmoco/Rush/rush-toyota-semarang.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Yaris Toyota Semarang 2019</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer
                content than the first to show that equal height action.
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
