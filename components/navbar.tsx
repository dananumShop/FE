"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isclick, setisClick] = useState(false);
  const togglenavbar = () => {
    setisClick(!isclick);
  };
  const handleLinkClick = () => {
    setisClick(false); // 링크 클릭 시 Navbar를 닫도록 상태를 false로 설정
  };
  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <nav className="bg-neutral-950 fixed w-full">
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 whitespace-nowrap">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <div className="flex flex-col items-center">
                  <Link href="/" className="text-white text-4xl underline">
                    LDIA
                  </Link>
                  <Link href="/">
                    <span className="text-white text-xs">
                      Let's divide it all
                    </span>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-12">
                  <Link
                    href="/bestItem"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    BEST
                  </Link>
                  <Link
                    href="/newItem"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    NEW
                  </Link>
                  <Link
                    href="/totalItem"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    전체상품
                  </Link>
                  <Link
                    href="/clothes"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    의류
                  </Link>
                  <Link
                    href="/bedding"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    침구류
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-4">
                  <Link
                    href="/"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex gap-3"
                  >
                    <span className="">Search</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/member/cart"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/member/login"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    로그인
                  </Link>
                  <Link
                    href="/"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    즐겨찾기
                  </Link>
                  <Link
                    href="/"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    언어
                  </Link>
                </div>
              </div>
              <div className="md:hidden flex items-center gap-2">
                <Link href="/member/cart">
                  <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </button>
                </Link>
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={togglenavbar}
                >
                  {isclick ? (
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          {isclick && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/bestItem"
                  className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                  onClick={handleLinkClick}
                >
                  BEST
                </Link>
                <Link
                  href="/newItem"
                  className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                  onClick={handleLinkClick}
                >
                  NEW
                </Link>
                <Link
                  href="/totalItem"
                  className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                  onClick={handleLinkClick}
                >
                  전체상품
                </Link>
                <Link
                  href="/clothes"
                  className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                  onClick={handleLinkClick}
                >
                  의류
                </Link>
                <Link
                  href="/bedding"
                  className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                  onClick={handleLinkClick}
                >
                  침구류
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
