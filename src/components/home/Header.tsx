'use client';

import BaseProps from '@/types/BaseProps';

import cslx from 'clsx';

import { FiHome, FiImage } from 'react-icons/fi';
import { LuUser2 } from 'react-icons/lu';
import { FaRegFileAlt, FaTimes } from 'react-icons/fa';
import { MdOutlineMessage } from 'react-icons/md';
import { useEffect, useState } from 'react';
import useWindowEvent from '@/hooks/useWindowEvent';

type HeaderProps = BaseProps;

const getShouldPopUp = () => {
  if (window == null) return false;

  const THRESHOLD = 50;
  return window.scrollY >= THRESHOLD;
};

const Header = ({ className, id }: HeaderProps) => {
  const [popUp, setPopUp] = useState<boolean>(false);

  const handleScroll = () => {
    setPopUp(getShouldPopUp());
  };

  useEffect(handleScroll, []);
  useWindowEvent('scroll', handleScroll);

  return (
    <header
      id={id}
      className={cslx(
        'flex justify-between items-center sticky top-0 inset-x-0 px-12 py-5 z-10 gap-6',
        'transition-all duration-300 ease-in-out',
        popUp && 'backdrop-blur-md bg-white/80 shadow',
        className,
      )}
    >
      <a href="#" className='font-bold text-lg'>
        Mario Benedict
      </a>

      <nav className='hidden md:flex justify-end font-semibold text-lg gap-8'>
        <a href='#home'>
          <div className='flex gap-2 justify-center items-center'>
            <FiHome />
            <span>Home</span>
          </div>
        </a>

        <a href='#about'>
          <div className="flex gap-2 justify-center items-center">
            <LuUser2 />
            <span>About</span>
          </div>
        </a>

        <a href='#skills'>
          <div className="flex gap-2 justify-center items-center">
            <FaRegFileAlt />
            <span>Skills</span>
          </div>
        </a>

        <a href='#portfolio'>
          <div className="flex gap-2 justify-center items-center">
            <FiImage />
            <span>Portfolio</span>
          </div>
        </a>

        <a href='#contact'>
          <div className="flex gap-2 justify-center items-center">
            <MdOutlineMessage />
            <span>Contact</span>
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Header;
