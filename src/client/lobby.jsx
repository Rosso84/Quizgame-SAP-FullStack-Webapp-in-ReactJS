import React from "react";
import {MyHomeLink} from "./my_home_link";

export class Lobby extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedInUsers: []
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.fetchUsers = this.fetchUsers.bind(this);/*
        this.renderEmptyListOfPlayers = this.renderEmptyListOfPlayers(this);
        this.displayListOfUsers = this.displayListOfUsers(this);
        this.renderPlayersOnline = this.renderPlayersOnline(this);*/
    }

    componentDidMount() {
        this.fetchUsers();
        this.interval = setInterval(() => this.fetchUsers(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    /*
    * Most of this code is legally barrowed from Andrea Arcuri the lecturer*/
    async fetchUsers(){

        let queryUsers = "";
        if(this.state.loggedInUsers !== null && this.state.loggedInUsers.length !== 0){
            queryUsers = "?user=" + Math.max(...this.state.loggedInUsers.map(m => m.id));
        }

        const url = "http://localhost:8080/api/users" + queryUsers;

        let response;
        let payload;

        try {
            response = await fetch(url);
            payload = await response.json();
        } catch (err) {
            alert("Failed to connect to server: "+ err);
            return;
        }

        if (response.status === 200) {

            this.setState(
                prev => {
                    if(prev.loggedInUsers === null){
                        return {loggedInUsers: payload};
                    } else {
                        return {loggedInUsers: prev.loggedInUsers.concat(payload)};
                    }
                }
            );

        } else {
            alert("Error when connecting to server: status code "+ response.status);
        }
    }


    renderEmptyListOfPlayers() {
        return (
            <div>
                <div className={"no-users-online"}> No one online</div>
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

    displayListOfUsers() {
        let users = this.state.loggedInUsers;
        if (users !== null && users !== undefined) {
            return (
                this.renderPlayersOnline()
            );
        } else {
            return (
                this.renderEmptyListOfPlayers()
            );
        }
    }

    render() {
        return (
            <div className={"container"}>

                <MyHomeLink/>

                <h2 className="title-lobby">Lobby</h2>
                    {this.displayListOfUsers()}
                    {/*{this.renderPlayersOnline()}*/}
                <button className="start_Game-online-btn">Start game</button>
            </div>
        );
    }

}
/*

export default withRouter(Lobby);
*/

