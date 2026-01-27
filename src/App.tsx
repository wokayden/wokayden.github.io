import { type ReactElement } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Splash from "./sections/Splash";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App(): ReactElement {
   return (
      <>
         <Header />
         <Splash />
         <Experience />
         <Projects />
         <Contact />
         <Footer />
      </>
   );
}
