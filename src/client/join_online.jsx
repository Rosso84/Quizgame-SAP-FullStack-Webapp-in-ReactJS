import React from "react";
import {MyHomeLink} from "./my_home_link";
import openSocket from "socket.io-client";

export class JoinOnline extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedInUsers: ["Examplename1","exampleName2","exampleName3"]
        }

    }

    renderEmptyListOfPlayersOnline() {
        return (
            <div>
                <div className={"name-list-in-join-room"}> No one online</div>
            </div>
        );
    }

    renderPlayersOnline() {
        let users = this.state.loggedInUsers;
        let listOfUsers = users.map((user) =>
            <li key={user.toString()}>
                {user}
            </li>
        );
        return (
            <div>
                <div className={"name-list-in-join-room"}>
                    <p>Players in game</p>
                    <ul>{listOfUsers}</ul>
                </div>
            </div>
        );
    }

    DisplayListOfUsers() {
        let users = this.state.loggedInUsers;
        if (users !== null && users !== undefined) {
            return (
                this.renderPlayersOnline()
            );
        } else {
            return (
                this.renderEmptyListOfPlayersOnline()
            );

        }
    }

    render() {
        return (
            <div className={"container"}>
                <MyHomeLink/>
                <h2 className="title-lobby  ">Lobby</h2>
                    {this.DisplayListOfUsers()}
                <button className="start_Game-online-btn">Start game</button>
            </div>
        );
    }

}