import type { Creator, Book } from './types';

export const CREATOR_PROFILE: Creator = {
  name: "Fahrul Verdonk",
  title: "Content Creator & Book Curator",
  bio: "Membuat konten tentang menulis, growth digital, dan strategi konten. Temukan rekomendasi buku terbaik untuk kreator.",
  avatar: "https://images.unsplash.com/photo-1594756858224-1a62a6a81571?q=80&w=400&auto=format&fit=crop"
};

export const BOOK_CATALOG: Book[] = [
  { id: 1, title: "Panduan Algoritma Sosial", author: "F. Verdonk", price: 129000, tag: "Digital", cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Menulis untuk Viral", author: "F. Verdonk", price: 99000, tag: "Writing", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Strategi Konten 101", author: "F. Verdonk", price: 149000, tag: "Business", cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Design Minimal untuk Kreator", author: "F. Verdonk", price: 109000, tag: "Design", cover: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Growth Hacking Konten", author: "F. Verdonk", price: 119000, tag: "Marketing", cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop" },
];