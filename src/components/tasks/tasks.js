import './tasks.css';
import TasksSelect from '../tasksSelect/TasksSelect';

const Tasks = () => {
    return (
        <div className="tasks mt-3">
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <h3 className="ms-4 mt-4 heading">Tasks</h3>
                    <p className="ms-4 desc">Today</p>
                </div>
                <a className="text-decoration-none" href="#" >
                    <p className="mt-5 me-3">View all</p>
                </a>
            </div>
            <div className='d-flex align-items-center justify-content-between '>
                <p className='opacity-50 ms-4 mt-4 p-0 m-0'>Create new task</p>
                <div class="ui vertical animated button me-2" tabindex="0">
                    <div class="hidden content">Create</div>
                    <div class="visible content">
                        <i class="plus icon"></i>
                    </div>
                </div>
            </div>
            <hr />
            <TasksSelect button="Urgent" Paragraf="Finish ticket update" />
            <TasksSelect button="New" Paragraf="Create new ticket example" />
            <TasksSelect button="Default" Paragraf="Update ticket report" />
        </div>
    )
}

export default Tasks