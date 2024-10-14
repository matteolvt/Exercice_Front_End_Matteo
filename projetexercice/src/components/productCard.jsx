import "./productCard.css";
export function ProductCard() 
{
    return (
        
        <article>
            <div class="container">
                <div className="image">
                    <figure>
                        <img src="NIKE+DUNK+LOW.png" alt="Dunk low 2" />
                        <figcaption>Nike dunk low</figcaption>
                    </figure>
                </div>
                <div className="txt">
                    <h2>Nike Dunk Low</h2>
                    <section>
                        <p id="price">Price: €130</p>
                    </section>
                </div>
                <footer>
                    <button type="button">Add to cart</button>
                </footer>
            </div>
        </article>
    );
}
