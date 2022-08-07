import './person.css'


const Person = ({ name, day, userName, data, date, time, img }) => {
    return (
        <div className="person">
            <div className="ms-4 mt-4 d-flex align-items-center">
                <img src={img} alt="" width="44" height="44" />
                <div className="ms-4">
                    <h5 className="m-0 person__tom">{name}</h5>
                    <p className="m-0 person__tom-desc mt-4">{day}</p>
                </div>
                <div className="person-customer">
                    <h5 className="m-0 person__tom">{userName}</h5>
                    <p className="m-0 person__tom-desc mt-4">{data}</p>
                </div>
                <div className="person-data">
                    <h5 className="m-0 person__tom">{date}</h5>
                    <p className="m-0 person__tom-desc mt-4">{time}</p>
                </div>
                <div className="person-btn">
                    <button className="btn btn-outline-danger">High</button>
                </div>
            </div>
        </div>
    )
}

export default Person