import "./tickets.css"
import TicketsLine from "../ticketsLine/TicketsLine"

const Tickets = () => {
    return (
        <div className="ticket mt-3">
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <h3 className="ms-4 mt-4 heading">Unresolved tickets</h3>
                    <p className="ms-4 desc">Group: <strong>Support</strong></p>
                </div>
                <a className="text-decoration-none" href="#" >
                    <p className="mt-5 me-3">View details</p>
                </a>
            </div>
            <TicketsLine number="4238" Heading="Waiting on Feature Request" />
            <TicketsLine number="1005" Heading="Awaiting Customer Response" />
            <TicketsLine number="914" Heading="Awaiting Developer Fix" />
            <TicketsLine number="281" Heading="Pending" />
        </div>
    )
}

export default Tickets