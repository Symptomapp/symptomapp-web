import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Profile from "./Profile";
import Login from "./Login";
import Body from "./anatomy/Body";
import innerOrgans from "../data/inner_body.json";
import outterOrgans from "../data/outter_body.json";
import face from "../data/face.json";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/sign-up" component={Register} />
      <Route exact path="/profile" render={(user) => <Profile user={user} />} />
      <Route exact path="/log-in" component={Login} />
      <Route
        exact
        path="/body-map/face"
        render={() => <Body organs={face} />}
      />
      <Route
        exact
        path="/body-map/internal"
        render={() => <Body organs={innerOrgans} />}
      />
      <Route
        exact
        path="/body-map/external"
        render={() => <Body organs={outterOrgans} />}
      />
    </Switch>
  );
}
