export const validations = {
    required: (s) => (!s ? 'requiredField' : null),
    email: (s) => (/\S+@\S+\.\S+/.test(s) ? null : 'invalidEmail')
};
export function validate(value, ...validations) {
    for (const validation of validations) {
        const r = validation(value);
        if (r) {
            return r;
        }
    }
    return null;
}
