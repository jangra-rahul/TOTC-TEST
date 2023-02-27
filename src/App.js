import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import OurSuccess from "./components/Our Success";
import Software from "./components/Software";
import Totc from "./components/Totc";
import Classroom from "./components/Classroom";
import Features from "./components/Features";
import Teachers from "./components/Teachers";
import Assessments from "./components/Assessments";
import Lastest from "./components/Lastest";
import Footer from "./components/Footer";
import They from "./components/They";

function App() {
  return (
    <>
      <Header />
      <OurSuccess />
      <Software />
      <Totc />
      <Classroom />
      <Features />
      <Teachers />
      <Assessments />
      <They />
      <Lastest />
      <Footer />
    </>
  );
}

export default App;
