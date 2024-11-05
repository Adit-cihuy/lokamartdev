import React from 'react'

export default function RegistrationCard({ type, title, description, icon, bgColor,onClick }) {
    return (
        <div onClick={onClick} className={`p-6 rounded-lg ${bgColor} transition-transform hover:scale-105 cursor-pointer`}>
            <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${type === 'seller' ? 'bg-red-500 text-white' : 'bg-white text-red-500'}`}>
                    {icon}
                </div>
                <div>
                    <h3 className={`font-bold text-lg ${type === 'seller' ? 'text-red-500' : 'text-white'}`}>
                        {title}
                    </h3>
                    <p className={type === 'seller' ? 'text-gray-600' : 'text-white'}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
