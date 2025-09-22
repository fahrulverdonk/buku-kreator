
import React, { useState, useMemo } from 'react';
import type { Book } from './types';
import { CREATOR_PROFILE, BOOK_CATALOG } from './constants';
import Header from './components/Header';
import CreatorProfile from './components/CreatorProfile';
import BookGrid from './components/BookGrid';
import BookDetailModal from './components/BookDetailModal';
import Footer from './components/Footer';

export default function App() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const tags = useMemo(() => ["All", ...Array.from(new Set(BOOK_CATALOG.map(b => b.tag)))], []);

  const visibleBooks = useMemo(() => {
    return BOOK_CATALOG.filter(b => {
      const matchQuery = (b.title + b.author).toLowerCase().includes(query.toLowerCase());
      const matchFilter = filter === "All" || b.tag === filter;
      return matchQuery && matchFilter;
    });
  }, [query, filter]);

  const handleAddToCart = (bookTitle: string) => {
    alert(`${bookTitle} ditambahkan ke keranjang (contoh)`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 text-gray-200 p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <Header creator={CREATOR_PROFILE} />

        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CreatorProfile
            creator={CREATOR_PROFILE}
            query={query}
            setQuery={setQuery}
            filter={filter}
            setFilter={setFilter}
            tags={tags}
            resultCount={visibleBooks.length}
          />
          <BookGrid
            books={visibleBooks}
            onSelectBook={setSelectedBook}
            onAddToCart={handleAddToCart}
          />
        </main>

        <Footer />
      </div>

      <BookDetailModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
      />
    </div>
  );
}