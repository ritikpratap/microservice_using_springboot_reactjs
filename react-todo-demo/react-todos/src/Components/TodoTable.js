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
              <TodoRowItem
                rowNumber = {props.todos[0].rowNumber}
                rowDescription = {props.todos[0].rowDescription}
                assignedTo = {props.todos[0].assignedTo}
              />
              <TodoRowItem
                rowNumber = {props.todos[1].rowNumber}
                rowDescription = {props.todos[1].rowDescription}
                assignedTo = {props.todos[1].assignedTo}
              />
              <TodoRowItem
                rowNumber = {props.todos[2].rowNumber}
                rowDescription = {props.todos[2].rowDescription}
                assignedTo = {props.todos[2].assignedTo}
              />
            </thead>
          </table>

    )
}

export default TodoTable