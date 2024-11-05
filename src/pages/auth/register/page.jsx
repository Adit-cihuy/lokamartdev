import React from 'react'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import RegistrationCard from '../../../components/fragments/RegistrationCard'


export default function Register() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-red-500 mb-8">Daftar Sebagai</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Registration Options */}
            <div className="space-y-4">
              <RegistrationCard
                type="seller"
                title="Mitra Sedjoaelan"
                description="Jual dan Perkenalkan produk anda secara efisien ke Pemerintah dan Badan usaha lainnya"
                bgColor="bg-green-100"
                icon={
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                }
              />
              <RegistrationCard
                type="buyer"
                title="Pembeli"
                description="Nikmati berbagai layanan dengan harga murah dan proses yang mudah"
                bgColor="bg-red-500"
                icon={
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                }
              />
            </div>

            {/* Right Side - Illustration */}
            <div className="flex flex-col items-center">
              <img src="/api/placeholder/400/300" alt="UMKM Illustration" className="mb-6" />
              <div className="flex space-x-4 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`/api/placeholder/50/50`}
                    alt={`Icon ${i}`}
                    className="w-12 h-12 rounded border-2 border-red-500"
                  />
                ))}
              </div>
              <h3 className="text-xl font-bold text-red-500 text-center">
                Bantu UMKM Naik Kelas & Go Digital
              </h3>
              <p className="text-center text-gray-600 mt-2">
                Memberikan akses kepada UMKM untuk dapat bergabung dalam ekosistem
                Pengadaan Barang dan Jasa Pemerintah secara digital
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>

  )
}
