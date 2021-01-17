import React, {Component} from 'react';
import {Col, ListGroup, ListGroupItem}  from 'reactstrap';
import GotService from '../../../services/GotService';
import Spinner from '../spinner';
import Error from '../errorMessage';

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

export default class RandomItem extends Component {

    gotService = new GotService();

    state = {
        item: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.randomItem();
        this.timerID = setInterval(this.randomItem, 15000);
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

    onItemLoaded = (item) => {
        this.setState({item, loading: false})
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    randomItem = () => {
        this.props.getRandomData()
            .then(this.onItemLoaded)
            .catch(this.onError);
    }

    render() {
        const {item, loading, error} = this.state;

        if (error) {
            return (
                <Col className="p-3 mb-5 rounded bg-white">
                    <Error/>
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

        return (
            <Col lg="4">
                <div className="p-2 rounded bg-white">
                    <h4 className="text-center my-2">{this.props.label}: <br/> {item.name}</h4>
                    <ListGroup className="list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item})
                            })
                        }
                    </ListGroup>
                </div>
            </Col>
        );
    }
}