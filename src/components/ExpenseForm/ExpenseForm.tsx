//import React from 'react'
//import { FormEvent, useState } from "react";
//import {FieldValues, useForm} from "react-hook-form";
import { useForm } from "react-hook-form";
import { CategoryType } from "../../Models/Enums";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Expense } from "../../Models/Expense";
//import { FormEvent } from "react";
//import { Expense } from "../../Models/Expense";


const schema = z.object({
  description: z.string().min(3),
  amount: z.number({ invalid_type_error: 'Amount is requred.' }).min(0.01),
  category: z.string().min(1)
})


interface FormData {
  description: string;
  amount: number;
  category: CategoryType;
}


interface Props {
  onSubmitClicked: (expense: Expense) => void;
}

const ExpenseForm = ({ onSubmitClicked }: Props) => {
  const { register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log('data: ', data);
    const newExpense: Expense = new Expense(data.description, data.amount, data.category as CategoryType);
    onSubmitClicked(newExpense);
  }

  return (
    <form className="w-full max-w-lg text-left my-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
            Description
          </label>
          <input
            {...register("description")}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="description" type="text" placeholder="description" />
          {errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}
          {/*    {errors.description?.type==='minLength' && <p className="text-red-500 text-xs italic">Description must be at least 3 characters.</p>}
    */}
        </div>

        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="amount" type="text" placeholder="0.00" />
          {errors.amount && <p className="text-red-500 text-xs italic">{errors.amount.message}</p>}

        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            {...register("category")}
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            <option>select option</option>
            <option>Entertainment</option>
            <option>Utilities</option>
            <option>Groceries</option>
          </select>
          {/*  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="category" type="text" placeholder="category"/> */}
          {/*       <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6 text-center">
        <div className="w-full px-3">
          <button disabled={!isValid} className="shadow bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
            Sign Up
          </button>
        </div>
      </div>

      {/*     <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Category
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>select option</option>
          <option>Entertainment</option>
          <option>Utilities</option>
          <option>Groceries</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div> */}





      {/*     <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Sign Up
      </button>
    </div>
  </div> */}


    </form>
  )
}

export default ExpenseForm
