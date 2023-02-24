import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, User } from 'react-feather';
import MenuNav from './MenuNav';
import { useSession, signIn, signOut } from 'next-auth/react';
import UserNav from './UserNav';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isUserNavOpen, setIsUserNavOpen] = React.useState(false);
  const profileBtnRef = React.useRef<HTMLButtonElement>(null);
  const hamburgerLine = `h-1 w-7 mt-2 rounded-full bg-white transition ease transform duration-300`;

  const { data: session } = useSession();
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
            <li className="list-none after:content-['|'] after:ml-[14px]">
              <Link
                href="#"
                className="text-lg hover:text-primary transition-all"
              >
                Premium
              </Link>
            </li>
            {session ? (
              <li className="list-none relative">
                <button
                  ref={profileBtnRef}
                  className="flex  items-center justify-center text-lg gap-2 hover"
                  onClick={() => setIsUserNavOpen(!isUserNavOpen)}
                >
                  <User size={28} />

                  <span>Profile</span>
                  <ChevronDown />
                </button>
                <UserNav
                  isUserNavOpen={isUserNavOpen}
                  setIsUserNavOpen={setIsUserNavOpen}
                  profileBtnRef={profileBtnRef}
                />
              </li>
            ) : (
              <>
                <li className="list-none ">
                  <Link
                    href="#"
                    className="text-lg hover:text-primary transition-all"
                  >
                    Sign up
                  </Link>
                </li>

                <li className="list-none ">
                  <button
                    className="text-lg hover:text-primary transition-all "
                    onClick={() => signIn()}
                  >
                    Log In
                  </button>
                </li>
              </>
            )}
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
              <ul className="flex flex-col gap-1">
                <li className="p-2">
                  <Link href="" className="text-xl">
                    Premium
                  </Link>
                </li>
                <li className="h-[0.5px] w-5 bg-white ml-2 my-4"></li>
                {session ? (
                  <>
                    <li className="p-2">
                      <Link href="" className="text-xl">
                        Account
                      </Link>
                    </li>
                    <li className="p-2">
                      <button
                        className="text-xl"
                        onClick={() => signOut()}
                      >
                        Log Out
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="p-2">
                      <Link href="" className="text-xl">
                        Sign Up
                      </Link>
                    </li>
                    <li className="p-2">
                      <button
                        className="text-xl  "
                        onClick={() => signIn()}
                      >
                        Log In
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </MenuNav>
          )}
        </header>
      </div>
    </>
  );
}

export default Header;
