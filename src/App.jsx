function App() {


  return (
  <div className='h-screen bg-emerald-950'>
    <div className="max-w-4xl mx-auto pt-20 px-6"> 
<h1 className="text-3xl text-slate-100 mb-4">La To-do Liste </h1>
    
    <form className="mb-10">
      <label htmlFor="todo-item" className="text-amber-50">Que souhaites-tu faire ?</label>
      <input type="text" className="mt-1 block w-full rounded bg-amber-50" />
      <button type="button" className="mt-4 py-2 px-2 bg-amber-50 rounded min-w-[115px]">Ajouter</button>
    </form>
    <ul>
      
    </ul>
    </div>
  </div>
  )
}

export default App
