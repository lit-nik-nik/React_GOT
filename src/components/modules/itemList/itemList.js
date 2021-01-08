import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Col} from 'reactstrap';
import Spinner from '../spinner';
import Error from '../errorMessage';

export default class ItemList extends Component {

    state = {
        itemList: null,
        error: false
    }

    componentDidMount() {
        const {getData, numberPage} = this.props;
        getData(numberPage)
            .then((itemList) => {
                this.setState({itemList})
            })
            .catch(() => {this.onError()})
    }

    componentDidCatch() {
        this.setState({error: true, itemList: null})
    }

    onError(err) {
        this.setState({error: true, itemList: null})
    }


    renderList = (arr) => {
        const {onSelectItem} = this.props;

        return arr.map(item => {
            return (
                <ListGroupItem
                    tag="button"
                    action
                    key={item.id}
                    id={item.id}
                    onClick={() => onSelectItem(item.id)}
                >
                    {item.name}
                </ListGroupItem>
            )
        })
    }

    render() {
        const {itemList, error} = this.state;


        if (error) {
            <Error/>
        }

        if (!itemList) {
            return <Spinner/>
        }
        
        const content = this.renderList(itemList);

        return (
            <>
                <Col className="p-0 rounded bg-white">
                    <h4 className="py-2 m-0 rounded-top text-center bg-dark text-white">{this.props.label}</h4>
                    <ListGroup>
                        {content}
                    </ListGroup>                
                </Col>

            </> 
        );
    }
}