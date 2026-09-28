import './Header.css';

function Header({ storeName, cartCount }) {
    return (
        <header>
            <h1>{storeName}</h1>

            <nav>
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>

            <div className="cart-container">
                <span className="cart-icon">🛒</span>
                <span className="cart-count">{cartCount}</span>
            </div>
        </header>
    );
}

export default Header;