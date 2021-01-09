import React, {Component} from 'react';
import Error from '../../modules/errorMessage';
import RowBlock from '../../modules/rowBlock';
import ItemDetails, {Field} from '../../modules/itemDetails';
import ItemList from '../../modules/itemList';

export default class CharactersPage extends Component {

    state = {
        label: 'Список персонажей',
        error: false,
        itemId: null
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    onSelectItem = (id) => {
        this.setState({
            itemId: id
        });
    }

    render() {
        if (this.state.error) {
            return (
                <Error/>
            )
        }

        const charList = (
            <ItemList 
                onSelectItem={this.onSelectItem} 
                getData = {this.props.getData}
                numberPage = {this.props.numberPage}
                label = {this.state.label}
                renderItem = {({name, gender}) => `${name} - ${gender}`}/>
        )

        const charDetails = (
            <ItemDetails itemId={this.state.itemId}>
                <Field field='gender' label = 'Пол'/>
                <Field field='born' label = 'Дата рождения'/>
                <Field field='died' label = 'Дата смерти'/>
                <Field field='culture' label = 'Культура'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={charList} right={charDetails}/>
        )
    }
} 