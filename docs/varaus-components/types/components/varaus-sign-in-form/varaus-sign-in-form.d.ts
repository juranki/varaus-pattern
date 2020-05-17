import { ComponentInterface } from '../../stencil-public-runtime';
import { Changed } from '../varaus-form-field/varaus-form-field';
export declare class VarausSignInForm implements ComponentInterface {
    email: string;
    password: string;
    emailError: string;
    passwordError: string;
    loading: boolean;
    error: string;
    success: string;
    action: (email: string, password: string) => void;
    federatedAction: (provider: 'google' | 'facebook') => void;
    fieldValidations: {
        email: import("../../services/Validate").Validation[];
        password: import("../../services/Validate").Validation[];
    };
    validateField(field: string): void;
    validateAll(): boolean;
    submit(evt: Event): Promise<void>;
    handleChange(evt: CustomEvent<Changed>): void;
    render(): any;
}
