import React from 'react'

export default function Header() {
    return (
        <header className="border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src="/api/placeholder/40/40" alt="Lokamart Logo" className="h-10 w-10" />
                <div className="flex items-center">
                  <span className="text-sm">Yuk Jual Beli di Lokamart, </span>
                  <span className="text-sm font-bold ml-1">Daftar Sekarang!</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="relative mx-4">
                  <input
                    type="text"
                    placeholder="Cari barang atau toko..."
                    className="w-96 px-4 py-2 border rounded-lg"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 text-white px-6 py-1 rounded-lg">
                    Cari
                  </button>
                </div>
                <div className="flex items-center space-x-4 text-gray-600">
                  <span className="text-sm">Lacak Pesanan</span>
                  <span className="text-sm">Masuk</span>
                </div>
              </div>
            </div>
          </div>
        </header>
    )
}
