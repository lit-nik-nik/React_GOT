import React, {Component} from 'react';
import RowBlock from '../modules/rowBlock';
import ItemDetails, {Field} from '../modules/itemDetails';
import ItemList from '../modules/itemList';
import Error from '../modules/errorMessage';
import GotService from '../../services/GotService';

export default class HousePage extends Component {

    gotService = new GotService();

    state = {
        label: 'Список домов',
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
        
        const houseList = (
            <ItemList 
                onSelectItem={this.onSelectItem} 
                getAllData = {this.gotService.getAllHouses}
                numberPage = {Math.floor(Math.random() * 44)}
                label = {this.state.label}
                renderItem = {({name}) => `${name}`}/>
        )

        const houseDetails = (
            <ItemDetails 
                itemId={this.state.itemId} 
                getData={this.gotService.getHouse}>
                <Field field='name' label = 'Наименование'/>
                <Field field='region' label = 'Регион'/>
                <Field field='words' label = 'Мир'/>
                <Field field='titles' label = 'Глава Дома'/>
                <Field field='overlord' label = 'Повелитель'/>
                <Field field='ancestralWeapons' label = 'Родовое оружие'/>
            </ItemDetails>
        )
        
        return (
            <RowBlock left={houseList} right={houseDetails}/>
        )
    }
}