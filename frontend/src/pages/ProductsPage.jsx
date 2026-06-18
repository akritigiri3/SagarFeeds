import PageHero from "../components/PageHero.jsx";
import { products } from "../content.js";

function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Comprehensive range of nutritionally balanced feed products designed for different livestock needs"
      />

      <div className="page-wrap tab-row section-pad">
        <button type="button">All Products</button>
        <button type="button">Poultry Feed</button>
        <button type="button">Livestock Feed</button>
      </div>

      <section className="page-wrap product-grid section-pad">
        {products.map((product) => (
          <article className="product-card hover-card" key={product.title}>
            <img src={product.image} alt={product.title} />
            <div>
              <h2>{product.title}</h2>
              <p>{product.text}</p>
              <ul>
                {product.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default ProductsPage;
