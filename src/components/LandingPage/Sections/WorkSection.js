import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2>RSVP - Reserve Your Spot</h2>
          <br></br>
          <br></br>
          <h5 className={classes.description}>
            Please let us know if you are planning to make it. We understand that life happens but it helps us to let others who also want to make it take your free spot if you are not able to.
          </h5>
          <br></br>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Phone Number"
                  id="phone_number"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              {/* <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              /> */}

              
            </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <Button color="success">I Will Be There</Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Button color="danger">I Cannot Make It</Button>
                </GridItem>
              </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
