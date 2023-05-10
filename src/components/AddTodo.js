

export default function AddTodo(props){
    
    return (
        <div className="add-todo">
            <input type="text" placeholder="Add item" className="input-todo" id="in"/>
            <button  onClick={props.handleClick} className="enter-todo">Enter item to list</button>
        </div>
    )
}