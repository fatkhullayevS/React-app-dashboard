
const Layouts = ({ Heading, img }) => {
    return (
        <div>
            <a className="d-flex text-decoration-none ms-3 mb-5" href="#">
                <img src={img} />
                <p className=" m-0 ms-3 link">{Heading}</p>
            </a>
        </div>
    )
}

export default Layouts