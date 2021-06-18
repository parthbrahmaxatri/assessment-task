import React from "react";
import "./Feed.css";
import Nav1 from "../../components/navbar1/Nav1";
import Upcoming from "../../pages/Upcoming";
import Archived from "../../pages/Archived";
import ATF from "../../pages/ATF";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function Feed() {
    return (
        <Router>
            <div className="Feed">
                <Nav1 />
                <Switch>
                    <Route exact path="/">
                        <Upcoming />
                    </Route>
                    <Route path="/Archived">
                        <Archived />
                    </Route>
                    <Route path="/ATF">
                        <ATF />
                    </Route>                    
                </Switch>
            </div>
        </Router>
    )
}

export default Feed;