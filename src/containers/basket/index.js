import React from "react";
import { connect } from "react-redux";
import * as R from "ramda";
import { Link } from "react-router-dom";

import { getTotalBasketPrice, getBasketPhonesWithCount } from "selectors";
import { removePhoneFromBasket, cleanBasket, basketCheckout } from "actions";

const Basket = ({
  phones,
  totalPrice,
  removePhoneFromBasket,
  cleanBasket,
  basketCheckout,
}) => {
  const isBasketEmpty = R.isEmpty(phones);

  const renderSidebar = () => (
    <div>
      <Link to="/" className="btn btn-info">
        <span className="glyphicon gliphicon-info-sign"></span>
        <span>Continue shopping!</span>
      </Link>
      {R.not(isBasketEmpty) && (
        <div>
          <button className="btn btn-danger" onClick={cleanBasket}>
            <span className="glyphicon gliphicon-trash"></span>
            Clean cart
          </button>
          <button
            className="btn btn-success"
            onClick={() => basketCheckout(phones)}
          >
            <span className="glyphicon gliphicon-envelope"></span>
            Checkout
          </button>
        </div>
      )}
    </div>
  );

  const renderContent = () => (
    <div>
      {isBasketEmpty && <div>Your shopping cart is empty</div>}
      <div className="table-responsive">
        <table className="table-bordered table-striped table-condensed cf">
          <tbody>
            {phones.map((phone, index) => (
              <tr key={index} className="item-checout">
                <td className="first-column-checkout">
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="img-thumbnail"
                  />
                </td>
                <td>{phone.name}</td>
                <td>${phone.price}</td>
                <td>{phone.count}</td>
                <td>
                  <span
                    className="delete-cart"
                    onClick={() => removePhoneFromBasket(phone.id)}
                  ></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {R.not(isBasketEmpty) && (
        <div className="row">
          <div className="pull-right total-user-checkout">
            <b>Total:</b>${totalPrice}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">{renderContent()}</div>
          <div className="col-md-3 btn-user-checkout">{renderSidebar()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    phones: getBasketPhonesWithCount(state),
    totalPrice: getTotalBasketPrice(state),
  };
};

const mapDispatchToProps = {
  removePhoneFromBasket,
  cleanBasket,
  basketCheckout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
