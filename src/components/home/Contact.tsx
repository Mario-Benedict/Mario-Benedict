import BaseProps from "@/types/BaseProps"
import PageSection from "../shared/PageSection"
import clsx from "clsx"
import PopupLink from "../shared/PopupLink"
import { GitHub, Linkedin, Mail } from 'react-feather';

export type ContactProps = BaseProps

const Contact = ({id, className}: ContactProps) => {
  return (
    <PageSection id="contact" className={clsx('text-center', className)}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-8 text-xl">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>

        <div className="flex flex-row justify-center items-center gap-6 mt-8 select-none">
          <PopupLink href="https://github.com/Mario-Benedict" aria-label="GitHub">
            <GitHub size={28} />
          </PopupLink>

          <PopupLink href="https://www.linkedin.com/in/mario-benedict/" aria-label="LinkedIn">
            <Linkedin size={28} />
          </PopupLink>

          <PopupLink href="mailto:mariobenedict77@gmail.com" aria-label="mariobenedict7@gmail.com">
            <Mail size={28} />
          </PopupLink>
        </div>
      </div>
    </PageSection>
  )
}

export default Contact
