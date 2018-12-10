import React from "react";
import {Link} from 'react-router-dom';
import openSocket from "socket.io-client";

export class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: null,
            isLoggedIn: false
        };

        this.alertLoginMsg = this.alertLoginMsg.bind(this);
        this.onUserIdChange = this.onUserIdChange.bind(this);
        this.handleOnlineClick = this.handleOnlineClick.bind(this);
    }


    handleOnlineClick() {
        let currentUserId = this.state.userId;
        if (currentUserId !== null && currentUserId !== undefined){
            this.socket.emit("userId", this.state.userId);  //sends userID to Server through socket
            this.setState({isLoggedIn: true});
        }else {
            alert('Field cannot be emty.')
        }
    };

    alertLoginMsg(){
        alert('To play online you need to signup!')
    }

    onUserIdChange(event) {
        this.setState({userId: event.target.value});
    };

    componentDidMount() {
        this.socket = openSocket(window.location.origin);
    }

    renderWelcomeMessage() {
        return (
            <div>
                <h1>Welcome {this.state.userId}!</h1>
            </div>
        )
    }

    renderLogInMenu() {
        return (
            <div>
                <div>
                    <p>Choose a userName:</p>
                    <input type="text" className={"input-"} value={this.state.userId}
                           onChange={this.onUserIdChange}/>
                    <button className="btn_submit" onClick={() => this.handleOnlineClick()}>use</button>
                    <h2 className="choose_txt">Play offline</h2>
                </div>
            </div>
        );
    }

    renderGreeting() {
        const loggedIn = this.state.isLoggedIn;
        if (!loggedIn) {
            return (
                this.renderLogInMenu()
            );
        } else {
            return (
                this.renderWelcomeMessage()
            );
        }
    }

    render() {

        const loggedIn = this.state.isLoggedIn;
        return (
            <div className={"container"}>
                <div className={"menu-div"}>
                    {this.renderGreeting()}
                    <Link to={"/quizgame"}>
                        <button className={"go-to-page-btn"}>Play quizgame</button>
                    </Link>
                    <br/>
                    <Link to={"/highscore"}>
                        <button className={"go-to-page-btn"}>View highscores</button>
                    </Link>
                    <br/>
                    {
                        loggedIn ?
                            (<Link to={"/join_online"}>
                                <button className={"go-to-page-btn"}>online</button>
                            </Link>)
                            :
                            (<button className={"deactivated-btn"} onClick={this.alertLoginMsg} >Online</button>)
                    }
                </div>
            </div>
        );
    }
}
