export declare type Validation = (s: string) => string;
export declare const validations: {
    [id: string]: Validation;
};
export declare function validate(value: string, ...validations: Validation[]): string;
