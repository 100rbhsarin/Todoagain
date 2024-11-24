import { useState, useEffect } from "react"
import "./TodoApp.css"

import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";




export const Todo =()=>{

const [task, setTask] = useState([])





const handleFormSubmit = (inputValue)=>{

    const {id, content, checked} = inputValue


    //tp check input field is empty or not
if(!content)return

// to check if the data is already exist or not
// if(task.includes(inputValue)) return
const ifTodoContentMatch = task.find(
    (curTask)=> curTask.content == content 
)
if(ifTodoContentMatch) return


setTask((prev)=> [...prev,
    // {id: id, content: content, checked: checked} //if key and value are same no need to write two time
    {id, content, checked}
])
 }

// console.log('hey')

// setInterval=(()=>{
//     const now = new Date()
//     const todayDate = now.toLocaleDateString()
//     const todayTime = now.toLocaleTimeString()
//     setDateTime(`${todayDate} - ${todayTime}`)
// }, 1000)





  const handleClearAll = ()=>{
    setTask([])
  }

  // to checked
  const handleCheckedTodo = (content)=>{

    const updatedTask = task.map((curTask)=>{
        if(curTask.content === content){
            return{...curTask, checked: !curTask.checked}
        }
        else{
            return curTask
        }
    })
    setTask(updatedTask)
  }


  // to delet

  const handleDeleteTodo = (value) => {
    console.log(value)
    console.log(task)

    // The filter method creates a new array, updatedTask, by including only the elements from the task array that do not match the value passed to the function.
//  1  The filter method iterates through each element in the task array.
//  2   For each element (curTask), it checks the condition curTask !== value.
// 3    If the condition is true, the element is included in the new array.
// 4    If the condition is false (i.e., the current task matches the task to be deleted), the element is excluded from the new array.

    const updatedTask = task.filter((curTask) => curTask.content !== value);

//     What it does:
// Updates the task state with the new array, updatedTask, effectively removing the task from the list.

// Why this works:
// React re-renders the component when the state is updated, so the UI automatically reflects the changes (the deleted task will no longer appear).
    setTask(updatedTask);
  };


    return( 
        <section className="todo-container">
     <header>
<h1>ToDo List</h1>
<TodoDate/>
</header>

<TodoForm onAddTodo={handleFormSubmit}/>


        <section className="myUnOrderList">
            <ul>
                {task.map((curTask)=>{
                    return(
                        <TodoList
                        key={curTask.id} // Use key here for React's reconciliation
                        task={curTask.content} // Pass task data
                        checked={curTask.checked}
                        onHandleDeleteTodo={handleDeleteTodo} // Pass delete handler
                        onHandleCheckedTodo={handleCheckedTodo}
                        
                      />
                    )

            })}

            </ul>
            </section>  

            <button className="clear" onClick={handleClearAll}>Clear</button>
                  </section>
    )

}

