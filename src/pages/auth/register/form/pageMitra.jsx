import React, { useState } from 'react'
import lokamartLogo from 'D:/lokamart/src/assets/aset/aset/logo lokamart mini.png';

export default function pageMitra() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        confirmPassword: '',
        businessName: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleLoginClick = (e) => {
        e.preventDefault();
        console.log('Navigate to login');
    };

    const InputField = ({ label, name, type = "text", placeholder, value }) => (
        <div>
            <label className="block text-gray-700 mb-2">{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Logo */}
            <div className="flex justify-center py-8">
                {/* Using placeholder image instead of direct import */}
                <img
                    src={lokamartLogo}
                    alt="Lokamart Logo"
                    className="h-16 object-contain"
                />
            </div>

            {/* Registration Form */}
            <div className="container mx-auto px-4 py-8 max-w-xl">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-center mb-8">Pendaftaran Mitra</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <InputField
                            label="Nama Depan"
                            name="firstName"
                            placeholder="Nama Depan"
                            value={formData.firstName}
                        />

                        <InputField
                            label="Nama Belakang"
                            name="lastName"
                            placeholder="Nama Belakang"
                            value={formData.lastName}
                        />

                        <InputField
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                        />

                        <InputField
                            label="No Telepon"
                            name="phone"
                            type="tel"
                            placeholder="Nomor Telepon"
                            value={formData.phone}
                        />

                        <InputField
                            label="Username"
                            name="username"
                            placeholder="Nama Pengguna"
                            value={formData.username}
                        />

                        {/* Password Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 mb-2">Kata Sandi</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Kata Sandi"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Konfirmasi Kata Sandi</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Konfirmasi Kata Sandi"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                        </div>

                        <InputField
                            label="Nama Usaha"
                            name="businessName"
                            placeholder="Nama Usaha"
                            value={formData.businessName}
                        />

                        <div>
                            <label className="block text-gray-700 mb-2">Alamat Detail</label>
                            <textarea
                                name="address"
                                placeholder="Alamat Detail"
                                value={formData.address}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors mt-6"
                        >
                            Lanjut
                        </button>

                        {/* Login Link */}
                        <div className="text-center text-gray-600 mt-4">
                            Sudah punya akun?{' '}
                            <a
                                href="#"
                                onClick={handleLoginClick}
                                className="text-red-500 hover:text-red-600"
                            >
                                Masuk
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-red-500 text-white mt-auto py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Lokamart Section */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">LOKAMART</h3>
                            <p className="mb-4">Dapatkan 10% untuk Transaksi Pertama</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Masukkan email"
                                    className="px-4 py-2 rounded-l-lg text-gray-800 w-full"
                                />
                                <button className="bg-gray-800 px-4 rounded-r-lg">→</button>
                            </div>
                        </div>

                        {/* Dukungan Section */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Dukungan</h3>
                            <p>Jendral Sudirman,</p>
                            <p>Thehok, Jambi 36138,</p>
                            <p>Indonesia</p>
                            <p className="mt-2">lokamart@gmail.com</p>
                        </div>

                        {/* Akun Section */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Akun</h3>
                            <ul className="space-y-2">
                                <li>Akun Saya</li>
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
                                <li>Kontak</li>
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
}
