import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <>
      <div className="h-8" />
      <div className="px-4 max-w-7xl mx-auto">
        <header className="h-12 flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt=""
              width={75}
              height={75}
            />
          </Link>
          <nav className="ml-auto flex gap-4 item-center">
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
        </header>
      </div>
    </>
  );
}

export default Header;
