import portrait from '@/public/images/portrait.png';

import BaseProps from '@/types/BaseProps';
import PageSection from '../shared/PageSection';
import Image from 'next/image';

import golang from '@/public/images/icons/golang.svg';
import typescript from '@/public/images/icons/typescript.svg';
import cProgramming from '@/public/images/icons/c.svg';
import python from '@/public/images/icons/python.svg';
import rust from '@/public/images/icons/rust.svg';
import solidity from '@/public/images/icons/solidity.svg';

export type IntroductionProps = BaseProps;

const Introduction = (props: IntroductionProps) => {
  const programmingLanguages = [
    { name: 'Golang', icon: golang },
    { name: 'TypeScript', icon: typescript },
    { name: 'C', icon: cProgramming },
    { name: 'Python', icon: python },
    { name: 'Rust', icon: rust },
    { name: 'Solidity', icon: solidity },
  ];

  return (
    <PageSection {...props}>
      <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
        <div className='flex-1 text-center md:text-start'>
          <h1 className='font-poppins font-bold text-4xl md:text-5xl leading-tight'>
            Hi, I&apos;m Mario Benedict
          </h1>

          <h4 className='mt-4 text-lg md:text-xl text-darkgrey font-bold'>Cyber Security Enthusiast | Software Engineer</h4>

          <p className='mt-4 text-base md:text-lg text-lightgrey'>
            I&apos;m a software engineer with experience in building web applications and APIs based in
            Jakarta, Indonesia. I&apos;m passionate about learning new technologies and building software
            that solves real-world problems.
          </p>
        </div>

        <Image
          priority
          className='w-56 md:w-72 border-3 border-black animate-morph-infinite select-none'
          src={portrait}
          alt='Portrait of Mario Benedict'
        />
      </div>

      <div className='flex items-center justify-center md:justify-start mt-16 text-lg'>
        <p className="hidden md:block text-darkgrey">Programming Languages</p>
        <span className="hidden md:block text-lightgrey ml-6">|</span>

        <div className="flex flex-wrap justify-center items-center mx-6 select-none gap-6">
          {programmingLanguages.map((language, index) => (
             <Image
              key={index}
              src={language.icon}
              alt={language.name}
              title={language.name}
              className="rounded w-8"
            />
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default Introduction;
