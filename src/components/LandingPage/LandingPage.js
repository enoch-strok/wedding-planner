import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>

      <Parallax filter image={require("assets/img/engagement-example.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={20} md={20}>
              <h1 className={classes.title}>Join Us</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>


              <br />
              <Button
                color="primary"
                size="lg"
                href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/550315894"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Our Registry
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <WorkSection />
          <ProductSection />
          {/* <TeamSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
