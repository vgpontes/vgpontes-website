import React, {ReactElement} from "react";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

export interface BlockItemProps {
    itemHeading?: string;
    itemDate?: string;
    itemCompany?: string;
    itemLocation?: string;
    itemList?: ReactElement;

}
function Block(props: BlockItemProps) {
    return (
        <Container>
            <Row>
                <Col>
                    <h3 style={{textAlign: "left"}}><b>{props.itemHeading}</b></h3>
                </Col>
                <Col>
                    <h2 style={{textAlign: "right"}}>{props.itemDate}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4 style={{textAlign: "left"}}><i>{props.itemCompany}</i></h4>
                </Col>
                <Col>
                    <h4 style={{textAlign: "right"}}><i>{props.itemLocation}</i></h4>
                </Col>
            </Row>
            <Row style={{textAlign: "left", paddingLeft: "20px"}}>
                {props.itemList}
            </Row>
        </Container>
    );
}

export default Block;