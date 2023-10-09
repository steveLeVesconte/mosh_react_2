import { Expense } from "../Models/Expense";

interface Props{
    item: Expense;
    index: number;
    onDeleteClicked: (index: number)=>void;
  //  onSelectItem: (index:number)=>void;
}

function ExpenseListItem({item}: Props) {
 
 
    //     const items =['New York',
    // 'San Francisco',
    // 'London',
    // 'Tokyo',
    // 'Paris','Dayton'];
    
    //let selectedIndex=-1;
    
    //const [selectedIndex,setSelectedIndex]=useState(-1)
    
    // function setSelectedIndex(index:number):void{
    //     selectedIndex   =index;
    // }
    
    
    //items=[];
    
    // if(items.length===0) return(<>
    // <h1>List</h1>
    // <p>No Items Found</p>
    // </>) ;
    
    // const getMessage=()=>{
    //     return items.length===0? <p>No Items Found.</p>:null;
    // }
    
    // const handleClick=(e:React.MouseEvent,item:string,index:number)=>{
    //    // selectedIndex=index;
    //    setSelectedIndex(index);
    //     console.log(`clicked ${item} ${index} ${selectedIndex}`,e);
    // }
    
      return (
        <><tr className="border-b dark:border-neutral-500">
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
        <td onClick={(index)=>onDeleteClicked(index)} className="whitespace-nowrap px-6 py-4"><button>Delete</button></td>
      </tr></>
      )
      }

      export default ExpenseListItem;