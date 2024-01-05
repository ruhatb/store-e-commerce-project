//mport { Filters, ProductsContainer } from "./ProductsList";
import ProductsContainer from "./ProductsList/ProductsContainer";
import Filters from "./ProductsList/Filters";
const Products = () => {
  return (
    <div>
      <Filters />
      <ProductsContainer />
    </div>
  );
};

export default Products;
