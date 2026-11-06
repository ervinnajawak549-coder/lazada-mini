import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="rounded-xl bg-white p-5 shadow hover:shadow-lg">
      <div className="mb-4 text-center text-5xl">
        {product.emoji}
      </div>

      <h2 className="text-lg font-bold">
        {product.name}
      </h2>

      <p className="text-sm text-gray-500">
        {product.category}
      </p>

      <p className="my-3 text-xl font-bold text-blue-600">
        Rp {product.price.toLocaleString('id-ID')}
      </p>

      <div className="flex gap-2">
        <Link
          to={`/product/${product.id}`}
          state={product}
          className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-center text-white hover:bg-blue-700"
        >
          Detail
        </Link>

        <button
          onClick={() => addToCart(product)}
          className="flex-1 rounded-lg bg-green-600 px-3 py-2 text-white hover:bg-green-700"
        >
          + Keranjang
        </button>
      </div>
    </div>
  )
}

export default ProductCard