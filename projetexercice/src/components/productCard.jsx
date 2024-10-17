import "./css/productCard.css";

export function ProductCard({ image, name, description, price, addToCart }) { 
    return (
        <article>
            <div className="container">
                <div className="image">
                    <figure>
                        <img src={image} alt={name} />
                        <figcaption>{name}</figcaption>
                    </figure>
                </div>
                <div className="txt">
                    <h2>{description}</h2>
                    <section>
                        <p id="price">Price: {price}€</p>
                    </section>
                </div>
                <footer>
                    <button type="button" onClick={() => addToCart({ id: Math.random(), name, price, image })}>Add to cart</button>
                </footer>
            </div>
        </article>
    );
}

export default ProductCard;
