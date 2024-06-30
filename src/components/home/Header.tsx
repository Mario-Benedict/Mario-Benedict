import BaseProps from '@/types/BaseProps';

import cslx from 'clsx';

import { FiHome, FiImage } from 'react-icons/fi';
import { LuUser2 } from 'react-icons/lu';
import { FaRegFileAlt, FaTimes } from 'react-icons/fa';
import { MdOutlineMessage } from 'react-icons/md';
import { AiOutlineAppstore } from 'react-icons/ai';

type HeaderProps = BaseProps;

const Header = ({ className, id }: HeaderProps) => {
  return (
    <header
      id={id}
      className={cslx(
        'flex justify-between items-center sticky top-0 inset-x-0 px-12 py-5 z-10 gap-6',
        'transition-all duration-300 ease-in-out',
        className,
      )}
    >
      <a href="#" className="font-bold text-lg">
        Mario Benedict
      </a>

      <nav className="hidden md:flex justify-end font-semibold text-lg gap-8">
        <a href="#home" className="nav__link">
          <div className="flex gap-2 justify-center items-center">
            <FiHome /> Home
          </div>
        </a>

        <a href="#about" className="nav__link">
          <div className="flex gap-2 justify-center items-center">
            <LuUser2 /> About
          </div>
        </a>

        <a href="#skills" className="nav__link">
          <div className="flex gap-2 justify-center items-center">
            <FaRegFileAlt /> Skills
          </div>
        </a>

        <a href="#portfolio" className="nav__link">
          <div className="flex gap-2 justify-center items-center">
            <FiImage /> Portfolio
          </div>
        </a>

        <a href="#contact" className="nav__link">
          <div className="flex gap-2 justify-center items-center">
            <MdOutlineMessage /> Contact
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Header;
