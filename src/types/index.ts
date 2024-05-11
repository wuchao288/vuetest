

export interface PersonExt{
    id:string,
    name:string,
    age:number,
    x?:string //可为空的类型
}

//export type Persons=Array<PersonExt>
export type Persons=PersonExt[]

//三种都可以