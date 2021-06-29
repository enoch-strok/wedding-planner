import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";







const useStyles = makeStyles(styles);

export default function Intro() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
       {/* <h2 className={classes.title}>Our Registry</h2> */}
      
       <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={20} md={20}>
              <h2 style={{color: "black"}}>Join Us</h2>
              <h5  className={classes.description}>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h5>



              <br />
              {/* <Button
                color="primary"
                size="lg"
                href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/550315894"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Our Registry
              </Button> */}
            </GridItem>
          </GridContainer>
        </div>
    </div>
  );
}
