import React, { useContext, useState } from "react";
import FormElement from "./FormElement.js";
import { Navigate } from "react-router-dom";
import ElementContext from "../context/ElementContext.js";

const Add = () => {
    // const navigate = useNavigate();

    const { elements, setElements } = useContext(ElementContext);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    const handleOnSubmit = (element) => {
        console.log(element);
        setElements([...elements, element]);
        setShouldRedirect(true);
    }

    if (shouldRedirect) {
        return <Navigate to="/" />;
    }

    return (
        <React.Fragment>
            <FormElement handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
}

export default Add;