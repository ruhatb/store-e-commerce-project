import React from 'react';
import Product from './Product'; 

function ProductsPage() {
    const products = [
      { id: 1, title: 'Graphic Design', department: 'English Department', imageSrc: 'carditem1.jpg', originalPrice: '$16.48', discountedPrice: '$6.48' },
      // Diğer ürünler
    ];
  
    return (
      <div className="flex justify-center items-center pt-8">
        {/* Diğer kodlar */}
        <div className="flex flex-col gap-16 xl:gap-0 xl:flex xl:flex-row w-11/12 xl:flex-wrap xl:justify-between xl:gap-y-12">
          {products.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </div>
        {/* Diğer kodlar */}
      </div>
    );
  }
  
  export default ProductsPage;