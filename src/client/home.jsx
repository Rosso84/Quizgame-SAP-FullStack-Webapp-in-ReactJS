import React from "react";
import {Link} from 'react-router-dom';
import openSocket from "socket.io-client";

export class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: null,
            password: null,
            isLoggedIn: false,
            errorMsg: null
        };

        this.alertLoginMsg = this.alertLoginMsg.bind(this);
        this.onUserIdChange = this.onUserIdChange.bind(this);
        this.handleOnlineClick = this.handleOnlineClick.bind(this);
    }


    handleOnlineClick() {
        let currentUserId = this.state.userId;
        let currentPassword = this.state.password;
        let errorMsg = this.state.errorMsg;
        if (errorMsg !== undefined && errorMsg !== null){
            console.log('errormsg is undefined or null');
        } else {
            console.log('errormsg is not undefined or null');
        }

        if (currentUserId !== null && currentUserId !== undefined
            &&
            currentPassword !== null && currentPassword !== undefined) {
            this.socket.emit("userId", this.state.userId);
            this.setState({isLoggedIn: true});
        } else {
            alert('Enter a Valid username and password');
        }
    };

    alertLoginMsg() {
        alert('To play online you need to sign up!')
    }

    onUserIdChange(event) {
        this.setState({userId: event.target.value});
    };

    onPasswordChange(event) {
        this.setState({password: event.target.value})
    }

    componentDidMount() {
        this.socket = openSocket(window.location.origin);
    }

    renderWelcomeMessage() {
        return (
            <div>
                <h1>Welcome {this.state.userId}!<br/>You are now online</h1>
            </div>
        )
    }

    renderLogInMenu() {
        return (
            <div>
                <div>

                    <input type="text" className={"input-field"} value={this.state.userId} placeholder={"Username"}
                           onChange={this.onUserIdChange}/>
                    <br/>
                    <input type="text" className={"input-field"} value={this.state.password} placeholder={"Password"}
                           onChange={this.onPasswordChange}/>
                    <br/>
                    <button className="btn_submit" onClick={() => this.handleOnlineClick()}>Submit</button>
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
            )
        } else {
            return (
                this.renderWelcomeMessage()
            )
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
                            (<Link to={"/lobby"}>
                                <button className={"go-to-page-btn"}>online</button>
                            </Link>)
                            :
                            (<button className={"go-to-page-btn"} onClick={this.alertLoginMsg}>Online</button>)
                    }
                </div>
            </div>
        );
    }
}
