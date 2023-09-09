//Nombre del método de la acción
//Estp se envia al reducer

export function actualizarMouseEncima(mouseEncima) {
    return {
        type: 'ACTUALIZAR_MOUSE_ENCIMA',
        payload: mouseEncima
    }
}

export default actualizarMouseEncima;
