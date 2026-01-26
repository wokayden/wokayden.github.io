import type {ReactElement} from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer(): ReactElement {
    return (
        <footer className="bottom-0 flex flex-row content-center justify-between bg-orange-900">
            <FaGithub />
            <FaLinkedin />
        </footer>
    )
}