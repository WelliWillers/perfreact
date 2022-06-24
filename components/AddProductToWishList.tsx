export interface AddProductToWishListProps {
    onAddToWishList: () => void;
    onRequestClose: () => void;
}

export function AddProductToWishList({onAddToWishList, onRequestClose}: AddProductToWishListProps) {
    return (
        <div>
            Deseja adicionar aos favoritos?
            <button onClick={onAddToWishList}>Sim</button>
            <button onClick={onRequestClose}>Não</button>
        </div>
    )
}