import React from 'react'

const Todo = (props) => {
console.log(props);
        return (
            <>
                {props.list.toDos.map((el) => {
                    return (
                        <div key={el} className="check-list">
                            {el}
                        </div>
                    )
                })}
            </>
        )
    
}

export default Todo