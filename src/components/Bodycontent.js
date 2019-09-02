import React, { Component }from 'react';
import "../styles/body.scss";

const hStyle = {
  textAlign: 'center'
};

class Bodycontent extends Component {
  render() {
    return(
      <>
      <hr></hr>      
      <div className="row">
        <div className="col-sm-10">
        <h3>Selamat Datang di Toyota Nasmoco Semarang</h3>
        <h1 style={ hStyle } className="mt-5"><span>PROMO TOYOTA SEMARANG</span></h1>
        <p>
          <h3 style={ hStyle } className="mt-5">{this.props.promoMonth} {this.props.promoWord}</h3>
        </p>
        <p>

        </p>
        </div>
        <div className="col-sm-2">
          <img src="https://ik.imagekit.io/nasmoco/profilepic.jpg" class="card-img-top mt-3"></img>
        </div>
      </div>
      </>
    );
  }
}

export default Bodycontent;