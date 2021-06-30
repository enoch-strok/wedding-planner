import React from 'react';
import LandingPage from "../components/LandingPage/LandingPage";
import Admin from "../components/LandingPage/Admin";
import RSVP from "../components/LandingPage/Sections/RSVP";
import { Route, Switch, BrowserRouter  } from "react-router-dom";

const Dashboard = props => {

    return (
        <> 
            {/* <LandingPage/> */}
            <BrowserRouter >
                <div>
                    <hr />

                    {/*
                    A <Switch> looks through all its children <Route>
                    elements and renders the first one whose path
                    matches the current URL. Use a <Switch> any time
                    you have multiple routes, but you want only one
                    of them to render at a time
                    */}
                    <Switch>
                        <Route exact path="/">
                            <LandingPage />
                        </Route>
                        <Route path="/rsvp">
                            <RSVP />
                        </Route>
                        <Route path="/admin">
                            <Admin />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter >
        </>
    )
}

export default Dashboard;

