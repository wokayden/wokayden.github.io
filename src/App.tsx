import { type ReactElement } from "react";
import "./index.css";
import { Header, Footer } from "./components/index.ts";
import { Splash, Experience, Projects, Contact } from "./sections/index.ts";

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
