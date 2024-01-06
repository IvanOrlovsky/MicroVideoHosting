import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-screen p-5 bg-gray-700 text-yellow-400">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl">Микровидеохостинг</span>
        <nav className="flex space-x-6">
          <Link href="/" className="text-2xl hover:text-white transition duration-300">
              Главная
          </Link>
          <Link href="/tags" className="text-2xl hover:text-white transition duration-300" >
              Теги
          </Link>
          <Link href="/upload" className="text-2xl hover:text-white transition duration-300" >
              Добавить видео
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
