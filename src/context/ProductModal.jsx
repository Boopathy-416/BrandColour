import { useState } from "react";

export default function ProductModal({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[420px] relative animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black"
        >
          ×
        </button>

        {/* Product header */}
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-20 h-20 object-cover rounded"
          />
          <div>
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-black font-bold">${product.price.toFixed(2)}</p>
          </div>
        </div>

        {/* Color */}
        <div className="mb-4">
          <p className="font-medium mb-2">Color</p>
          <button className="border px-4 py-1 rounded">{product.color}</button>
        </div>

        {/* Sizes */}
        <div className="mb-4">
          <p className="font-medium mb-2">Size</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border px-3 py-1 rounded ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center justify-between border p-2 mb-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="text-xl font-bold"
          >
            −
          </button>
          <span className="text-lg font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="text-xl font-bold"
          >
            +
          </button>
        </div>

        {/* Add to cart */}
        <button className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition">
          Add To Cart
        </button>

        <p className="text-center text-sm mt-4 underline cursor-pointer hover:text-gray-600">
          View Full Details
        </p>
      </div>
    </div>
  );
}
