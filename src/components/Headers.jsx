"use client"
import { useState } from 'react';
import { ProductCart } from './ProductCart';
import { Cart } from './Cart';

export const Headers = ({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
}) => {
    const [active, setActive] = useState(false);

    const onDeleteProduct = product => {
        const results = allProducts.filter(
            item => item.id !== product.id
        );

        setTotal(total - product.price * product.quantity);
        setCountProducts(countProducts - product.quantity);
        setAllProducts(results);
    };

    const onCleanCart = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };

    return (
        <header>
            <h1>Tienda de Libros</h1>

            <div className='container-icon'>
                <div className='container-cart-icon'
                    onClick={() => {setActive(!active)}}
                >
                    <img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-black-shopping-cart-icon-for-free-black-shopping-cart.png" 
                    alt="carrito" 
                    className="icon-cart" />
                    
                    <div className='count-products'>
                        <span id='contador-productos'>{countProducts}</span>
                    </div>
                </div>

                <Cart allProducts={allProducts} total={total} onCleanCart={onCleanCart} active={active} onDeleteProduct={onDeleteProduct} />
            </div>
        </header>
    );
};
