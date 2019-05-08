import React from "react";
import { Icon } from "semantic-ui-react";
import { handleItemClick } from "../../utils";

const MenuItems = () => {
  return (
    <React.Fragment>
     <div
        className="item logo"
        role="presentation"
        onClick={() => handleItemClick("home")}
      >
        <Icon name="home" />
        ONE SYOKIMAU
      </div>
      <div
        className="item"
        role="presentation"
        onClick={() => handleItemClick("feature")}
      >
        Features
      </div>
      <div
        className="item"
        role="presentation"
        onClick={() => handleItemClick("gallery")}
      >
        Gallery
      </div>
      <div
        className="item"
        role="presentation"
        onClick={() => handleItemClick("location")}
      >
        Location
      </div>
      <div
        className="item"
        role="presentation"
        onClick={() => handleItemClick("contacts")}
      >
        Contacts
      </div>
      <div className="right menu" />
    </React.Fragment>
  );
};

export default MenuItems;
