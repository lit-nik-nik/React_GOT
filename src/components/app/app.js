import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import GotService from '../../services/GotService';
import Header from '../modules/header';
import CharactersPage from '../pages/charactersPage';
import BookPage from '../pages/bookPage';
import HousePage from '../pages/housePage';
import RandomChar from '../modules/randomChar';

export default class App extends Component {
    gotService = new GotService();

    state = {
        display: true
    }

    onToggleDisplay() {
        this.setState({display: !this.state.display})
    }

    render() {
        const {display} = this.state;
        const randomDisplay = display ? <RandomChar/> : null;

        return (
            <>
                <Container>
                    <Header />
                </Container>.
                <Container>
                    <Row>
                        <Col lg={{size: 6, offset: 0}}>
                            {randomDisplay}
                            <Button 
                                color="dark" 
                                className="mb-2 float-right w-75"
                                onClick={() => this.onToggleDisplay()}
                            >
                                Изменить случайного персонажа
                            </Button>
                        </Col>
                    </Row>
                    <CharactersPage 
                        getData = {this.gotService.getAllCharacters}
                        numberPage = {Math.floor(Math.random() * 40 + 3)}/>
                    <BookPage
                        getData = {this.gotService.getAllBooks}
                        numberPage = {1}/>
                    <HousePage
                        getData = {this.gotService.getAllHouses}
                        numberPage = {Math.floor(Math.random() * 44)}/>
                </Container>
                
            </>
        );
    }
};