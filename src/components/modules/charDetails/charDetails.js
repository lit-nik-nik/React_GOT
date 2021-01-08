import React, {Component} from 'react';
import {Col, ListGroup, ListGroupItem} from 'reactstrap';
import GotService from '../../../services/GotService';
import Error from '../errorMessage';
import Spinner from '../spinner';

export default class CharDetails extends Component {

    gotService = new GotService();

    state = {
        char: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateChar();
            this.setState({loading: true})
        }
    }

    componentDidCatch() {
        this.setState({error: true, char: null})
    }

    onError(err) {
        this.setState({error: true, char: null})
    }


    updateChar() {
        const {itemId} = this.props;

        if (!itemId) {
            return
        }

        this.gotService.getCharacter(itemId)
            .then((char) => {
                this.setState({char, loading: false})
            })
            .catch(() => {this.onError()})
    }

    render() {
        const {char, error, loading} = this.state;

        if (!char) {
            return (
                <Col className="p-3 mb-5 rounded bg-white">
                    <h4>Выберите персонажа</h4>
                </Col>

            )
        }

        if (loading) {
            return (
                <Col className="p-3 mb-5 rounded bg-white">
                    <Spinner/>
                </Col>
            )
        }

        if (error) {
            return ( 
                <Col className="p-3 mb-5 rounded bg-white">
                    <Error/>
                </Col>
            )
        }

        const {name, gender, born, died, culture} = char;

        return (
            <Col className="p-3 mb-5 rounded bg-white">
                <h4 className="text-center mb-4">{name}</h4>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="d-flex justify-content-between">  
                        <span className="font-weight-bold">Пол</span>
                        <span>{gender}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">  
                        <span className="font-weight-bold">Дата рождения</span>
                        <span>{born}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">  
                        <span className="font-weight-bold">Дата смерти</span>
                        <span>{died}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">  
                        <span className="font-weight-bold">Культура</span>
                        <span>{culture}</span>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        );
    }
}