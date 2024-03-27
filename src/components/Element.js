import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import ElementContext from "../context/ElementContext";

const Element = ({ handleDeleteElement }) => {
    const { elements } = React.useContext(ElementContext);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    if (shouldRedirect) {
        return <Navigate to={`/edit/${elements.id}`} />;
    }
    return (
        <dic className="container-fluid">
            <div className="row justify-content-between">
                    {!elements ? <p>No hay elementos</p> :
                        elements.map((elements, index) => {
                            return (
                                <div className="col">
                                    <div className="element-card ">
                                        <Card style={{ width: "18rem" }}>
                                            <Card.Body>
                                                <Card.Title className="text-center">{index +1}- {elements.name}</Card.Title>
                                                <Card.Text>{elements.description}</Card.Text>
                                                <Card.Text>{elements.responsible}</Card.Text>
                                                <Card.Text>{elements.priority}</Card.Text>
                                                <Card.Text>{elements.level}</Card.Text>
                                                <Card.Text>{elements.date}</Card.Text>
                                                <Button variant="primary" onClick={() => setShouldRedirect(true)}>Editar</Button>{" "}
                                                <Button variant="danger" onClick={() => handleDeleteElement(elements.id)}>Eliminar</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
        </dic>
    );
}

export default Element;