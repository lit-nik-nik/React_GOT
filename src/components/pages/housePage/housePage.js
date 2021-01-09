import React, {Component} from 'react';
import RowBlock from '../../modules/rowBlock';
import ItemDetails from '../../modules/itemDetails';
import ItemList from '../../modules/itemList';
import Error from '../../modules/errorMessage';

export default class HousePage extends Component {

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
                getData = {this.props.getData}
                numberPage = {this.props.numberPage}
                label = {this.state.label}
                renderItem = {({name}) => `${name}`}/>
        )

        const houseDetails = (
            <ItemDetails 
                itemId={this.state.itemId} />
        )
        
        return (
            <RowBlock left={houseList} right={houseDetails}/>
        )
    }
}