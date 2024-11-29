function TodoRowItem(props) { 
    // react only allows us to pass 1 parameter and  props/properties are th most standard way to do it.
    // props  has key value pairs
    return(
        <tr>
            <th scope="row">{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.assignedTo}</td>
        </tr>
    )
}

// this line allows us to use this component anywhere within our application
export default TodoRowItem