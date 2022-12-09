import React from "react";
import ListItem from "./ListItem.jsx";
import PropTypes from "prop-types";

function Listing({ items }) {
  return (
    <div className="item-list">
      {items.map((item) => (
        <ListItem key={item.listing_id} item={item} />
      ))}
    </div>
  );
}

Listing.defaultProps = {
  items: [],
};

Listing.propTypes = {
  items: PropTypes.array,
};
export default Listing;