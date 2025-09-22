
import React from 'react';
import type { Book } from '../types';
import BookCard from './BookCard';

interface BookGridProps {
  books: Book[];
  onSelectBook: (book: Book) => void;
  onAddToCart: (bookTitle: string) => void;
}

const BookGrid: React.FC<BookGridProps> = ({ books, onSelectBook, onAddToCart }) => {
  return (
    <section className="md:col-span-2">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Katalog Pilihan</h3>
        <div className="text-sm text-gray-400">{books.length} item</div>
      </div>

      {books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map(book => (
            <BookCard
              key={book.id}
              book={book}
              onSelect={() => onSelectBook(book)}
              onAddToCart={() => onAddToCart(book.title)}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 text-center text-gray-400 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-12">
          <p className="font-semibold text-white">Tidak ada item yang cocok.</p>
          <p className="text-sm">Coba kata kunci lain atau pilih filter yang berbeda.</p>
        </div>
      )}
    </section>
  );
};

export default BookGrid;