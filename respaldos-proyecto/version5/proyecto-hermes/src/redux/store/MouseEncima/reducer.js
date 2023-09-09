//Inicializa el estado 
const estadoInicial = { mouseEncima: false };

export default (state = estadoInicial, action) => {
    switch (action.type) {
        case 'ACTUALIZAR_MOUSE_ENCIMA':
            return {
                ...state,
                mouseEncima: !action.payload
            };

        default:
            return state;
    }
}

export const selectActiveMouseEncima = state => state.mouseEncimaReducer.mouseEncima;