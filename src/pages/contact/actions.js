export const SUBMIT_FORM = 'SUBMIT_FORM';

export function submitForm(name, email) {
    return {
        type: SUBMIT_FORM,
        name, email
    };
}
