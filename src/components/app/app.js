import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../modules/header';
import {CharactersPage, HousePage, BookPage, BookDetails, Home} from '../pages';
import './app.css';

export default class App extends Component {
    
    render() {
        return (
            <Router>
                <div className='app'>
                    <Container fluid className="bg-dark">
                        <Container>
                            <Header />
                        </Container>
                    </Container>
                    <Container>
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