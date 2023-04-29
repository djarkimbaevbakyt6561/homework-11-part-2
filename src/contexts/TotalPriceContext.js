import { createContext, useEffect, useReducer } from "react";
const totalPriceState = { totalPrice: 0 }
export const TotalPriceContext = createContext({
    totalPriceState
})
const totalPriceReducer = (state, action) => {
    if (action.type === CALCULATE) {

        return {
            ...state,
            totalPrice: state.totalPrice + action.price
        }
    }
    if (action.type === CALCULATE_IN_RENDER) {
        return {
            ...state,
            totalPrice: action.total
        }
    }
    return state
}
const CALCULATE = "CALCULATE"
const CALCULATE_IN_RENDER = "CALCULATE_IN_RENDER"
const TotalPriceProvider = (props) => {
    const [totalPrice, dispatchTotalPrice] = useReducer(totalPriceReducer, { totalPrice: 0 })
    function calculateTotalPriceHandler() {
        let total = 0;
        props.products.forEach((el) => {
            total += el.price;
        });
        calculateTotalPriceInRenderHandler(total)

    };
    function calculateTotalHandler(price) {
        dispatchTotalPrice({ type: CALCULATE, price: price })
    }
    function calculateTotalPriceInRenderHandler(total) {
        dispatchTotalPrice({ type: CALCULATE_IN_RENDER, total: total })
    }
    const initState = {
        totalPrice,
        calculateTotalHandler,
        calculateTotalPriceInRenderHandler,

    }
    useEffect(() => {
        calculateTotalPriceHandler();
    }, [props.products]);
    return (
        <TotalPriceContext.Provider value={initState}>
            {props.children}
        </TotalPriceContext.Provider>

    )
}
export default TotalPriceProvider