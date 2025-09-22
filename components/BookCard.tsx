
import React from 'react';
import type { Book } from '../types';

interface BookCardProps {
  book: Book;
  onSelect: () => void;
  onAddToCart: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onSelect, onAddToCart }) => {
  return (
    <article className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-lg hover:shadow-pink-500/20 hover:border-white/20 hover:-translate-y-1 transition-all duration-200 flex flex-col">
      <div className="aspect-[3/4] rounded-xl overflow-hidden bg-white/5 flex items-center justify-center cursor-pointer" onClick={onSelect}>
        <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
      </div>
      <div className="mt-3 flex flex-col flex-grow">
        <h4 className="font-semibold text-sm text-white truncate" title={book.title}>{book.title}</h4>
        <p className="text-xs text-gray-400">{book.author}</p>
        <div className="mt-auto pt-2 flex items-center justify-between">
          <div className="text-sm font-bold text-white">{book.price === 0 ? "Gratis" : `Rp ${book.price.toLocaleString('id-ID')}`}</div>
          <button onClick={onAddToCart} className="text-xs px-3 py-1.5 rounded-full bg-pink-600 text-white hover:bg-pink-500 transition-colors">
            Beli
          </button>
        </div>
      </div>
    </article>
  );
};

export default BookCard;