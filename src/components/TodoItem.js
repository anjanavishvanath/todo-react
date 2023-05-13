import React from "react";

export default function TodoItem(props){

    const [completed, setCompleted] = React.useState(false);

    function handleCheckboxChange(){
        setCompleted(!completed)
    }

    return (
        <div className="todo-item">
            <span onClick={handleCheckboxChange} style={{textDecoration: completed? "line-through": "none"}}>{props.txt}</span>
            <span onClick={props.del}>delete</span>
        </div>
    )
}