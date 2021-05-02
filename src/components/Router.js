import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Profile from "./Profile";
import Edit from "./Edit";
import Login from "./Login";
import Results from "./Results";
import Search from "./Search";
import Links from "./Links";
import Body from "./anatomy/Body";
import innerOrgans from "../data/inner_body.json";
import outterOrgans from "../data/outter_body.json";
import face from "../data/face.json";

export default function Router({user}) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign-up" component={Register} />
      <Route exact path="/profile/edit" render={(user) => <Edit user={user} />} />
      <Route exact path="/profile" render={(user) => <Profile user={user} />} />
      <Route exact path="/log-in" component={Login} />
      <Route exact path="/results" component={Results} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/links" component={Links} />
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
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

