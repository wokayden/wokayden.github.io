import type { ReactElement } from "react";
import { BiMenu } from "react-icons/bi";
import { RiHomeSmileFill } from "react-icons/ri";

export default function Header(): ReactElement {
   return (
      <header className='sticky bg-orange-200 top-0 flex flex-row content-center justify-between'>
         <nav className='flex flex-row content-center justify-between w-xs'>
            <BiMenu className='self-center' />
            <RiHomeSmileFill className='self-center' />
            <a>about</a>
            <a>experience</a>
            <a>projects</a>
            <a>contact</a>
         </nav>
      </header>
   );
}
