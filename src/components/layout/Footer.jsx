import React from 'react'
import FooterSection from './FooterSection';

export default function Footer() {
    return (
        <footer className="bg-red-500 text-white mt-12 py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <FooterSection title="LOKAMART">
                        <p className="mb-4">Get 10% off your first order</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-l-lg text-gray-800 w-full"
                            />
                            <button className="bg-gray-800 px-4 rounded-r-lg">→</button>
                        </div>
                    </FooterSection>

                    <FooterSection title="Support">
                        <p>Jendral Sudirman,</p>
                        <p>Thehok, Jambi 36138,</p>
                        <p>Indonesia</p>
                        <p className="mt-2">lokamart@gmail.com</p>
                    </FooterSection>

                    <FooterSection title="Account">
                        <ul className="space-y-2">
                            <li>My Account</li>
                            <li>Login / Register</li>
                            <li>Wishlist</li>
                        </ul>
                    </FooterSection>

                    <FooterSection title="Quick Link">
                        <ul className="space-y-2">
                            <li>Terms Of Use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </FooterSection>
                </div>

                <div className="flex justify-end items-center space-x-6 mt-8">
                    <a href="#" className="hover:text-gray-200">
                        <img src="/api/placeholder/24/24" alt="Facebook" className="w-6 h-6" />
                    </a>
                    <a href="#" className="hover:text-gray-200">
                        <img src="/api/placeholder/24/24" alt="Twitter" className="w-6 h-6" />
                    </a>
                    <a href="#" className="hover:text-gray-200">
                        <img src="/api/placeholder/24/24" alt="Instagram" className="w-6 h-6" />
                    </a>
                    <a href="#" className="hover:text-gray-200">
                        <img src="/api/placeholder/24/24" alt="LinkedIn" className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
