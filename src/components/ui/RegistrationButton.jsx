import React from 'react'

export default function RegistrationButton ({ type, title, description, bgColor, icon, onClick }) { 
    return (
        <button
            onClick={onClick}
            className={`w-full ${bgColor} p-6 rounded-lg transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 group`}
        >
            <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${type === 'seller' ? 'bg-red-500 text-white' : 'bg-white text-red-500'} group-hover:scale-110 transition-transform`}>
                    {icon}
                </div>
                <div className="text-left">
                    <h3 className={`font-bold text-lg ${type === 'seller' ? 'text-red-500' : 'text-white'} mb-2`}>
                        {title}
                    </h3>
                    <p className={type === 'seller' ? 'text-gray-600' : 'text-white'}>
                        {description}
                    </p>
                </div>
            </div>
        </button>
    );
};

// Example usage:

