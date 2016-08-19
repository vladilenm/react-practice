export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';


export function openModal(options) {
    const { title, btnText, content } = options;
    return {
        type: OPEN_MODAL,
        title, btnText, content
    };
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    };
}

