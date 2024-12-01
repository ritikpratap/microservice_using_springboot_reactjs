import TodoRowItem from './TodoRowItem';

function TodoTable(props) {
    return(
        <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Assinged to</th>
              </tr>
            </thead>
            <thead>
            {/* 
                adding below code to render all items in todos rather than doing it manually for each item.
                map function in javaScript is similar as forEach loop Java
            */}

              {props.todos.map(todo =>(
                <TodoRowItem 
                    rowNumber = {todo.rowNumber}
                    rowDescription = {todo.rowDescription}
                    assignedTo = {todo.assignedTo}
                    />
                  )
                )
              }
            </thead>
          </table>
    )
}

export default TodoTable