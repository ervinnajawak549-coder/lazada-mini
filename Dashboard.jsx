import { useState } from 'react'
import ProductCard from '../../components/ProductCard'

const products = [
  {
    id: 1,
    name: 'Wireless Headset',
    price: 125000,
    category: 'Elektronik',
    emoji: '🎧',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 250000,
    category: 'Elektronik',
    emoji: '⌚',
  },
  {
    id: 3,
    name: 'Tas Kuliah',
    price: 180000,
    category: 'Fashion',
    emoji: '🎒',
  },
  {
    id: 4,
    name: 'Sepatu Sneakers',
    price: 320000,
    category: 'Fashion',
    emoji: '👟',
  },
  {
    id: 5,
    name: 'Botol Minum',
    price: 75000,
    category: 'Kebutuhan',
    emoji: '🥤',
  },
  {
    id: 6,
    name: 'Keyboard Wireless',
    price: 210000,
    category: 'Elektronik',
    emoji: '⌨️',
  },
]

function Dashboard() {
  const [search, setSearch] = useState('')

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Judul halaman */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Selamat Datang di Lazada Mini
        </h1>

        <p className="mt-2 text-gray-600">
          Temukan berbagai produk yang kamu butuhkan.
        </p>
      </div>

      {/* Pencarian produk */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Cari produk..."
        className="w-full rounded-lg border bg-white p-3 outline-none focus:border-blue-500"
      />

      {/* Daftar produk */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* Pesan jika produk tidak ditemukan */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500">
          Produk tidak ditemukan.
        </p>
      )}
    </div>
  )
}

export default Dashboard