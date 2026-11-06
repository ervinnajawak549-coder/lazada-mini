import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white shadow-md">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">

        <Link to="/" className="text-2xl font-bold">
          Lazada Mini
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link to="/" className="hover:text-blue-200">
            Beranda
          </Link>

          <Link to="/cart" className="hover:text-blue-200">
            Keranjang
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar