import React, {Component} from 'react';
import ItemList from '../modules/itemList';
import Error from '../modules/errorMessage';
import GotService from '../../services/GotService';
import {withRouter} from 'react-router-dom';

class BookPage extends Component {

    gotService = new GotService();

    state = {
        label: 'Список книг',
        error: false
    }
    
    componentDidCatch() {
        this.setState({error: true})
    }

    render() {
        if (this.state.error) {
            return (
                <Error/>
            )
        }
        
        return (
            <ItemList 
                onSelectItem={(itemId) => {
                    this.props.history.push(itemId)
                }} 
                getAllData = {this.gotService.getAllBooks}
                numberPage = {1}
                label = {this.state.label}
                renderItem = {({name}) => `${name}`}/>
        )
    }
}

export default withRouter(BookPage)