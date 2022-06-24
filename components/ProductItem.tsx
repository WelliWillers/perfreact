import { memo, useState } from "react";
import { AddProductToWishListProps } from "./AddProductToWishList";
import dynamic from 'next/dynamic'

type ProductItemProps = {
    product: {
        id: number;
        price: number
        title: string;
        priceFormated: string;
    },
    onAddToWishList: (id: number) => void;
}

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
    return import('./AddProductToWishList').then(mod => mod.AddProductToWishList)
}, {
    loading: () => <span>Carredando...</span> 
})

function ProductItemComponent({product, onAddToWishList}: ProductItemProps){

    const [ isAddingToWishList, setIsAddingToWishList ] = useState(false)

    return (
        <div>
            {product.title} - <strong>{product.priceFormated}</strong>
            <button onClick={() => setIsAddingToWishList(true)}>Adicionar aos favoritos</button>
            {
                isAddingToWishList && (
                    <AddProductToWishList
                        onAddToWishList={() => onAddToWishList(product.id)}
                        onRequestClose={ () => setIsAddingToWishList(false) }
                    />
                )
            }
        </div>
    )
}


export const ProductItem = memo(ProductItemComponent, (prevProps, nextProp) => {
    return Object.is(prevProps.product, nextProp.product)
})