import { useState } from 'react'
import './App.css'
import { CartProvider, useCart } from './context/CartContext'

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

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="product-card">
      <div className="product-image">{product.emoji}</div>

      <div className="product-info">
        <span className="category">{product.category}</span>

        <h3>{product.name}</h3>

        <p className="price">
          Rp {product.price.toLocaleString('id-ID')}
        </p>

        <button
  type="button"
  className="add-button"
  onClick={() => addToCart(product)}
  aria-label={`Tambah ${product.name} ke keranjang`}
>
  + Tambah ke Keranjang
</button>
      </div>
    </div>
  )
}

function ShoppingCart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    total,
    totalItems,
  } = useCart()

  return (
    <section className="checkout-section">
      <div>
        <h2>🛒 Keranjang Belanja</h2>

        {cart.length === 0 ? (
          <p>Keranjang masih kosong. Silakan pilih produk.</p>
        ) : (
          <div>
            <p>
              Kamu memiliki <strong>{totalItems}</strong> produk.
            </p>

            <div className="cart-items">
              {cart.map((product) => (
                <div className="cart-item" key={product.id}>
                  <span>
                    {product.emoji} {product.name}
                  </span>

                  <strong>
                    Rp {(product.price * product.quantity).toLocaleString('id-ID')}
                  </strong>

                  <div className="quantity-control">
                    <button
                      className="quantity-button"
                      onClick={() => decreaseQuantity(product.id)}
                    >
                      −
                    </button>

                    <span>{product.quantity}</span>

                    <button
                      className="quantity-button"
                      onClick={() => increaseQuantity(product.id)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Hapus
                  </button>
                </div>
              ))}
            </div>

            <button className="clear-button" onClick={clearCart}>
              Kosongkan Keranjang
            </button>
          </div>
        )}
      </div>

      <div className="checkout-total">
        <span>Total</span>
        <strong>Rp {total.toLocaleString('id-ID')}</strong>
      </div>

            <button
        className="checkout-button"
        disabled={cart.length === 0}
        onClick={() => {
          alert(
            `✅ Pesanan berhasil dibuat!\n\nTotal pembayaran: Rp ${total.toLocaleString('id-ID')}`
          )
          clearCart()
        }}
      >
        Checkout
      </button>
    </section>
  )
}
function Store() {
  const [search, setSearch] = useState('')
  const { cart } = useCart()

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Lazada Mini</h1>

          <div className="search-box">
            <input
              type="text"
              placeholder="Cari produk..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Cari produk"
            />

            <button type="button" aria-label="Cari produk">
  🔍
            </button>
          </div>

          <div className="cart">
            🛒 Keranjang

            <span className="cart-count">
              {cart.length}
            </span>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div>
            <p className="hero-small">
              SELAMAT DATANG DI
            </p>

            <h2>Lazada Mini</h2>

            <p>
              Belanja mudah, cepat, dan nyaman untuk kebutuhan
              sehari-hari.
            </p>

            <button className="shop-button">
              Mulai Belanja
            </button>
          </div>

          <div className="hero-icon">
            🛍️
          </div>
        </section>

        <section className="products-section">
          <div className="section-title">
            <div>
              <h2>Produk Pilihan</h2>

              <p>
                Pilih produk yang kamu butuhkan
              </p>
            </div>

            <strong>
              {cart.length} item di keranjang
            </strong>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="empty-search">
              <h3>Produk tidak ditemukan</h3>

              <p>
                Coba gunakan kata kunci lain.
              </p>
            </div>
          ) : (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
        </section>

        <ShoppingCart />
      </main>

      <footer>
        <p>
          © 2026 Lazada Mini — Prototipe React
        </p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <Store />
    </CartProvider>
  )
}

export default App