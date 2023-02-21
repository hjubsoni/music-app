import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'react-feather';
import MenuNav from './MenuNav';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const hamburgerLine = `h-1 w-7 mt-2 rounded-full bg-white transition ease transform duration-300`;
  return (
    <>
      <div className="h-8" />
      <div className="mx-auto px-4 max-w-6xl">
        <header className="flex justify-between items-center h-4 ">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt=""
              width={62}
              height={62}
            />
          </Link>
          <nav className="hidden md:ml-auto sm:flex gap-4 item-center">
            <li className="list-none">
              <Link href="#" className="text-lg hover:text-primary">
                Premium
              </Link>
            </li>
            <li className="list-none after:content-['|'] after:ml-[14px]">
              <Link href="#" className="text-lg hover:text-primary">
                Sign up
              </Link>
            </li>

            <li className="list-none ">
              <Link href="#" className="text-lg hover:text-primary">
                Log in
              </Link>
            </li>
          </nav>
          <button
            className="ml-auto flex flex-col h-12 w-12  rounded justify-center items-center z-20 sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div
              className={`${hamburgerLine} ${
                isMenuOpen && 'rotate-45 translate-y-1'
              }`}
            />

            <div
              className={`${hamburgerLine} ${
                isMenuOpen && '-rotate-45 -translate-y-2 '
              }`}
            />
          </button>

          {isMenuOpen && (
            <MenuNav handleDismiss={() => setIsMenuOpen(false)}>
              <ul className="flex flex-col ">
                <li className="p-2">
                  <Link href="" className="text-xl">
                    Premium
                  </Link>
                </li>
                <li className="p-2">
                  <Link href="" className="text-xl">
                    Sign Up
                  </Link>
                </li>
                <li className="p-2">
                  <Link href="" className="text-xl">
                    Log In
                  </Link>
                </li>
              </ul>
            </MenuNav>
          )}
        </header>
      </div>
    </>
  );
}

export default Header;
