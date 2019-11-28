
export type  ConstructorType<T> = new (...args:any[]) => T;

export interface ClassListStrategy{

    addClass(className: string, classPrototype: ConstructorType<Object> ): void;
    getClass(className: string):  ConstructorType<Object>;

}
