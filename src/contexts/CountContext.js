import { createContext, useReducer } from "react";
const countReducer = (state, action) => {
    if (action.type === PLUS) {
        return {
            ...state,
            count: state.count + 1,
            price: state.price + state.initialPrice,
        };
    }
    if (action.type === MINUS) {
        return {
            ...state,
            count: state.count - 1,
            price: state.price - state.initialPrice,
        };
    }
    return state;
};
const PLUS = "PLUS"
const MINUS = "MINUS"

export const CountContext = createContext({
    count: 1,
    price: 1,
    initialPrice: 1,
})
const CountProvider = ({ onPriceChange, price, children }) => {

    const [count, dispatchCount] = useReducer(countReducer, { count: 1, price: price, initialPrice: price });
    console.log(count);
    function plusHandler() {
        dispatchCount({ type: PLUS });
        onPriceChange(price);
    }

    function minusHandler() {
        if (count.count > 0) {
            dispatchCount({ type: MINUS });
            onPriceChange(-price);
        }
    }
    const initState = {
        count: count.count,
        price: count.price,
        initialPrice: count.price,
        plusHandler,
        minusHandler
    }
    return (
        <CountContext.Provider value={initState}>
            {children}
        </CountContext.Provider>
    )
}
export default CountProvider