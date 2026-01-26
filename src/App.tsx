import {type ReactElement} from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App(): ReactElement {
  return (
    <>
      <Header />
      
      <main className="p-12 h-80 bg-blue-200">
        <h1>UNDER CONSTRUCTION</h1>
      </main>
      <section className="p-12 h-80 bg-lime-200">
        another section
      </section>
      <Footer />
    </>
  )
}