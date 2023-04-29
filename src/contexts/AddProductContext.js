import { createContext, useState, useReducer,useEffect } from "react";
export const addButtonState = [
    false,
    false,
    false,
    false,
];


const productItemReducer = (state, action) => {
    if (action.type === DELETE) {
        return {
            ...state,
            products: action.newProducts
        }
    }
    if (action.type === ADD_PRODUCT) {
        return {
            ...state,
            products: [...state.products, action.data]
        }
    }
}

const DELETE = 'DELETE'
const ADD_PRODUCT = 'ADD_PRODUCT'

export const AddProductContext = createContext({
    addButtonState,
});
const AddProductProvider = (props) => {
    const products = [{
        image: "https://thumb.tildacdn.com/tild3133-3533-4164-a637-666537633266/-/resize/552x/-/format/webp/image_9.png",
        title: "Product 1",
        price: 1,
        id: 0,
        count: 1
    },
    {
        image: "https://www.thermofisher.com/blog/food/wp-content/uploads/sites/5/2015/08/single_strawberry__isolated_on_a_white_background.jpg",
        title: "Product 2",
        price: 2,
        id: 1,
        count: 1

    },
    {
        image: "https://5.imimg.com/data5/WA/NV/LI/SELLER-52971039/apple-indian-500x500.jpg",
        title: "Product 3",
        price: 3,
        id: 2,
        count: 1


    }, {
        image: "https://cdn.britannica.com/84/188484-050-F27B0049/lemons-tree.jpg",
        title: "Product 4",
        price: 4,
        id: 3,
        count: 1

    }]

    const addButtonStateFromLocal = localStorage.getItem('AddBoolean');
    const addButtonStateArray = addButtonStateFromLocal ? JSON.parse(addButtonStateFromLocal) : Array(addButtonState.length).fill(false);
    const [addedProductState, setAddedProductState] = useState(addButtonStateArray);

    function trueAddHandler(el) {
        setAddedProductState(prevState => prevState.map((added, index) => index === el.id ? true : added));
    }

    function falseAddHandler(el) {
        setAddedProductState(prevState => prevState.map((added, index) => index === el.id ? false : added));
    }

    const productsFromLocal = localStorage.getItem('Products')
    const productsContainer = productsFromLocal ? JSON.parse(productsFromLocal) : []
    const [productItem, dispatchProductItem] = useReducer(productItemReducer, { products: productsContainer })


    function deleteProduct(id) {
        const newProducts = productItem.products.filter((el) => el.id !== id)
        dispatchProductItem({ type: DELETE, newProducts: newProducts })
    }


    function addNewProductHandler(data) {
        dispatchProductItem({ type: ADD_PRODUCT, data })

    }
    useEffect(() => {
        localStorage.setItem('Products', JSON.stringify(productItem.products));
    }, [productItem.products]);
    useEffect(() => {
        localStorage.setItem('AddBoolean', JSON.stringify(addedProductState));
    }, [addedProductState]);
    const initState = {
        addedProductState,
        trueAddHandler,
        falseAddHandler,
        productItem,
        deleteProject: deleteProduct,
        addNewProductHandler,
        products,
    };


    return (
        <AddProductContext.Provider value={initState}>
            {props.children}
        </AddProductContext.Provider>
    );
};

export default AddProductProvider;