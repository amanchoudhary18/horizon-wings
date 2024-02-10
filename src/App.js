import "./App.css";
import Achievements from "./components/Achievements";
import Countries from "./components/Countries";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Countries />
      <Achievements />
      <div
        style={{
          background: "#2D5883",
          marginTop: "-100px",
          minHeight: "80px",
        }}
      ></div>
      <RegistrationForm />
    </div>
  );
}

export default App;
