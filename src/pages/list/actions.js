export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';


export function editItem(item) {
    const { id, name, youtube } = item;
    return {
        type: EDIT_ITEM,
        id, name, youtube
    };
}

export function deleteItem(id) {
    return {
        type: DELETE_ITEM,
        id
    };
}
