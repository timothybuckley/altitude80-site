'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_02.png"
            alt="Company Logo"
            width={49}
            height={30}
            priority
            className="mr-4"
          />
        </Link>
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-6 mr-8">
            <li>
              <Link href="/technology" className="text-white hover:text-gray-300">
                Technology
              </Link>
            </li>
            <li>
              <Link href="/library" className="text-white hover:text-gray-300">
                Library
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
          </ul>
          <a href="https://www.linkedin.com/company/altitude80/about" target="_blank" rel="noopener noreferrer">
            <Image src="/LI-Logo.png" alt="LinkedIn" width={82} height={20} />
          </a>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/technology" className="block text-white hover:text-gray-300">
                Technology
              </Link>
            </li>
            <li>
              <Link href="/library" className="block text-white hover:text-gray-300">
                Library
              </Link>
            </li>
            <li>
              <Link href="/about" className="block text-white hover:text-gray-300">
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;