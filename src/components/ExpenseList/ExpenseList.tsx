import React from "react";
import { CategoryType } from "../../Models/Enums";
import { Expense } from "../../Models/Expense";
import ListGroup from "../ListGroup/ListGroup";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const startingExpenses: Array<Expense> = [];

startingExpenses.push(new Expense("Moo", 55.01, CategoryType.Entertainment))
startingExpenses.push(new Expense("Goo", 15.50, CategoryType.Entertainment))
startingExpenses.push(new Expense("Loo", 100.99, CategoryType.Utilities))

const dropdownOptions = () => {
    const result = new Array<string>();
    result.push("select option");
    const values = Object.values(CategoryType);
    values.forEach((value) => {
        if (isNaN(Number(value))) {
            result.push(value);
        }
    });
    return result;
}

function ExpenseList() {
    const [expenses, setExpenses] = React.useState(startingExpenses);
    const [currentCategory, setCurrentCategory] = React.useState<CategoryType | undefined>(undefined);
    const [filteredExpenses, setFilteredExpenses] = React.useState(startingExpenses);
    const [amountTotal, setAmountTotal] = React.useState<number>(startingExpenses.reduce(function (sum, obj) { return sum + obj.amount; }, 0));
   // setFilteredExpenses(startingExpenses);

    /////////////////////////////////////////////////////////////////////////////
    // const filterByCategory = (newCategory: string|undefined) => {
    //     doFilterByCategory(newCategory,expenses);

    //     // let sumableExpenses=new Array(...expenses);
    //     // if ((newCategory == "select option")||(newCategory==undefined)) {
    //     //     setFilteredExpenses(sumableExpenses);
    //     // }
    //     // else {
    //     //     sumableExpenses=expenses.filter(expense => expense.Category.toString() == newCategory);
    //     //     setFilteredExpenses(
    //     //        sumableExpenses
    //     //     );
    //     // }
    //     // const result=sumableExpenses.reduce(function (sum, obj) { return sum + obj.amount; }, 0);
    //     // setAmountTotal(result);
    // }


    const doFilterByCategory = (newCategory: string|undefined,currentExpenses:Array<Expense>) => {
        let sumableExpenses=new Array(...currentExpenses);

        console.log('sumableExpenses',sumableExpenses)
        if ((newCategory == "select option")||(newCategory==undefined)) {
            console.log('sumableExpenses none',sumableExpenses)
   
            setFilteredExpenses(sumableExpenses);
        }
        else {
            sumableExpenses=expenses.filter(expense => expense.Category.toString() == newCategory);
            console.log('sumableExpenses has cat',sumableExpenses)
   
            setFilteredExpenses(
               sumableExpenses
            );
        }
        const result=sumableExpenses.reduce(function (sum, obj) { return sum + obj.amount; }, 0);
        setAmountTotal(result);
    }

    const handleDeleteClicked = (index: number) => {
        const updatedExpenses = new Array<Expense>();

        for (let i = 0; i < expenses.length; i++) {
            if (!(i === index)) {
                updatedExpenses.push(expenses[i]);
            }
        }
        setExpenses(updatedExpenses);

        doFilterByCategory(currentCategory?.toString(),updatedExpenses);
        //filterByCategory(currentCategory?.toString());

       // setExpenses(updatedExpenses);
        //////////////////////////////////////////////////////////
        // let sumableExpenses=new Array(...updatedExpenses);
        // if (currentCategory == null) {
        //     setFilteredExpenses(updatedExpenses);
        //     console.log('in delete - curcat cat  ', currentCategory);
        // }
        // else {
        //     sumableExpenses=updatedExpenses.filter(expense => expense.Category.toString() == currentCategory.toString());
        //     setFilteredExpenses(
        //         updatedExpenses.filter(expense => expense.Category.toString() == currentCategory.toString())
        //     );
        //     console.log('in delete - curcat cat  ', currentCategory);
        //     console.log('in delete - curcat cat w  ', CategoryType[currentCategory as keyof typeof CategoryType]);
        // }
        // const result=sumableExpenses.reduce(function (sum, obj) { return sum + obj.amount; }, 0);
        // setAmountTotal(result);
    }

    return <>
        <ExpenseForm onSubmitClicked={(expense) => {
            const updatedExpenses=new Array(...expenses);
            updatedExpenses.push(expense);
            /////////////////////////////////////////////////////
            setExpenses(updatedExpenses);


            doFilterByCategory(currentCategory?.toString(),updatedExpenses);
           // setFilteredExpenses(updatedExpenses);



            // if (currentCategory == null) {
            //     setFilteredExpenses(expenses);
            //     console.log('in onSubmitClicked - curcat cat  ', currentCategory);
            // }
            // else {
            //     setFilteredExpenses(
            //         expenses.filter(expense => expense.Category.toString() == currentCategory.toString())
            //     );
            //     console.log('in onSubmitClicked - curcat cat  ', currentCategory);
            //     console.log('in onSubmitClicked - curcat cat w  ', CategoryType[currentCategory as keyof typeof CategoryType]);
            // }
            // const result=filteredExpenses.reduce(function (sum, obj) { return sum + obj.amount; }, 0);
            // setAmountTotal(result);
        }
        }></ExpenseForm>

        <div className="flex flex-wrap -mx-3 mb-6 text-left">
            <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
                    Category
                </label>
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={currentCategory ?? ""}
                    onChange={(e) => {
                        let category:CategoryType|undefined=undefined;
                        if (e.target.value === "select option") {
                            category=undefined;
                            //setFilteredExpenses(expenses);
                        }
                        else {
                            category=CategoryType[e.target.value as keyof typeof CategoryType];
                          //  setCurrentCategory(CategoryType[e.target.value as keyof typeof CategoryType]);
                           // filterByCategory(CategoryType[e.target.value as keyof typeof CategoryType]);
                        }
                        setCurrentCategory(category);
                        doFilterByCategory(e.target.value,expenses);

                        // if (e.target.value === "select option") {
                        //     setCurrentCategory(null);
                        //     setFilteredExpenses(expenses);
                        // }
                        // else {
                        //     setCurrentCategory(CategoryType[e.target.value as keyof typeof CategoryType]);
                        //     filterByCategory(CategoryType[e.target.value as keyof typeof CategoryType]);
                        // }
                        // console.log('type: ', CategoryType[e.target.value as keyof typeof CategoryType]);
                        // console.log('cat: ', currentCategory);
                        // console.log('list: ', filteredExpenses);
                    }}
                >
                    {dropdownOptions().map((key, index) => (
                        <option key={index} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
            </div>
        </div>

        <ListGroup
            items={filteredExpenses} 
            sumAmount={amountTotal} 
            onDeleteClicked={handleDeleteClicked}
        />
    </>
}

export default ExpenseList

