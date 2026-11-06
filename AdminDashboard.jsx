function AdminDashboard() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard Admin
        </h1>

        <p className="mt-2 text-gray-500">
          Selamat datang di halaman pengelolaan Lazada Mini.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-gray-500">Total Produk</h2>
          <p className="mt-2 text-3xl font-bold text-blue-600">
            6
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-gray-500">Kategori Produk</h2>
          <p className="mt-2 text-3xl font-bold text-green-600">
            3
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-gray-500">Status Toko</h2>
          <p className="mt-2 text-2xl font-bold text-green-600">
            Aktif
          </p>
        </div>

      </div>

    </div>
  )
}

export default AdminDashboard