import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Profile from "./Profile";
import Login from "./Login";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/sign-up" component={Register} />
      <Route exact path="/profile" render={(user) => <Profile user={user} />} />
      <Route exact path="/log-in" component={Login} />
    </Switch>
  );
}
