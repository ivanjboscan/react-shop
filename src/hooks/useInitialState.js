import { useState } from 'react';

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = (indexValue) => {

        // const newCart = state.cart;

        // newCart.splice(keyIndex,1);

        // setState({
        //     ...state,
        //     cart: newCart
        // });

        // setState({
        //     ...state,
        //     cart: state.cart.filter(items => items.id !== payload.id)
        // });

        setState({
            ...state,
            cart: state.cart.filter((product, index) => index !== indexValue)
        });
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}


export default useInitialState;
