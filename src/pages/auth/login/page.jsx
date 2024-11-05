import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import lokamartLogo from 'D:/lokamart/src/assets/aset/aset/logo lokamart mini.png';
import Header from '../../../components/layout/Header';


export default function Login() {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', credentials);
  };

  return (
    <div className="min-h-screen bg-gray-50">
     <Header showSearch={false} />

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4">
        {/* Logo */}
        <div className="flex justify-center py-8">
                {/* Using placeholder image instead of direct import */}
                <img
                    src={lokamartLogo}
                    alt="Lokamart Logo"
                    className="h-16 object-contain"
                />
            </div>

        {/* Login Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Illustration */}
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <img src="/api/placeholder/300/300" alt="Login Illustration" className="w-full" />
              </div>
              <div className="flex space-x-4">
                <img src="/api/placeholder/50/50" alt="Icon 1" className="w-12 h-12 border-2 border-red-500 rounded" />
                <img src="/api/placeholder/50/50" alt="Icon 2" className="w-12 h-12 border-2 border-red-500 rounded" />
                <img src="/api/placeholder/50/50" alt="Icon 3" className="w-12 h-12 border-2 border-red-500 rounded" />
                <img src="/api/placeholder/50/50" alt="Icon 4" className="w-12 h-12 border-2 border-red-500 rounded" />
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Masuk ke Akun-mu</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Nama Pengguna"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={credentials.username}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Kata Sandi</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Kata Sandi"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={credentials.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="text-right">
                  <a href="#" className="text-gray-600 hover:text-red-500">
                    Lupa Kata Sandi?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Masuk
                </button>

                <div onClick = {() => navigate('/register')} className="text-center">
                  <span className="text-gray-600">Tidak punya akun? </span>
                  <a href="#" className="text-red-500 hover:text-red-600 font-medium">
                    Daftar
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-red-500 text-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Lokamart Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">LOKAMART</h3>
              <p className="mb-4">Get 10% off your first order</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg text-gray-800 flex-1"
                />
                <button className="bg-gray-800 px-4 rounded-r-lg">→</button>
              </div>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <p>Jendral Sudirman,</p>
              <p>Thehok, Jambi 36138,</p>
              <p>Indonesia</p>
              <p>lokamart@gmail.com</p>
            </div>

            {/* Account Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Account</h3>
              <ul className="space-y-2">
                <li>My Account</li>
                <li>Login / Register</li>
                <li>Wishlist</li>
              </ul>
            </div>

            {/* Quick Link Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Link</h3>
              <ul className="space-y-2">
                <li>Terms Of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          {/* Social Media & Download */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-200">Facebook</a>
              <a href="#" className="hover:text-gray-200">Twitter</a>
              <a href="#" className="hover:text-gray-200">Instagram</a>
              <a href="#" className="hover:text-gray-200">LinkedIn</a>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm mb-2">Download App</p>
              <div className="flex space-x-2">
                <img src="/api/placeholder/120/40" alt="Google Play" className="h-10" />
                <img src="/api/placeholder/120/40" alt="App Store" className="h-10" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
