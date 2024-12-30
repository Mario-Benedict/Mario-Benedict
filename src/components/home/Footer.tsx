import BaseProps from "@/types/BaseProps";
import clsx from "clsx";

export type FooterProps = BaseProps;

const Footer = ({ className, id}: FooterProps) => {
  return (
    <footer id={id} className={clsx('text-center font-poppins text-sm md:text-base', className)}>
      <p className='mt-4 text-darkgrey'>
        &copy; {new Date().getFullYear()} Mario Benedict. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
