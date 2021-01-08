import React, {Component} from 'react';
import RowBlock from '../../modules/rowBlock';

export default class HousePage extends Component {

    state = {
        label: 'Список домов'
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