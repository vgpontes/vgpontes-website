import React, {ReactElement} from "react";
import {Stack} from "react-bootstrap";
import Container from "react-bootstrap/Container";
// @ts-ignore
import Fade from 'react-reveal/Fade'

export interface BlockProps {
    blockTitle: string;
    blockId: string
    blockElement?: ReactElement | ReactElement[];
    dark?: boolean;
}
class Block extends React.Component<BlockProps> {
    constructor(props:BlockProps) {
        super(props);
    }
    render() {
        var bgColor = "#FAF9F6"
        var textColor = "black"
        if (this.props.dark) {
            bgColor = "#212120"
            textColor = "#FAF9F6"
        }
        return (
            <Stack>
                <div style={{backgroundColor: bgColor, textAlign: "center", fontFamily: "Inconsolata"}}>
                    <Fade bottom opposite>
                        <h1 id={this.props.blockId} style={{color: textColor, position: "relative", paddingTop: '25px'}}>{this.props.blockTitle}</h1>
                        <Container>
                            <p style={{color: textColor}}>{this.props.blockElement}</p>
                        </Container>
                    </Fade>
                </div>
            </Stack>
        );
    }
}

export default Block;