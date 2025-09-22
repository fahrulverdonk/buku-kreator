
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} Toko Buku Kreator — dibuat untuk showcase
    </footer>
  );
};

export default Footer;