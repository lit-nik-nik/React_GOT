import React, {Component} from 'react';
import Error from '../../modules/errorMessage';
import RowBlock from '../../modules/rowBlock';

export default class CharactersPage extends Component {

    state = {
        label: 'Список персонажей',
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
            <RowBlock 
                getData = {this.props.getData}
                numberPage = {this.props.numberPage}
                label = {this.state.label}/>
        )
    }
} 