
import React from 'react';
import type { Creator } from '../types';

interface HeaderProps {
  creator: Creator;
}

const Header: React.FC<HeaderProps> = ({ creator }) => {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white">Toko Buku Kreator</h1>
        <p className="text-sm text-gray-300">Pilihan kurasi dari content creator favoritmu</p>
      </div>
      <div className="flex items-center gap-4">
        <img src={creator.avatar} alt={creator.name} className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-white/50" />
        <div className="text-right hidden sm:block">
          <div className="text-sm font-semibold text-white">{creator.name}</div>
          <div className="text-xs text-gray-400">{creator.title}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;