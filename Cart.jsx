
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    total
  } = useCart()

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold text-gray-800">
        Keranjang Belanja
      </h1>

      {cart.length === 0 ? (
        <div className="rounded-xl bg-white p-6 shadow">
          <p className="text-gray-600">
            Keranjang belanja masih kosong.
          </p>

          <Link to="/" className="mt-4 inline-block text-blue-600">
            Kembali Belanja
          </Link>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto rounded-xl bg-white shadow">
            <table className="w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4">Produk</th>
                  <th className="p-4">Harga</th>
                  <th className="p-4">Jumlah</th>
                  <th className="p-4">Subtotal</th>
                  <th className="p-4">Aksi</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-4">{item.name}</td>

                    <td className="p-4">
                      Rp {item.price.toLocaleString('id-ID')}
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button onClick={() => decreaseQuantity(item.id)}>
                          -
                        </button>

                        {item.quantity}

                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                      </div>
                    </td>

                    <td className="p-4">
                      Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">Total Belanja</h2>

            <p className="mt-2 text-2xl font-bold text-blue-600">
              Rp {total.toLocaleString('id-ID')}
            </p>

            <Link
              to="/checkout"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
            >
              Lanjut Checkout
            </Link>
          </div>
        </>
      )}

    </div>
  )
}

export default Cart