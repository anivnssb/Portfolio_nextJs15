import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="py-28 container max-w-7xl  mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center mb--4">
          <Image
            src={'/profile.jpg'}
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
          />
        </div>
        <h1 className="texy-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Anvin PS</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Front-End Developer | UI/UX Enthusiast
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <Link
            href="https://github.com/anivnssb"
            target="_blank"
            className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/anvinps"
            target="_blank"
            className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/anvinps"
            target="_blank"
            className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
          >
            <FaTwitter />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/projects"
            className="bg-primary hover:bg-primary/70 inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg  transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/projects"
            className="bg-gray-500  hover:bg-gray-400 inline-block w-full md:w-auto text-white hover:text-gray-800 px-8 py-3 rounded-lg transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
