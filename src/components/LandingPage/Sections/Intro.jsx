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
              {/* <h2 style={{color: "black"}}>Join Us</h2>
              <h5  className={classes.description}>
                We would love to have you join us for our celebration of two becoming one!
              </h5>
              {<br></br>} */}
              <h2 style={{color: "black"}}>
              Ecclesiastes 4:9-12
              </h2>
              <br></br>
              <h5 className={classes.description}>
              Two are better than one,
              because they have a good return for their labor:
              {<br></br>}{<br></br>}
              If either of them falls down,
              one can help the other up.
              But pity anyone who falls
              and has no one to help them up.
              {<br></br>}{<br></br>}
              Also, if two lie down together, they will keep warm.
              But how can one keep warm alone?
              {<br></br>}{<br></br>}
              Though one may be overpowered,
              two can defend themselves.
              A cord of three strands is not quickly broken.
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
