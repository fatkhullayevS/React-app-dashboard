import { Link } from "react-router-dom"

const Layouts = ({ Heading, img }) => {
    return (
        <div >
            <Link to="/tikets" className="d-flex text-decoration-none ms-3 mb-5" href="#">
                <img src={img} />
                <p className="m-0 ms-3 link">{Heading}</p>
            </Link>
        </div>
    )
}

export default Layouts