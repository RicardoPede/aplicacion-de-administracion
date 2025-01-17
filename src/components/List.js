import React, { useContext } from "react";
import _ from "lodash";
import Element from "./Element.js";
import ElementContext from "../context/ElementContext.js";

const List = () => {

    const { elements, setElements } = useContext(ElementContext);
    
    const handleDeleteElement = (id) => {
        const newElements = _.filter(elements, (element) => element.id !== id);
        setElements(newElements);
    }

    return (
        <React.Fragment>
            <div className="list-container">
                    {elements.length > 0 ? (
                        elements.map((element) => (
                            <Element key={element.id} element={element} handleDeleteElement={handleDeleteElement} />
                        ))
                    ) : (
                        <p className="text-center">No hay elementos.</p>
                    )}
                </div>
        </React.Fragment>
    );
}

export default List;