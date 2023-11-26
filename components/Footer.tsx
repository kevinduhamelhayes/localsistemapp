/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @next/next/no-img-element */
import {
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaRocket,
  FaInstagram,
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className=" flex min-h-[150px] w-full flex-col items-center pb-6  px-10 py-0 bg-slate-900 text-white md:space-y-10 md:px-20">
      <div className="flex w-full flex-col  md:flex-row md:justify-between ">
        <div className='flex justify-between w-full'>
          <div className="mt-4 flex flex-col items-center justify-around gap-4 md:flex-row">
          
          </div>
          <div className="mt-8 flex flex-col items-center justify-evenly gap-5  md:flex-row">
            <span className="mb-2 block text-xl">Social Media:</span>
            <div className="flex gap-5  ">
              <Link
                href="https://www.linkedin.com/company/devink-solutions/"
                className="text-4xl font-semibold transition-colors duration-200 text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://www.instagram.com/devink_solutions/"
                className="text-4xl font-semibold transition-colors duration-200 text-[#C13584]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=%2B543415883040"
                className="text-4xl font-semibold transition-colors duration-200 text-green-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 w-full border-t border-slate-500" />
      <div className="mt-4 flex w-full flex-col items-center justify-end md:flex-row">

        <span className="mt-8 font-semibold md:mt-0">
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          This website is made with ❤️ by
          {' '}
          <Link
            className="animate-gradient-x inline-flex bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent hover:text-cyan-400"
            href="https://www.devink.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devink
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
