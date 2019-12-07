
export type  ConstructorType<T> = new (...args:any[]) => T;

export interface ClassListStrategy{

    addClass(className: string, classPrototype: ConstructorType<Object> ): void;
    getClassConstructor(className: string):  ConstructorType<Object>;
    getClass(className: string):any;

}
