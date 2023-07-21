

function ListGroup(props) {
    return (
        <ul className="list-group-item">
            <li className="item d-flex">
                <input type="checkbox" className="checkbox"/>
                <h6 className="name-checkbox mb-0 ms-2">{props.name}</h6>
            </li>
        </ul>
    )
}

export default ListGroup;