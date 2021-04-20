import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        matchs: []
    }

    componentDidMount() {
        axios.get(`https://api.pandascore.co/lol/tournaments?token=RaA3rlgsKAJEGBV9YWTiuJueeJP-9DobS8KjMZpLJRwnge2LAn8`)
            .then(res => {
                console.log(res.data);
                const matchs = res.data;
                this.setState({ matchs });
            })
    }
    render() {
        return (
            <div className="card">
                <ul>
                    { this.state.matchs.map(matchs => matchs.teams.map(match => <li key={match.id}>{match.acronym}</li>))}
                </ul>
            </div>
        );
    }
}

export default App;
