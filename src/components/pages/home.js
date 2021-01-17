import React, {Component} from 'react';
import GotService from '../../services/GotService';

export default class Home extends Component {

    gotService = new GotService();

    render() {
        return (
            <>
                <h1>Hello</h1>
            </>
        )
    }
}