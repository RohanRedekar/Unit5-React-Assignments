import "./App.css";
import { LoginStatus } from "./components/loginStatus";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <LoginStatus />
    </div>
  );
}

export default App;
