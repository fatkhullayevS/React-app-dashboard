import Search from "../../assets/img/search.svg"
import Subscription from "../../assets/img/new.svg"
import Profil from "../../assets/img/photo.svg"

const Header = (props) => {
    return (
        <div className="d-flex mb-5 page-rigth align-items-center justify-content-between">
            <h1 className="mt-2 page-right__heading">{props.name}</h1>
            <div className="nofigation d-flex align-items-center">
                <div>
                    <img src={Search} width="15" height="15" />
                    <img className="ms-3" src={Subscription} width="16" height="16" />
                </div>
                <div className="d-flex align-items-center ms-5">
                    <p className="p-0 m-0">Jones Ferdinand</p>
                    <img className="ms-3" src={Profil} />
                </div>
            </div>
        </div>
    )
}

export default Header