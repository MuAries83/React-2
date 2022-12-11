export const initialState = {
    basket: [],
}

const reducer = (state, action) => {

    switch(action.type) {
        case 'Agregar_al_carrito':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        default:
            return state;
    }
};

export default reducer;