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
import Components from "components/Components";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import SectionBasics from "components/Sections/SectionBasics.js";
import SectionNavbars from "components/Sections/SectionNavbars.js";
import SectionTabs from "components/Sections/SectionTabs.js";
import SectionPills from "components/Sections/SectionPills.js";
import SectionNotifications from "components/Sections/SectionNotifications.js";
import SectionTypography from "components/Sections/SectionTypography.js";
import SectionJavascript from "components/Sections/SectionJavascript.js";
import SectionCarousel from "components/Sections/SectionCarousel.js";
import SectionCompletedExamples from "components/Sections/SectionCompletedExamples.js";
import SectionLogin from "components/Sections/SectionLogin.js";
import SectionExamples from "components/Sections/SectionExamples.js";
import SectionDownload from "components/Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

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
              <h2>Join Us</h2>
              <h5>
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
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <WorkSection />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
            <ProductSection />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
            <TeamSection />
            {/* <SectionBasics /> */}
            {/* <SectionNavbars /> */}
            
            {/* <Components /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
