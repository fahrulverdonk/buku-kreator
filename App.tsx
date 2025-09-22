import React, { useState } from "react";

// Minimal Bookstore — Single-file React component with social media images in catalog
// TailwindCSS for styling

// Defined Book type for state and data
interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  tag: string;
  cover: string;
}

export default function App() {
  // sample content creator profile
  const creator = {
    name: "Fahrul Verdonk", 
    title: "Content Creator & Book Curator",
    bio: "Membuat konten tentang menulis, dan strategi konten. Temukan rekomendasi buku terbaik untuk kreator.",
    avatar: "https://i.imgur.com/M3bDGkE.jpeg",
  };

  // sample catalog with social media related items, with fixed syntax and URLs
  const sampleBooks: Book[] = [
    { id: 1, title: "Panduan Algoritma kreator", author: "F.Verdonk", price: 129000, tag: "Digital", cover: "https://i.imgur.com/cqex7Py.png" },
    { id: 2, title: "views algoritma tiktok", author: "F.", price: 99000, tag: "Writing", cover: "https://i.imgur.com/4FEtsgE.jpeg" }, 
    { id: 3, title: "Strategi Konten ", author: "F.Verdonk", price: 149000, tag: "Business", cover: "https://i.imgur.com/TeRGuzV.png" }, 
    { id: 4, title: "Design Minimal untuk Kreator", author: "Lia", price: 109000, tag: "Design", cover: "https://i.imgur.com/TeRGuzV.png" }, 
    // Added social media images
    { id: 6, title: "TikTok Guide", author: "Social Media", price: 0, tag: "Platform", cover: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" },
    { id: 7, title: "Instagram Guide", author: "Social Media", price: 0, tag: "Platform", cover: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" },
    { id: 8, title: "Twitter Guide", author: "Social Media", price: 0, tag: "Platform", cover: "https://i.imgur.com/738f8Sl.png" },
    { id: 9, title: "Facebook Guide", author: "Social Media", price: 0, tag: "Platform", cover: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png" },
    { id: 10, title: "YouTube Guide", author: "Social Media", price: 0, tag: "Platform", cover: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" }
  ];

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Book | null>(null);
  const [books] = useState(sampleBooks);

  const tags = ["All", ...Array.from(new Set(books.map(b => b.tag)))];

  const visible = books.filter(b => {
    const matchQuery = (b.title + b.author).toLowerCase().includes(query.toLowerCase());
    const matchFilter = filter === "All" || b.tag === filter;
    return matchQuery && matchFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold">Toko Buku Kreator</h1>
            <p className="text-sm text-gray-600">Pilihan kurasi dari content creator favoritmu</p>
          </div>
          <div className="flex items-center gap-4">
            <img src={creator.avatar} alt="creator" className="w-12 h-12 rounded-full object-cover shadow-md" />
            <div className="text-right">
              <div className="text-sm font-semibold">{creator.name}</div>
              <div className="text-xs text-gray-500">{creator.title}</div>
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Creator Card & About */}
          <section className="md:col-span-1 bg-white rounded-2xl p-4 shadow-sm sticky top-6 h-fit">
            <div className="flex items-center gap-4">
              <img src={creator.avatar} alt="avatar" className="w-20 h-20 rounded-xl object-cover shadow" />
              <div>
                <h2 className="font-bold text-lg">{creator.name}</h2>
                <p className="text-sm text-gray-500">{creator.title}</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600">{creator.bio}</p>

            <div className="mt-6">
              <label className="block text-xs text-gray-500 mb-2">Cari buku</label>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Judul atau penulis..."
                className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>

            <div className="mt-4">
              <label className="block text-xs text-gray-500 mb-2">Filter</label>
              <div className="flex flex-wrap gap-2">
                {tags.map(t => (
                  <button
                    key={t}
                    onClick={() => setFilter(t)}
                    className={`text-sm px-3 py-1 rounded-xl border ${filter === t ? "bg-gray-900 text-white" : "bg-white text-gray-700"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <div>Jumlah hasil: <span className="font-semibold text-gray-700">{visible.length}</span></div>
            </div>
          </section>

          {/* Right: Catalog */}
          <section className="md:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Katalog Pilihan</h3>
              <div className="text-sm text-gray-500">Dipersingkat untuk tampilan minimalis</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {visible.map(book => (
                <article key={book.id} className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow duration-150">
                  <div className="aspect-[3/4] rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img src={book.cover} alt={book.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="mt-3">
                    <h4 className="font-semibold text-sm truncate">{book.title}</h4>
                    <p className="text-xs text-gray-500">{book.author}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="text-sm font-bold">{book.price === 0 ? "Gratis" : `Rp ${book.price.toLocaleString('id-ID')}`}</div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => setSelected(book)} className="text-xs px-2 py-1 rounded-full border">Detail</button>
                        <button onClick={() => alert(`${book.title} ditambahkan ke keranjang (contoh)`)} className="text-xs px-2 py-1 rounded-full bg-gray-900 text-white">Beli</button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {visible.length === 0 && (
              <div className="mt-8 text-center text-gray-500">Tidak ada item yang cocok. Coba kata kunci lain atau pilih filter.</div>
            )}
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">© {new Date().getFullYear()} Toko Buku Kreator — dibuat untuk showcase</footer>
      </div>

      {/* Modal for book detail */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSelected(null)} />
          <div className="relative max-w-2xl w-full bg-white rounded-2xl p-6 shadow-2xl z-10">
            <div className="flex items-start gap-4">
              <div className="w-40 h-56 rounded-md overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
                <img src={selected.cover} alt={selected.title} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{selected.title}</h3>
                <p className="text-sm text-gray-600">oleh {selected.author}</p>
                <p className="mt-4 text-sm">Deskripsi singkat tentang item ini. (Ganti dengan konten asli.)</p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="text-lg font-bold">{selected.price === 0 ? "Gratis" : `Rp ${selected.price.toLocaleString('id-ID')}`}</div>
                  <button onClick={() => alert('Checkout contoh')} className="px-4 py-2 rounded-xl bg-gray-900 text-white">Checkout</button>
                  <button onClick={() => setSelected(null)} className="px-3 py-2 rounded-xl border">Tutup</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}