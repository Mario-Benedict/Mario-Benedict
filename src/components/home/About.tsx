'use client';

import useWindowEvent from '@/hooks/useWindowEvent';
import BaseProps from '@/types/BaseProps';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import PageSection from '../shared/PageSection';

export type AboutProps = BaseProps;

const About = ({ id, className }: AboutProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState<number>(0);

  const handleScroll = () => {
    if (ref.current == null) return;

    const offsetTop = ref.current.getBoundingClientRect().top;
    const max = window.innerHeight + ref.current.scrollHeight;

    setTranslateX((Math.min(Math.max(offsetTop, 0), max) / max) * 100);
  };

  useEffect(handleScroll, []);
  useWindowEvent('scroll', handleScroll);

  return (
    <section id={id} ref={ref} className={clsx('relative overflow-hidden py-16 bg-gray-50', className)}>
      <h2
        className="absolute left-[-20%] top-1/2 uppercase text-[48px] sm:text-[64px] md:text-[128px] font-extrabold text-gray-200/80 select-none transition-transform duration-700 ease-out"
        style={{ transform: `translate(${translateX}%, -50%)` }}
      >
        About Me
      </h2>

      <PageSection className="relative text-lg sm:text-xl md:text-2xl z-10 space-y-6">
        <div>
          <p className="text-gray-800 mt-4 leading-relaxed">
            I am a software engineer with a strong focus on backend development. I am passionate about building
            scalable and efficient systems that power web applications and APIs. In addition to my backend expertise, I am
            also a cybersecurity enthusiast, constantly exploring the latest trends and techniques to enhance security
            across all layers of technology.
          </p>
        </div>
      </PageSection>
    </section>
  );
};

export default About;
