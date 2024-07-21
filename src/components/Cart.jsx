'use client'
import React, {useState} from "react"
import { ProductCart } from "./ProductCart"

export const Cart = ({allProducts, total, onCleanCart, active, onDeleteProduct}) => {
    return (
        <>
            <div
                    className={`container-cart-products ${
                        active ? '' : 'hidden-cart'
                    }`}
                >
                    {allProducts.length ? (
                        <>
                            <div className="row-product">
                                {allProducts.map(product => (<ProductCart product={product} onDeleteProduct={onDeleteProduct} />))}
                            </div>
                            <div className="cart-total">
                                <h3>Total:</h3>
                                <span className="total-pagar">${total}</span>
                            </div>
                            <button className="btn-clear-all" onClick={onCleanCart}>Variar Carrito</button>
                        </>
                    ) : (
                        <p className='cart-empty'>El carrito está vacío</p>
                    )}
                </div>
        </>
    )
}