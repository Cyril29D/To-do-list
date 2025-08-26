import { useState } from "react"
import { nanoid } from "nanoid"
import ListItems from "./components/ListItems";
function App() {

  const [todolist, setTodoList] = useState("")
  const [todo, setTodo] = useState("")

  const [showValidation, setShowValidation] = useState(false)

function deleteTodo(id){
setTodoList(todolist.filter(todo => todo.id !== id))
}

  function handleSubmit(e){
  e.preventDefault()

  if(todo === ""){
    setShowValidation(true)
    return
  }
  setTodoList([...todolist, {id: nanoid(), content: todo}])
  setTodo("")
  setShowValidation(false)
}
  return (
  <div className='h-screen bg-emerald-950'>
    <div className="max-w-4xl mx-auto pt-20 px-6"> 
<h1 className="text-center text-slate-100 mb-4 text-7xl">To-do-list </h1>
    
    <form onSubmit={handleSubmit} className="mb-10">
      <label htmlFor="todo-item" className="text-amber-50">Que souhaites-tu faire ?</label>
      <input 
      value={todo}
      onChange={e => setTodo(e.target.value)}
      type="text" 
       className="mt-1 block w-full rounded bg-amber-50" />
    {showValidation && (
      <p className="text-red-400"> Vous n'avez rien ajouter 
      </p>
    )}
      <button  className="mt-4 py-2 px-2 bg-amber-50 rounded min-w-[115px] hover:bg-blue-600">Ajouter</button>
 
    </form>
    <ul>
      {todolist.length === 0 && (
        <li className="text-slate-50 text-md">pas d'items .....</li>
      )}

      {todolist.length > 0 &&
      todolist.map(item =>(
        <ListItems key={item.id} itemData={item} 
        deleteTodo={deleteTodo}/>
      ))}
    </ul>
    </div>
  </div>
  )
}

export default App
