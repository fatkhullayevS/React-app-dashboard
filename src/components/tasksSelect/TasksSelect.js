import "./tasksSelect.css"

const Tasks = ({ Paragraf, button }) => {
    return (
        <div>
            <div>
                <div class="ui toggle checkbox ms-4 mt-2">
                    <input type="checkbox" name="public" />
                    <label>{Paragraf}</label>
                </div>
                <button className="btn btn-warning text-white button">{button}</button>
            </div>
            <hr />
        </div>
    )
}

export default Tasks