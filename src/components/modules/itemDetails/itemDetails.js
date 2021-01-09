import React, {Component} from 'react';
import {Col, ListGroup, ListGroupItem} from 'reactstrap';
import GotService from '../../../services/GotService';
import Error from '../errorMessage';
import Spinner from '../spinner';

const Field = ({item, field, label}) => {
    return (
        <ListGroupItem className="d-flex justify-content-between">  
            <span className="font-weight-bold">{label}</span>
            <span>{item[field]}</span>
        </ListGroupItem>
    )
}

export {
    Field
}

export default class ItemDetails extends Component {

    gotService = new GotService();

    state = {
        item: null,
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
        this.setState({error: true, item: null})
    }

    onError(err) {
        this.setState({error: true, item: null})
    }


    updateChar() {
        const {itemId} = this.props;

        if (!itemId) {
            return
        }

        this.gotService.getCharacter(itemId)
            .then((item) => {
                this.setState({item, loading: false})
            })
            .catch(() => {this.onError()})
    }

    render() {
        const {item, error, loading} = this.state;

        if (!item) {
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

        const {name} = item;

        return (
            <Col className="p-3 mb-5 rounded bg-white">
                <h4 className="text-center mb-4">{name}</h4>
                <ListGroup className="list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ListGroup>
            </Col>
        );
    }
}