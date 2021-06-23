import React, {useEffect, useState} from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core componentsimport Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import Registry from "./Sections/Registry.jsx";
import Pictures from "./Sections/Pictures.jsx";
import RSVP from "./Sections/RSVP.jsx";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);


export default function LandingPage(props) {


  const classes = useStyles();
  const { ...rest } = props;
  const [inputList, setInputList] = useState([
    {
      guestName: "no-name-yet",
      guestPhone: "no-phone-yet",
      numberOfGuests: 0
    }
  ]);

  
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
          <RSVP inputList={inputList} setInputList={setInputList}/>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
            <Registry />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
            <Pictures />
            {/* <SectionBasics /> */}
            {/* <SectionNavbars /> */}
            
            {/* <Components /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}