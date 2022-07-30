import "./pageLeft.css"
import Line from "../Line/Line"
import Logo from "../../assets/img/logo.svg"
import Layouts from "../Layouts/layouts"
import Overview from "../../assets/img/overview.svg"
import Tickets from "../../assets/img/tickets.svg"
import Ideas from "../../assets/img/ideas.svg"
import Contacts from "../../assets/img/contacts.svg"
import Agents from "../../assets/img/agents.svg"
import Articles from "../../assets/img/articles.svg"
import Settings from "../../assets/img/settings.svg"
import Subscription from "../../assets/img/subscription.svg"

const PageLeft = () => {
    return (
        <div className="page-left">
            <div className="logo mb-5 ms-3">
                <img className="" src={Logo} />
                <span className="page-left__heading ms-2">Dashboard Kit</span>
            </div>
            <Layouts img={Overview} Heading="Overview" />
            <Layouts img={Tickets} Heading="Tickets" />
            <Layouts img={Ideas} Heading="Ideas" />
            <Layouts img={Contacts} Heading="Contacts" />
            <Layouts img={Agents} Heading="Agents" />
            <Layouts img={Articles} Heading="Articles" />
            <Line />
            <Layouts img={Settings} Heading="Settings" />
            <Layouts img={Subscription} Heading="Subscription" />
        </div>
    )
}

export default PageLeft