import { useState } from 'react'

function ProductManagement() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Wireless Headset', price: 125000, category: 'Elektronik' },
    { id: 2, name: 'Smart Watch', price: 250000, category: 'Elektronik' },
    { id: 3, name: 'Tas Kuliah', price: 180000, category: 'Fashion' },
    { id: 4, name: 'Sepatu Sneakers', price: 320000, category: 'Fashion' },
    { id: 5, name: 'Botol Minum', price: 75000, category: 'Kebutuhan' },
    { id: 6, name: 'Keyboard Wireless', price: 210000, category: 'Elektronik' },
  ])

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Elektronik')
  const [editId, setEditId] = useState(null)

  // Tambah dan Update Produk
  const handleSubmit = (e) => {
    e.preventDefault()

    if (editId !== null) {
      setProducts(products.map((product) =>
        product.id === editId
          ? { ...product, name, price: Number(price), category }
          : product
      ))
    } else {
      const newProduct = {
        id: Date.now(),
        name,
        price: Number(price),
        category,
      }

      setProducts([...products, newProduct])
    }

    resetForm()
  }

  // Mengisi Formulir untuk Edit
  const handleEdit = (product) => {
    setEditId(product.id)
    setName(product.name)
    setPrice(String(product.price))
    setCategory(product.category)
  }

  // Hapus Produk
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id))

    if (editId === id) {
      resetForm()
    }
  }

  // Mengosongkan Formulir
  const resetForm = () => {
    setName('')
    setPrice('')
    setCategory('Elektronik')
    setEditId(null)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Kelola Produk
      </h1>

      {/* Form Tambah dan Edit */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-xl bg-white p-6 shadow"
      >
        <h2 className="text-xl font-bold">
          {editId !== null ? 'Edit Produk' : 'Tambah Produk'}
        </h2>

        <input
          type="text"
          placeholder="Nama Produk"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-lg border p-3"
        />

        <input
          type="number"
          placeholder="Harga Produk"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min="1"
          required
          className="w-full rounded-lg border p-3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border p-3"
        >
          <option>Elektronik</option>
          <option>Fashion</option>
          <option>Kebutuhan</option>
        </select>

        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
          >
            {editId !== null ? 'Simpan Perubahan' : 'Tambah Produk'}
          </button>

          {editId !== null && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-lg bg-gray-500 px-5 py-3 text-white"
            >
              Batal
            </button>
          )}
        </div>
      </form>

      {/* Tabel Produk */}
      <div className="overflow-x-auto rounded-xl bg-white shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">No</th>
              <th className="p-4">Nama Produk</th>
              <th className="p-4">Kategori</th>
              <th className="p-4">Harga</th>
              <th className="p-4">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="border-t">
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{product.name}</td>
                <td className="p-4">{product.category}</td>
                <td className="p-4">
                  Rp {product.price.toLocaleString('id-ID')}
                </td>
                <td className="space-x-2 p-4">
                  <button
                    type="button"
                    onClick={() => handleEdit(product)}
                    className="rounded-lg bg-yellow-500 px-3 py-2 text-white"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(product.id)}
                    className="rounded-lg bg-red-600 px-3 py-2 text-white"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductManagement