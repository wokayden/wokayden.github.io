import type { ReactElement } from "react";
import {
   FaGithub,
   FaLinkedin,
} from "react-icons/fa";

export default function Footer(): ReactElement {
   return (
      <footer className='bottom-0 flex flex-row content-center justify-end bg-orange-400 fixed inset-x-0 bottom-0'>
         <nav className='flex flex-row content-center justify-between gap-3'>
            <a
               href='https://github.com/wokayden'
               target='_blank'
            >
               <FaGithub />
            </a>
            <a
               href='https://www.linkedin.com/in/kayden-wolf/'
               target='_blank'
            >
               <FaLinkedin />
            </a>
         </nav>
      </footer>
   );
}
