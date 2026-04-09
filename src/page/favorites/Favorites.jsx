import React, { useContext } from 'react'
import { CartContext } from '../../components/context/CartContext'
import PageTransition from '../../components/PageTransition'
import Product from '../../components/slideProducts/Product'
import { Link } from 'react-router-dom'
import { FaHeartBroken } from 'react-icons/fa'

function Favorites() {
    const {favorites} = useContext(CartContext)

  return (
    <PageTransition >
        <div className="category_products FavoritesPage">
            <div className="container">
                <div className="top_slide">
                    <h2>Your Favorites</h2>
                    <p>Keep track of the products you love most.</p>
                </div>

                {favorites.length === 0 ? (
                    <div className="empty_favorites">
                        <FaHeartBroken className="empty_icon" />
                        <h3>Your favorites list is empty</h3>
                        <p>You haven't added any products to your favorites yet. Start exploring our fresh products!</p>
                        <Link to="/" className="btn">Back to Shop</Link>
                    </div>
                ) : (
                    <div className="products">
                        {favorites.map(item => (
                            <Product item={item} key={item.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    </PageTransition>
  )
}

export default Favorites