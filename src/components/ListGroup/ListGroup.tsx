//import { useState } from "react";

import { Expense } from "../../Models/Expense";
//import ExpenseListItem from "../ExpenseListItem";

interface Props{
    items: Array<Expense>;
    sumAmount:number;
    
    onDeleteClicked: (index:number)=>void;
  //  onSelectItem: (index:number)=>void;
}



function ListGroup({items, sumAmount, onDeleteClicked}: Props) {
 


  return (
    <> 
   {  items.length===0 && <p>No Items Found</p> }


   <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table
          className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th
                scope="col"
                className="border-r px-6 py-4 dark:border-neutral-500">
                #
              </th>
              <th
                scope="col"
                className="border-r px-6 py-4 dark:border-neutral-500">
                First
              </th>
              <th
                scope="col"
                className="border-r px-6 py-4 dark:border-neutral-500">
                Last
              </th>
              <th scope="col" className="px-6 py-4">Handle</th>
            </tr>
          </thead>
          <tbody>
          {items.map((item,index) => {
            return (
            <tr key={index} className="border-b dark:border-neutral-500">
        <td
          className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
          {item.Description}
        </td>
        <td
          className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
          {item.amount}
        </td>
        <td
          className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
          {item.Category}
        </td>
        <td onClick={()=>onDeleteClicked(index)} className="whitespace-nowrap px-6 py-4"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded">Delete</button></td>
      </tr>


          )
          
          
            })}
           <tr  className="border-b dark:border-neutral-500">
        <td
          className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
         Total:
        </td>
        <td
          className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
          {sumAmount}
        </td>
        <td
          className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
    
        </td>
        <td  className="whitespace-nowrap px-6 py-4">
          </td>
      </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>



   {/*    <ul className="list-group">
        {items.map((item, index) => <li 
        //onClick={(e)=>{
           // handleClick(e,item,index);
          //  onSelectItem(index);
           // }} className={index==selectedIndex ?'list-group-item active':'list-group-item'} 
            key={index}> {item} </li>)}



      </ul> */}
    </>
  );
}
//     {props.items.map((item, index) => <li onClick={(e)=>{handleClick(e,item,index);}} className={index==selectedIndex ?'list-group-item active':'list-group-item'} key={item}>item: {item}  index: {selectedIndex}  bool: {index==selectedIndex?"t":"f"}</li>)}



export default ListGroup;

//          
 //       {/*   <ExpenseListItem item={item} key={index} onDeleteClicked={(index:number)=>onDeleteClicked(index:number)} ></ExpenseListItem>)} */}