import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <>
      <div className="h-8" />
      <div className="px-4">
        <header className="max-w-7xl mx-auto h-12 flex items-center">
          <Link href="#" className="text-lg">
            Logo
          </Link>
          <nav className="ml-auto flex gap-4 item-center">
            <li className="list-none">
              <Link href="#" className="text-lg">
                Premium
              </Link>
            </li>
            <li className="list-none after:content-['|'] after:ml-[14px]">
              <Link href="#" className="text-lg">
                Sign up
              </Link>
            </li>

            <li className="list-none">
              <Link href="#" className="text-lg">
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
