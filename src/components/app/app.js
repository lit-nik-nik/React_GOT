import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from '../modules/header';
import CharactersPage from '../pages/charactersPage';

export default class App extends Component {
    render() {
        return (
            <>
                <Container>
                    <Header />
                </Container>
                <CharactersPage/>
            </>
        );
    }
};