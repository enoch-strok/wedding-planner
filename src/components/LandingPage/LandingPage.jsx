import React, {useEffect, useState} from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core componentsimport Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";

import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import Registry from "./Sections/Registry.jsx";
import Pictures from "./Sections/Pictures.jsx";
import RSVP from "./Sections/RSVP.jsx";
import Intro from "./Sections/Intro.jsx";


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
      
    
      <Parallax image={require("assets/img/rings_2b.jpg").default}>
      {/* <Parallax filter image={require("assets/img/wedding_ring_hands.jpg").default}> */}
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
            <Intro />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
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
            {/* <Pictures /> */}
            {/* <SectionBasics /> */}
            {/* <SectionNavbars /> */}
            
            {/* <Components /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
