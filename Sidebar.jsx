import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-800 p-5 text-white">

      <h1 className="mb-8 text-xl font-bold">
        Lazada Mini
      </h1>

      <nav className="space-y-3">

        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `block rounded-lg px-4 py-3 ${
              isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            `block rounded-lg px-4 py-3 ${
              isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
            }`
          }
        >
          Kelola Produk
        </NavLink>

      </nav>

    </aside>
  )
}

export default Sidebar