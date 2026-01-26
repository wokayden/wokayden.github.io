import {type ReactElement} from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App(): ReactElement {
  return (
    <>
      <Header />
      <div className="h-screen">
        <h1>UNDER CONSTRUCTION</h1>
      </div>
      <Footer />
    </>
  )
}