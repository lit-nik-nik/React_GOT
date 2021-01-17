import React, {Component} from 'react';
import {Col, ListGroup, ListGroupItem}  from 'reactstrap';
import GotService from '../../../services/GotService';
import Spinner from '../spinner';
import Error from '../errorMessage'

export default class RandomItem extends Component {

    gotService = new GotService();

    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.randomChar();
        this.timerID = setInterval(this.randomChar, 15000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    componentDidCatch() {
        this.setState({
            error: true,
            loading: false
        })
    }

    onCharLoaded = (char) => {
        this.setState({char, loading: false})
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    randomChar = () => {
        this.gotService.getRandomCharacter()
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const {char, loading, error} = this.state;
        const errorMessage = error ? <Error /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = loading || error ? null : <View char = {char} />
        return (
            <Col className="p-3 mb-2 rounded bg-white">
                {errorMessage}
                {spinner}
                {content}
            </Col>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    return (
        <>
            <h4 className="text-center my-2">Случайный персонаж: {name}</h4>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="font-weight-bold">Пол </span>
                    <span>{gender}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="font-weight-bold">Дата рождения </span>
                    <span>{born}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="font-weight-bold">Дата смерти </span>
                    <span>{died}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="font-weight-bold">Культура </span>
                    <span>{culture}</span>
                </ListGroupItem>
            </ListGroup>
        </>
    )
}