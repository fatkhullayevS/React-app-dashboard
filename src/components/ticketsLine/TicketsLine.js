import "./ticketsLine.css"

const TicketsLine = ({ Heading, number }) => {
    return (
        <div>
            <div className="d-flex mt-4 align-items-center me-3 justify-content-between">
                <p className="ms-4 m-0 p-0 sarlavha">{Heading}</p>
                <p className="p-0 m-0 heading">{number}</p>
            </div>
            <hr />
        </div>
    )
}

export default TicketsLine