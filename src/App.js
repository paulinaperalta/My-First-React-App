import Header from "./components/Header";
import Img from "./components/Img";
import AboutMe from "./components/AboutMe";
import Button from "./components/Button";
import Footer from "./components/Footer";
import "./styles.css";

document.body.style.backgroundColor = "#fffffa";

export default function App() {
  return (
    <div className="App">
      <Header title="Hola Technolatinas!" />
      <Img />
      <AboutMe message="Hola, mi nombre es Paulina Peralta y estas son mis redes:" />
      <div className="ButtonContainer">
        <Button title="GitHub" link="https://github.com/paulinaperalta" />
        <Button
          title="Behance"
          link="https://www.behance.net/paulinagallegos"
        />
        <Button
          title="Linkedin"
          link="https://www.linkedin.com/in/paulinagallegos/"
        />
        <Button title="Twitter" link="https://twitter.com/unhelado" />
      </div>
      <Footer message="Hecho con amor por Paulina Peralta 🖤 #LatinasCodeCamp" />
    </div>
  );
}
