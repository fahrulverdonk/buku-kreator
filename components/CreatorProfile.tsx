
import React from 'react';
import type { Creator } from '../types';

interface CreatorProfileProps {
  creator: Creator;
  query: string;
  setQuery: (query: string) => void;
  filter: string;
  setFilter: (filter: string) => void;
  tags: string[];
  resultCount: number;
}

const CreatorProfile: React.FC<CreatorProfileProps> = ({
  creator,
  query,
  setQuery,
  filter,
  setFilter,
  tags,
  resultCount,
}) => {
  return (
    <aside className="md:col-span-1 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 sticky top-6 h-fit">
      <div className="flex items-center gap-4">
        <img src={creator.avatar} alt="avatar" className="w-20 h-20 rounded-xl object-cover shadow-lg" />
        <div>
          <h2 className="font-bold text-lg text-white">{creator.name}</h2>
          <p className="text-sm text-gray-400">{creator.title}</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-300">{creator.bio}</p>

      <div className="mt-6">
        <label htmlFor="search" className="block text-xs font-medium text-gray-400 mb-2">Cari buku</label>
        <input
          id="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Judul atau penulis..."
          className="w-full px-3 py-2 text-sm rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
        />
      </div>

      <div className="mt-4">
        <label className="block text-xs font-medium text-gray-400 mb-2">Filter Kategori</label>
        <div className="flex flex-wrap gap-2">
          {tags.map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors duration-200 ${
                filter === t 
                ? "bg-pink-600 text-white border-pink-600" 
                : "bg-white/10 text-gray-200 hover:bg-white/20 border-white/20"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-400 border-t border-white/10 pt-4">
        <div>Jumlah hasil: <span className="font-semibold text-white">{resultCount}</span></div>
      </div>
    </aside>
  );
};

export default CreatorProfile;