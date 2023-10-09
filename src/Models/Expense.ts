import { CategoryType } from "./Enums";


export class Expense{
    constructor(public Description:string, public amount: number, public Category:CategoryType){}


}