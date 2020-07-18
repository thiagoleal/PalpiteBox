import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header className="bg-gray-200">
    <div id="logo" className="p-4 shadow-lg">
      <Link href="/">
        <a><img className="mx-auto" src="/logo-palpitebox.png" alt="PalpiteBox" /></a>
      </Link>
    </div>
    <nav className="p-3 shadow-md text-center">
      <Link href="/sobre">
        <a className="px-2 hover:underline">Sobre</a>
      </Link>
      <Link href="/contato">
        <a className="px-2 hover:underline">Contato</a>
      </Link>
      <Link href="/pesquisa">
        <a className="px-2 hover:underline">Pesquisa</a>
      </Link>
    </nav>
  </header>
);

export default Header;
