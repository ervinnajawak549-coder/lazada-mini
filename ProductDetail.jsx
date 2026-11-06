import { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

function ProductDetail() {
  const { id } = useParams()
  const location = useLocation()
  const { addToCart } = useCart()

  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')

  const product = location.state || {
    id: Number(id),
    name: 'Wireless Headset',
    category: 'Elektronik',
    price: 125000,
    description: 'Headset wireless dengan kualitas suara jernih dan nyaman digunakan.',
    emoji: '🎧',
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Detail Produk
      </h1>

      {/* Informasi Produk */}
      <div className="space-y-4">
        <div className="text-6xl">
          {product.emoji}
        </div>

        <div>
          <h2 className="text-gray-500">Nama Produk</h2>
          <p className="text-xl font-semibold">{product.name}</p>
        </div>

        <div>
          <h2 className="text-gray-500">Kategori</h2>
          <p>{product.category}</p>
        </div>

        <div>
          <h2 className="text-gray-500">Harga</h2>
          <p className="text-xl font-bold text-blue-600">
            Rp {product.price.toLocaleString('id-ID')}
          </p>
        </div>

        <div>
          <h2 className="text-gray-500">Deskripsi</h2>
          <p>
            {product.description || 'Tidak ada deskripsi produk.'}
          </p>
        </div>
      </div>

      {/* Rating Produk */}
      <div className="mt-6 border-t pt-5">
        <h2 className="mb-3 text-xl font-bold text-gray-800">
          Berikan Rating Produk
        </h2>

        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`text-3xl ${
                star <= rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              ★
            </button>
          ))}
        </div>

        <p className="mt-2 text-gray-600">
          Rating kamu: {rating} dari 5
        </p>

        {/* Ulasan Produk */}
        <h2 className="mb-2 mt-5 text-xl font-bold text-gray-800">
          Tulis Ulasan
        </h2>

        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Tuliskan ulasan produk..."
          className="w-full rounded-lg border p-3"
          rows="4"
        />

        <p className="mt-2 text-gray-600">
          Ulasan: {review || 'Belum ada ulasan.'}
        </p>
      </div>

      {/* Tombol Aksi */}
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={() => addToCart(product)}
          className="rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"
        >
          Tambah ke Keranjang
        </button>

        <Link
          to="/"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          Kembali ke Dashboard
        </Link>
      </div>
    </div>
  )
}

export default ProductDetail