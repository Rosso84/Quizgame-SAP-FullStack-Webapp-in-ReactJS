import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import openSocket from 'socket.io-client';
import {Home} from "./home";
import {Quizgame} from "./quizgame";
import {HighScorePage} from "./highscorepage";
import {JoinOnline} from "./join_online";
import {NotFound} from "./not_found";


export class App extends React.Component {




    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/quizgame" component={Quizgame}/>
                        <Route exact path="/highscore" component={HighScorePage}/>
                        <Route exact path="/join_online" component={JoinOnline}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));