
import React from 'react';
import type { Book } from '../types';

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
}

const BookDetailModal: React.FC<BookDetailModalProps> = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="relative max-w-2xl w-full bg-gray-900 border border-white/10 rounded-2xl p-6 shadow-2xl z-10" onClick={e => e.stopPropagation()}>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="sm:col-span-1 w-full h-auto aspect-[3/4] rounded-xl overflow-hidden flex-shrink-0 bg-black/20 flex items-center justify-center">
            <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
          </div>
          <div className="sm:col-span-2 flex flex-col">
            <h3 className="text-2xl font-bold text-white">{book.title}</h3>
            <p className="text-sm text-gray-400">oleh {book.author}</p>
            <p className="mt-4 text-sm text-gray-300">
              Ini adalah deskripsi placeholder untuk buku ini. Dalam aplikasi nyata, deskripsi yang lebih rinci akan ditampilkan di sini, menyoroti fitur-fitur utama dan manfaat bagi pembaca.
            </p>
            
            <div className="mt-auto pt-6 flex items-center gap-3">
              <div className="text-xl font-bold text-white">{book.price === 0 ? "Gratis" : `Rp ${book.price.toLocaleString('id-ID')}`}</div>
              <button onClick={() => alert('Checkout contoh')} className="px-5 py-2 text-sm font-semibold rounded-xl bg-pink-600 text-white hover:bg-pink-500 transition-colors">
                Beli Sekarang
              </button>
              <button onClick={onClose} className="px-4 py-2 text-sm rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors">Tutup</button>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BookDetailModal;