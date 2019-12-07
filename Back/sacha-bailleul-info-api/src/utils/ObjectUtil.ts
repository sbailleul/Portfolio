export class ObjectUtil{

    public static isComplete(obj : any): boolean{

        if(!obj){
            return false;
        }
        return Object.keys(obj).every(key=> obj[key]);
    }

    public static findObjectValue<T>(obj: T, searchVal: any): any {

        if(obj && searchVal){
            return Object.keys(obj).find(key => this.getObjectValueByKey(obj, key) == searchVal)
        }
        return undefined;
    }

    public static getObjectValueByKey<T>(obj: T, key: any): any{

        if(!key || !obj){
            return undefined;
        }
        return obj[key as keyof typeof obj];
    }
}
