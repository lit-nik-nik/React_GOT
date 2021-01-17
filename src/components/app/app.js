import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import GotService from '../../services/GotService';
import Header from '../modules/header';
import {CharactersPage, HousePage, BookPage, BookDetails, Home} from '../pages';
import RandomItem from '../modules/randomItem';
import './app.css';

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
        const randomDisplay = display ? <RandomItem/> : null;

        return (
            <Router>
                <div className='app'>
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
                        <Route path='/' exact component={Home} />
                        <Route path='/characters' component={CharactersPage} />
                        <Route path='/houses' component={HousePage} />
                        <Route path='/books' exact component={BookPage} />
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                                return <BookDetails id={id}/>
                        }} />
                    </Container>
                </div>
            </Router>
        );
    }
};