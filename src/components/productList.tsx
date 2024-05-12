import React, { useEffect, useState } from "react";
import Products from "~/services/api/products"

function productList() {
    const { products, fetchget } = Products();

    useEffect(() => {
        fetchget();
    }, []);

    return (
        <div className="container">
            <h1>product Data</h1>
            {products.map((product, i) => (
                <div key={i}>
                    <p>id: {product.id}</p>
                    <p>name: {product.name}</p>
                    <p>slug: {product.slug}</p>
                    <p>sku: {product.sku}</p>
                </div>
            ))}
        </div>
    );
}

export default productList;
