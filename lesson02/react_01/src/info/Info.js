


function Info(props) {
    return (
        <div className="list-group-item-info d-flex justify-content-between w-100">
            <div className="d-flex">
                <p className="number-task me-2">{props.total}</p>
                <span className="name-task">task left!</span>
            </div>
            <div className="info-text">MindX todolist</div>
        </div>
    )
}
export default Info;