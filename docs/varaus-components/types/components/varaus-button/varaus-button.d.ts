import { ComponentInterface } from '../../stencil-public-runtime';
import { IconName } from '../varaus-icon/Icons';
export declare class VarausButton implements ComponentInterface {
    disabled: boolean;
    type: 'submit' | 'button' | 'reset';
    icon?: IconName;
    render(): any;
}
