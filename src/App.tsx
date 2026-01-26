import {type ReactElement} from 'react';
import './App.css';
import Menu from './components/Menu';

export default function App(): ReactElement {
  return (
    <div className="bg-white">
      <Menu />
      <div>
      </div>
    </div>
  )
}