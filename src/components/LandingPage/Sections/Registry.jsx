import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import bbb from "assets/img/Bed-Bath-and-Beyond-logo.jpg";
import linkImage from "assets/img/Link.jpg";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";





const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="space-evenly">
        <GridItem justify="space-evenly" cs={4} sm={4} md={4}>
          <h5  className={classes.description}> The only gift we ask from you is to celebrate with us on this special day. However, for your convenience, we have registered with Bed Bath & Beyond for the items we found most useful in preperation for our new life together!</h5>
        </GridItem>
        <GridItem justify="space-evenly" className="shadow p-3 bg-white rounded" cs={7} sm={7} md={7}>
          {/* <GridItem width='5' cs={1} sm={1} md={1}>
            <img src={linkImage}/>
          </GridItem> */}
          {/* <GridItem cs={7} sm={7} md={7}> */}
            <a href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/550315894?eventType=Wedding"><img src={bbb} width="75%" className=""/></a>
          {/* </GridItem> */}
        </GridItem>
      </GridContainer>
    </div>
  );
}
