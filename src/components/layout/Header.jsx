import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/aset/aset/Since 2024.png';
const Header = ({
  showSearch = true, // Prop untuk mengontrol visibility search
  onSearch, // Prop untuk handle search
  placeholder = "Cari barang atau toko...", // Prop untuk placeholder text
  initialSearchValue = "", // Prop untuk nilai awal search
  disabled = false // Prop untuk disable/enable search input
}) => {
  const [searchValue, setSearchValue] = useState(initialSearchValue);
  const navigate = useNavigate()
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="Lokamart Logo"
              className="h-10 w-10"
            />
            <div className="flex items-center">
              <span className="text-sm">Yuk Jual Beli di Lokamart, </span>
              <span className="text-sm font-bold ml-1">Daftar Sekarang!</span>
            </div>
          </div>
          <div className="flex items-center">
            {showSearch && (
              <div className="relative mx-4">
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleSearchChange}
                  onKeyPress={handleKeyPress}
                  placeholder={placeholder}
                  disabled={disabled}
                  className={`w-96 px-4 py-2 border rounded-lg ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
                    }`}
                />
                <button
                  onClick={handleSearchSubmit}
                  disabled={disabled}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 px-6 py-1 rounded-lg
                    ${disabled
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-red-500 hover:bg-red-600'
                    } text-white transition-colors`}
                >
                  Cari
                </button>
              </div>
            )}
            <div className="flex items-center space-x-4 text-gray-600">
              <span className="text-sm">Lacak Pesanan</span>
              <button onClick={() => navigate('/login')} className="text-sm">Masuk</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;