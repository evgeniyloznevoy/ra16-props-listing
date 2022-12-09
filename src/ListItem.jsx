import React from "react";
import propTypes from "prop-types";

function ListItem({ item }) {
  const { url, MainImage, title, currency_code, price, quantity, state } = item;
  if (state !== "active") {
    // если товар отсутствует или данные о нем изменены
    return null;
  }
  const name = title.length > 50 ? `${title.slice(0, 50)}...` : title;
  let priceItem;
  if (currency_code === "USD") {
    priceItem = `$${price}`;
  } else if (currency_code === "EUR") {
    priceItem = `€${price}`;
  } else {
    priceItem = `${currency_code} ${price}`;
  }

  let classColor;
  if (quantity <= 10) {
    classColor = "level-low";
  } else if (quantity <= 20) {
    classColor = "level-medium";
  } else if (quantity > 20) {
    classColor = "level-high";
  }
  return (
    <>
      <div className="item">
        <div className="item-image">
          <a href={url}>
            <img src={MainImage.url_570xN} alt={title} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{name}</p>
          <p className="item-price">{priceItem} </p>
          <p className={`item-quantity ${classColor}`}>{quantity} left</p>
        </div>
      </div>
    </>
  );
}

ListItem.propTypes = {
  item: propTypes.shape({
    url: propTypes.string,
    MainImage: propTypes.object,
    title: propTypes.string,
    currency_code: propTypes.string,
    price: propTypes.string,
    quantity: propTypes.number,
    listing_id: propTypes.number,
  }),
};

export default ListItem;