import type {ReactElement} from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer(): ReactElement {
    return (
        <footer className="bottom-0 flex flex-row content-center justify-end bg-orange-400">
            <nav className="flex flex-row content-center justify-between gap-3">
                <FaGithub />
                <FaLinkedin />
            </nav>
        </footer>
    )
}