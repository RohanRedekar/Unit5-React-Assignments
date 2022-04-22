import "./App.css";
import { Button } from "./components/button";

function App() {
  return (
    <div className='App'>
      <Button background={"dodgerblue"} color={"white"} border={"solid"}>
        Primary Button
      </Button>
      <Button background={"white"} color={"black"} border={"solid"}>
        Default Button
      </Button>
      <Button background={"white"} color={"black"} border={"dashed"}>
        Dashed Button
      </Button>
      <Button background={"white"} color={"black"} border={"none"}>
        Text Button
      </Button>
      <Button background={"white"} color={"dodgerblue"} border={"none"}>
        Link Button
      </Button>
    </div>
  );
}

export default App;
