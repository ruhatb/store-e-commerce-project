import { Button, Option, Select } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import { IoGrid } from "react-icons/io5";
import { MdOutlineChecklist } from "react-icons/md";

import carditem1 from "../../assets/ProductCard/carditem1.png";
import carditem2 from "../../assets/ProductCard/carditem2.png";
import carditem3 from "../../assets/ProductCard/carditem3.png";
import carditem4 from "../../assets/ProductCard/carditem4.png";
import { ProductsGrid } from "../../components/ProductsList";

function Products({
  id,
  imageSrc,
  title,
  department,
  originalPrice,
  discountedPrice,
}) {
  return (
    <div>
      <ProductsGrid />
    </div>
  );
}

export default Products;
