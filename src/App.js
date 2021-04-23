import "./App.css";
import Body from "./components/anatomy/Body";
import innerOrgans from "./data/inner_body.json";
import outterOrgans from "./data/outter_body.json";
import face from "./data/face.json";

function App() {
  return (
    <div className="App">
      <Body organs={innerOrgans} />
      {/* <Body organs={outterOrgans} /> */}
    </div>
  );
}

export default App;
