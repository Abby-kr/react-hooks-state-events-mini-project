import React,{useState} from "react";

function NewTaskForm({categories,onTaskFormSubmit }) {
  const newCategories = categories.filter((category) => category !== "All")
 const [item,setItem] = useState("")
 const [itemCategory,setItemCategory] = useState("")

 function handleSubmit(){
  const newTask = {
    category : itemCategory,
    text : item
  }
  onTaskFormSubmit(newTask)
 }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={item} onChange={e => setItem(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={e => setItemCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {newCategories.map((category) => 
          <option key={category} value={category} >{category}</option>
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
