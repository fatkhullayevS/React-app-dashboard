import Header from "../header/header"
import PageLeft from "../PageLeft/PageLeft"
import Sort from "../../assets/img/sort.svg"
import Filter from "../../assets/img/filter.svg"
import "./tikets.css"
import Person from "../person/Person"
import { useNavigate } from "react-router-dom"

import Mat from "../../assets/img/matt.svg"
import Tom from "../../assets/img/tom.png"
import Robert from "../../assets/img/robert.svg"

const Tickets = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="row">
                <div className="col-3">
                    <PageLeft />
                </div>
                <div className="col-9">
                    <Header name="Tickets" />
                    <button onClick={() => navigate(-1)} className="d-flex align-items-center btn shadow p-3 mb-5 bg-body rounded">
                        <i class="fa-solid fa-left-long"></i>
                        <p className="m-0 p-0 ms-1">Back</p>
                    </button>
                    <div className="tiket-page ">
                        <div className="d-flex justify-content-between">
                            <h2 className="tikets-page__heading ms-4 mt-4">All tickets</h2>
                            <div className="d-flex mt-4">
                                <img className="me-1" src={Sort} alt="Bu rasmku ko'rmayapsizlarmi" width="16" height="16" />
                                <p className="p-0 m-0 me-3">Sort</p>
                                <img className="me-1" src={Filter} alt="Bu rasmku ko'rmayapsizlarmi" width="16" height="16" />
                                <p className="p-0 m-0 me-5">Filter</p>
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <p className="ms-4 mt-4 tiket-desc">Ticket details</p>
                            <p className="mt-4 customer-desc">Customer name</p>
                            <p className="mt-4 date-desc">Date</p>
                            <p className="mt-4 Priority-desc">Priority</p>
                        </div>
                        <Person img={Tom} time="6:30 PM" date="May 26, 2019" data="on 24.05.2019" userName="Tom Cruise" day="Updated 1 day ago" name="Contact Email not Linked" />
                        <Person img={Mat} time="8:00 AM" date="May 26, 2019" data="on 24.05.2019" userName="Matt Damon" day="Updated 1 day ago" name="Adding Images to Featured Posts" />
                        <Person img={Robert} time="7:30 PM" date="May 26, 2019" data="on 24.05.2019" userName="Robert Downey" day="Updated 1 day ago" name="When will I be charged this month?" />
                        <Person img={Mat} time="5:00 PM" date="May 25, 2019" data="on 24.05.2019" userName="Christian Bale" day="Updated 2 day ago" name="Payment not going through" />
                        <Person img={Mat} time="4:00 PM" date="May 25, 2019" data="on 24.05.2019" userName="Henry Cavil" day="Updated 2 day ago" name="Unable to add replies" />
                        <Person img={Mat} time="2:00 PM" date="May 25, 2019" data="on 23.05.2019" userName="Chris Evans" day="Updated 3 day ago" name="Downtime since last week" />
                        <Person img={Mat} time="11:30 AM" date="May 25, 2019" data="on 22.05.2019" userName="Sam Smith" day="Updated 4 day ago" name="Referral Bonus" />
                        <Person img={Mat} time="1:00 PM" date="May 24, 2019" data="on 21.05.2019" userName="Steve Rogers" day="Updated 6 day ago" name="How do I change my password?" />
                        <hr />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tickets