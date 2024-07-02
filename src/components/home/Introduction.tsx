import portrait from '@/public/images/portrait.png';

import BaseProps from '@/types/BaseProps';
import PageSection from '../shared/PageSection';
import Image from 'next/image';

export type IntroductionProps = BaseProps;

const Introduction = (props: IntroductionProps) => {
  return (
    <PageSection {...props}>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <div className="flex-1 text-center md:text-start">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight">
            Hi, I'm Mario Benedict
          </h1>

          <h4 className="mt-4 text-lg md:text-xl text-darkgrey font-bold">Software Engineer</h4>

          <p className="mt-4 text-base md:text-lg text-lightgrey">
            {/* make me the introduction text based on readme file */}
            I'm a software engineer with experience in building web applications and APIs based in
            Jakarta, Indonesia. I'm passionate about learning new technologies and building software
            that solves real-world problems.
          </p>
        </div>

        <Image
          priority
          className="w-56 md:w-72 border-3 border-black animate-morph-infinite select-none"
          src={portrait}
          alt="Portrait of Mario Benedict"
        />
      </div>
    </PageSection>
  );
};

export default Introduction;
