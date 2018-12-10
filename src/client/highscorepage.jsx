import React from "react";
import {MyHomeLink} from "./my_home_link";

export class HighScorePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: null,
            correct: null,
            user: null
        }
    }

    render() {
        return (
            <div className={"container"}>
                <MyHomeLink/>
                <div>
                Best time
                </div>
                <div>
                Correct answers
                </div>

            </div>
        );
    }
}

