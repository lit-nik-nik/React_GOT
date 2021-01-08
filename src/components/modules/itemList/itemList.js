import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Col} from 'reactstrap';
import GotService from '../../../services/GotService';
import Spinner from '../spinner';
import Error from '../errorMessage';

export default class ItemList extends Component {

    gotService = new GotService();

    state = {
        charList: null,
        error: false
    }

    componentDidMount() {
        const randomPade = Math.floor(Math.random() * 40 + 15);
        this.gotService.getAllCharacters(randomPade)
            .then((charList) => {
                this.setState({charList})
            })
            .catch(() => {this.onError()})
    }

    componentDidCatch() {
        this.setState({error: true, charList: null})
    }

    onError(err) {
        this.setState({error: true, charList: null})
    }


    renderList = (arr) => {
        const {onSelectChar} = this.props;

        return arr.map(item => {
            return (
                <ListGroupItem
                    tag="button"
                    action
                    key={item.id}
                    id={item.id}
                    onClick={() => onSelectChar(item.id)}
                >
                    {item.name}
                </ListGroupItem>
            )
        })
    }

    render() {
        const {charList, error} = this.state;


        if (error) {
            <Error/>
        }

        if (!charList) {
            return <Spinner/>
        }
        
        const content = this.renderList(charList);

        return (
            <>
                <Col className="p-0 rounded bg-white">
                    <h4 className="pt-2 text-center">Список персонажей</h4>
                    <ListGroup>
                        {content}
                    </ListGroup>                
                </Col>

            </> 
        );
    }
}