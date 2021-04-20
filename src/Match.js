import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://api.pandascore.co/lol/champions?token=RaA3rlgsKAJEGBV9YWTiuJueeJP-9DobS8KjMZpLJRwnge2LAn8`)
            .then(res => {
                const match = res.data;
                this.setState({ match });
            })
    }

    render() {
        return (
            <ul>
                { this.state.persons.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }
}