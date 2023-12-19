import React, {ReactElement} from "react";
import {Stack} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {text} from "stream/consumers";

export interface BlockProps {
    blockTitle: string;
    blockId: string
    blockElement?: ReactElement | ReactElement[];
    dark?: boolean;
}
function Block(props: BlockProps) {
    var bgColor = "#FAF9F6"
    var textColor = "black"
    if (props.dark) {
        bgColor = "#212120"
        textColor = "#FAF9F6"
    }
    return (
        <Stack>
            <div style={{backgroundColor: bgColor, textAlign: "center", fontFamily: "Inconsolata"}}>
                <h1 id={props.blockId} style={{color: textColor, position: "relative", paddingTop: '25px'}}>{props.blockTitle}</h1>
                <Container>
                    <p style={{color: textColor}}>{props.blockElement}</p>
                </Container>
            </div>
        </Stack>
    );
}

export default Block;