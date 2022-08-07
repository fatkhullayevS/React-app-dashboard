import "./pageRigth.css"
import Header from "../header/header"
import Card from "../card/card"
import Diagramma from "../diagramma/diagramma"
import DiagrammaCard from "../diagrammaCard/DiagrammaCard"
import Tickets from "../tickets/Tickets"
import Tasks from "../tasks/tasks"
const PageRight = () => {
    return (
        <div>
            <div>
                <Header name="Overview" />
            </div>
            <div className="row">
                <div className="col-3">
                    <Card Number="60" Desc="Unresolved" />
                </div>
                <div className="col-3">
                    <Card Number="16" Desc="Overdue" />
                </div>
                <div className="col-3">
                    <Card Number="43" Desc="Open" />
                </div>
                <div className="col-3">
                    <Card Number="64" Desc="On hold" />
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <Diagramma />
                </div>
                <div className="col-4 mt-5">
                    <DiagrammaCard Time="449" Paragraf="Resolved" />
                    <DiagrammaCard Time="426" Paragraf="Received" />
                    <DiagrammaCard Time="33m" Paragraf="Average first response time" />
                    <DiagrammaCard Time="3h 8m" Paragraf="Average response time" />
                    <DiagrammaCard Time="94%" Paragraf="Resolution within SLA" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <Tickets />
                </div>
                <div className="col-6">
                    <Tasks />
                </div>
            </div>
        </div>
    )
}

export default PageRight