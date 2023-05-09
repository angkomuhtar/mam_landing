import {
  PhoneIcon,
  Location,
  LinkedIn,
  Twitter,
  Facebook,
} from "public/assets/icon";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = ({ active }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const router = useRouter();
  return (
    <header>
      <nav className='absolute top-0 left-0 right-0 z-10'>
        <div className='bg-red-700 py-2 hidden md:block'>
          <div className='container mx-auto flex flex-wrap justify-between md:items-center md:space-x-6 space-y-2'>
            <div className='flex flex-wrap md:space-x-6'>
              <div className='flex justify-start space-x-2 items-center text-white'>
                <Location className='w-5' />
                <h2 className='font-poppins font-light text-tiny'>
                  Jl. A.W. Syahranie No. 40 Samarinda, East Kalimantan
                </h2>
              </div>
              <div className='flex justify-start space-x-2 text-white items-center'>
                <PhoneIcon className='w-5' />
                <h2 className='font-poppins font-light text-tiny'>
                  +123 456 789
                </h2>
              </div>
            </div>
            <div className='flex justify-center items-center space-x-3 text-white'>
              <Link href='#'>
                <LinkedIn className='h-5' />
              </Link>
              <Link href='#'>
                <Twitter className='h-5' />
              </Link>
              <Link href='#'>
                <Facebook className='h-5' />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${offset > 47 && "bg-gray"} ${
            offset > 45 && "fixed left-0 right-0 top-0"
          } transition-colors duration-200`}>
          <div
            className={`container mx-auto ${
              offset > 45 ? "py-4" : "py-8"
            } flex justify-between items-center transform duration-200`}>
            <Link href='/'>
              <img
                src={`${router.basePath}/assets/images/logo.png`}
                className='h-10'
              />
            </Link>
            <div className='md:flex space-x-10 items-center hidden '>
              <div
                className={`flex justify-end md:space-x-4 ${
                  offset > 47 ? "text-black" : "text-red-700"
                }`}>
                <Link href='about' className='cursor-pointer group'>
                  <p
                    className={`nav-link ${
                      active == "about" && "text-red-700"
                    }`}>
                    About Us
                  </p>
                  <div
                    className={`nav-line ${
                      active == "about" ? "w-3/5" : "w-0"
                    } `}
                  />
                </Link>
                <Link href='service' className='cursor-pointer group'>
                  <p
                    className={`nav-link ${
                      active == "service" && "text-red-700"
                    }`}>
                    Services
                  </p>
                  <div
                    className={`nav-line ${
                      active == "service" ? "w-3/5" : "w-0"
                    } `}
                  />
                </Link>
                <Link href='teams' className='cursor-pointer group'>
                  <p
                    className={`nav-link ${
                      active == "teams" && "text-red-700"
                    }`}>
                    Teams
                  </p>
                  <div
                    className={`nav-line ${
                      active == "teams" ? "w-3/5" : "w-0"
                    } `}
                  />
                </Link>
                <Link href='works' className='cursor-pointer group'>
                  <p
                    className={`nav-link ${
                      active == "works" && "text-red-700"
                    }`}>
                    Works
                  </p>
                  <div
                    className={`nav-line ${
                      active == "works" ? "w-3/5" : "w-0"
                    } `}
                  />
                </Link>
                <Link href='career' className='cursor-pointer group'>
                  <p
                    className={`nav-link ${
                      active == "career" && "text-red-700"
                    }`}>
                    Career
                  </p>
                  <div
                    className={`nav-line ${
                      active == "career" ? "w-3/5" : "w-0"
                    } `}
                  />
                </Link>
              </div>
              <button className='uppercase bg-red-700 text-white font-semibold py-3 px-6 rounded-md text-xs hover:bg-white hover:text-red-700'>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
