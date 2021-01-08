import React, {Component} from 'react';
import RowBlock from '../../modules/rowBlock';

export default class BookPage extends Component {

    state = {
        label: 'Список книг'
    }
    
    render() {
        return (
            <RowBlock 
                getData = {this.props.getData}
                numberPage = {this.props.numberPage}
                label = {this.state.label}/>
        )
    }
}