import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { Changed } from '../varaus-form-field/varaus-form-field';
export interface SignInAction {
    username?: string;
    password?: string;
    federationProvider?: string;
}
export declare class VarausSignInForm implements ComponentInterface {
    email: string;
    password: string;
    emailError: string;
    passwordError: string;
    loading: boolean;
    error: string;
    success: string;
    signedin: EventEmitter<SignInAction>;
    fieldValidations: {
        email: import("../../services/Validate").Validation[];
        password: import("../../services/Validate").Validation[];
    };
    validateField(field: string): boolean;
    validateAll(): boolean;
    submit(evt: Event): Promise<void>;
    federatedAction(e: MouseEvent, federationProvider: string): void;
    handleChange(evt: CustomEvent<Changed>): void;
    render(): any;
}
