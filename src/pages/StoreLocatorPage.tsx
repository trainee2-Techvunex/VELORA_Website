import React, { useState } from 'react';
import { STORE_LOCATIONS } from '../data/stores';
import { StoreLocation } from '../types';
import { Breadcrumbs } from '../components/Common/Breadcrumbs';
import { MapPin, Phone, Clock, Navigation, Search } from 'lucide-react';

export const StoreLocatorPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const cities: string[] = ['All', ...Array.from(new Set(STORE_LOCATIONS.map((s: StoreLocation) => s.city)))];

  const filteredStores = STORE_LOCATIONS.filter((store: StoreLocation) => {
    if (selectedCity !== 'All' && store.city !== selectedCity) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        store.name.toLowerCase().includes(q) ||
        store.city.toLowerCase().includes(q) ||
        store.address.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="bg-[#FAF9F8] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <Breadcrumbs
          items={[{ label: 'Home', link: '/' }, { label: 'Store Locator' }]}
        />

        {/* Hero */}
        <div className="bg-gradient-to-r from-[#FFF0F4] via-[#FFE4EC] to-[#FCE7F0] rounded-3xl p-8 sm:p-12 border border-[#FDE2E8] text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9F1239]">
            Physical Boutiques
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Experience VÉLORA In Store
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Sample rare Grasse extraits, receive personalised skin consultations from certified aestheticians, and enjoy complimentary gift packaging at our luxury boutiques.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#F0E9E6] shadow-xs">
          {/* City Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto">
            {cities.map((c: string) => (
              <button
                key={c}
                onClick={() => setSelectedCity(c)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  selectedCity === c
                    ? 'bg-[#9F1239] text-white shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-[#F0E9E6]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search mall or city..."
              className="w-full pl-9 pr-3.5 py-2 bg-slate-50 border border-[#F0E9E6] rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#9F1239]"
            />
          </div>
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store: StoreLocation) => (
            <div
              key={store.id}
              className="p-6 rounded-3xl bg-white border border-[#F0E9E6] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FFF0F3] text-[#9F1239] px-2.5 py-1 rounded-full border border-[#FDE2E8]">
                    {store.city}
                  </span>
                  {store.isFlagship && (
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      FLAGSHIP MAISON
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl font-bold text-slate-900 leading-snug">
                  {store.name}
                </h3>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#9F1239] shrink-0 mt-0.5" />
                    <span>{store.address}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#9F1239] shrink-0" />
                    <span>{store.timing}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#9F1239] shrink-0" />
                    <span>{store.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Landmark: {store.landmark}
                </span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(store.name + ' ' + store.city)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#9F1239] hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
