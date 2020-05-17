export declare const svgs: Readonly<{
    signIn: any;
    signOut: any;
    menu: any;
    at: any;
    user: any;
    lock: any;
    unlock: any;
    calendar: any;
    spinner: any;
}>;
export declare type IconName = keyof typeof svgs;
export declare function getIcon(name: IconName): SVGElement;
