import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';
import Popup from 'react-popup';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from 'react-bootstrap';
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

const RSVP = (props) => {

  const {inputList, setInputList} = props;
  useEffect(() => {
    console.log(inputList)
  }, [inputList])

  const [alerts, setAlerts] = useState(0);

  const [trigger, setTrigger] = useState(0);
  const triggerCount = () => setTrigger(currCount => currCount + 1);
  useEffect(() => {
    console.log('addNewProjectField Triggered ',trigger)
  }, [trigger])
  
  const submitForm = (event) => {
    event.preventDefault();
    console.log("form submitted!");
    
    let guestName = event.target[0].value;
    let guestPhone = event.target[1].value;
    let numberOfGuests = +event.target[2].value;
    
    triggerCount();

    axios.post('https://wedding-planner-server.herokuapp.com/guest/add', {
      guestName,
      guestPhone,
      numberOfGuests
        })
        .then(res => {
            console.log("Server Response: ",res);
            triggerCount();
            setAlerts(res.status);
        })
        .catch(err => console.log("Server Error Message: ",err));
    
      document.getElementById("rsvp_form").reset();

  }
  useEffect(() => {
    console.log('alerts2:',alerts)
  }, [alerts])

  const classes = useStyles();
  return (
    <div className={classes.section}>
      
      {alerts === 0 &&
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2>RSVP - Reserve Your Spot</h2>
          <br></br>
          <br></br>
          <h5 className={classes.description}>
            Please let us know if you are planning to make it. We understand that life happens but it helps us to let others who also want to make it take your free spot if you are not able to.
          </h5>
          <br></br>
          <form id="rsvp_form" onSubmit={submitForm}>
            
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Your Name"
                  type="text"
                  id="name"
                  name="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Your Phone Number"
                  id="phone_number"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Number of Guests"
                  id="phone_number"
                  type="number"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <Button color="success"
                  type="submit"
                  >I Will Be There</Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Button color="danger">I Cannot Make It</Button>
                </GridItem>
              </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
      }
      {alerts === 200 &&
              <GridContainer justify="center">
                <Alert  variant="success">
                  <Alert.Heading>
                    Thank you for letting us know!
                  </Alert.Heading>
                  <p>Your response has been saved.</p>
                  <input autoFocus type="hidden" />
                </Alert>
              </GridContainer>
      }
      {alerts != 200 && alerts != 0 &&
                <GridContainer>
                  <Alert autoFocus variant="danger">
                    <Alert.Heading>
                      There was an error!
                    </Alert.Heading>
                    <p>Please let Enoch know. 206-356-0204</p>
                  </Alert>
                </GridContainer>
      }

    </div>
  );
}

export default RSVP;
