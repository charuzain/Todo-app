import './App.css';

const todoList = [
  {
    id:1,
    title:"Watch React Tutorials"
  },
   {
    id:2,
    title:"Attend React classes"
  },
  {
    id:3,
    title:"Complete Assignments"
  }
]

function App() {
  return (
    <>
    <h1>Todo List</h1>
    <ul>
      {todoList.map((item)=>{return(
        <li key={item.id}>{item.title}</li>
      )})}
    </ul>   
    </>
  );
}

export default App;
