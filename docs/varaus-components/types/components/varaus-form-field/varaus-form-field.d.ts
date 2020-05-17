import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { IconName } from '../varaus-icon/Icons';
export interface Changed {
    name: string;
    value: string;
}
export declare class VarausFormField implements ComponentInterface {
    icon?: IconName;
    label: string;
    disabled: boolean;
    type: string;
    validationError: any;
    name: string;
    placeholder: string;
    value: string;
    changed: EventEmitter<Changed>;
    render(): any;
}
