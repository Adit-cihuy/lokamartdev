import React from "react";
import { Star } from "lucide-react";

export default function Card({ image, title, price, rating }) {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 border rounded shadow-md min-w-[300px] max-w-[320px]">
      <img src={image} alt={title} width={64} height={64} />
      <div className="text-center">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500">IDR {price.toLocaleString()}</p>
        <div className="flex items-center justify-center mt-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={index < rating ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
