'use client'
import React, {useState} from "react"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

export const ProductCart = ({product, onDeleteProduct}) => {
    const showDescriptionModal = () => {
        withReactContent(Swal).fire({
            title: product.title,
            text: product.description,
            icon: 'info'
        })
    }

    return (
        <>
            <div className="cart-product">
                <figure>
                    <img src={product.urlImage} alt={product.title} onClick={showDescriptionModal} />
                </figure>
                <div className="info-cart-product">
                    <span className="cantidad-producto-carrito">
                        {product.quantity}
                    </span>
                    <span className="titulo-producto-carrito">
                        {product.title}
                    </span>
                    <span className="precio-producto-carrito">
                        {product.price}
                    </span>
                </div>
                <img src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png" alt="cerrar" className="icon-close" onClick={() => onDeleteProduct(product)} />
            </div>
        </>
    )
}