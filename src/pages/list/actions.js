export const EDIT_ITEM = 'EDIT_ITEM';


export function editItem(item) {
    const { id, name, youtube } = item;
    return {
        type: EDIT_ITEM,
        id, name, youtube
    };
}
