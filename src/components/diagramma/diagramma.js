import "./diagramma.css"

const Diagramma = () => {
    return (
        <div className="diagramma mt-5">
            <p className="heading ms-4 mt-4">Today’s trends</p>
            <div className="d-flex align-items-center ">
                <p className="desc ms-4 mt-2">as of 25 May 2019, 09:41 PM</p>
                <div className="d-flex align-items-center today">
                    <p className="paragraf">Today</p>
                    <p className="ms-3 paragraf">Yesterday</p>
                </div>
            </div>
        </div>
    )
}

export default Diagramma