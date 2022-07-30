import PageLeft from "./PageLeft/PageLeft";
import PageRight from "./PageRight/PageRight";
import Diagramma from "./diagramma/diagramma";

const Main = () => {
    return (
        <div className="row">
            <div className="col-3">
                <PageLeft />
            </div>
            <div className="col-9">
                <PageRight />
            </div>
        </div>
    )
}

export default Main