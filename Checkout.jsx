import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

function Checkout() {
  const { cart, total, clearCart } = useCart()

  const [nama, setNama] = useState('')
  const [alamat, setAlamat] = useState('')
  const [pembayaran, setPembayaran] = useState('Transfer Bank')
  const [pesananBerhasil, setPesananBerhasil] = useState(false)

  const handleCheckout = (e) => {
    e.preventDefault()

    if (cart.length === 0) {
      return
    }

    clearCart()
    setPesananBerhasil(true)
  }

  if (pesananBerhasil) {
    return (
      <div className="rounded-xl bg-white p-8 text-center shadow">
        <h1 className="mb-4 text-2xl font-bold text-green-600">
          Pesanan Berhasil!
        </h1>
        <p>Terima kasih telah berbelanja di Lazada Mini.</p>
        <Link to="/" className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white">
          Kembali ke Beranda
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Checkout
      </h1>

      {cart.length === 0 ? (
        <div className="rounded-xl bg-white p-6 shadow">
          <p>Keranjang belanja masih kosong.</p>
          <Link to="/cart" className="mt-4 inline-block text-blue-600">
            Kembali ke Keranjang
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          <form onSubmit={handleCheckout} className="space-y-4 rounded-xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">Informasi Pembeli</h2>

            <div>
              <label className="mb-2 block">Nama Lengkap</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
                className="w-full rounded-lg border p-3"
                placeholder="Masukkan nama"
              />
            </div>

            <div>
              <label className="mb-2 block">Alamat Pengiriman</label>
              <textarea
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                required
                className="w-full rounded-lg border p-3"
                placeholder="Masukkan alamat lengkap"
              />
            </div>

            <div>
              <label className="mb-2 block">Metode Pembayaran</label>
              <select
                value={pembayaran}
                onChange={(e) => setPembayaran(e.target.value)}
                className="w-full rounded-lg border p-3"
              >
                <option>Transfer Bank</option>
                <option>COD</option>
                <option>E-Wallet</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
            >
              Buat Pesanan
            </button>
          </form>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-bold">Ringkasan Pesanan</h2>

            {cart.map((item) => (
              <div key={item.id} className="mb-3 flex justify-between gap-3">
                <span>{item.name} x {item.quantity}</span>
                <span>
                  Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                </span>
              </div>
            ))}

            <hr className="my-4" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-blue-600">
                Rp {total.toLocaleString('id-ID')}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Checkout