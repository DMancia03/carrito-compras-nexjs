'use client'
import React, {useState} from "react"
import { ProductCart } from "./ProductCart"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

export const Cart = ({allProducts, total, onCleanCart, active, onDeleteProduct}) => {
    const confirm_onCleanCart = () => {
        withReactContent(Swal).fire({
            html: '<p>¿Estás seguro de vaciar tu <b>carrito de compras</b>?</p>',
            //text: '',
            icon: 'warning',
            showCancelButton: true
        }).then((result) => {
            if(result.isConfirmed){
                onCleanCart()
            }
        });
    }
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
                            <button className="btn-clear-all" onClick={confirm_onCleanCart}>Vaciar Carrito</button>
                        </>
                    ) : (
                        <p className='cart-empty'>El carrito está vacío</p>
                    )}
                </div>
        </>
    )
}