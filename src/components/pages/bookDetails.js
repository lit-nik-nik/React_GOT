import React, {Component} from 'react';
import GotService from '../../services/GotService';
import ItemDetails, {Field} from '../modules/itemDetails';

export default class BookDetails extends Component {

    gotService = new GotService();

    render() {
        return (
            <ItemDetails 
                itemId={this.props.id}
                getData={this.gotService.getBook}>
                <Field field='name' label = 'Наименование'/>
                <Field field='numberOfPages' label = 'Кол-во страниц' />
                <Field field='publisher' label = 'Публикация' />
                <Field field='released' label = 'Дата издания' />
            </ItemDetails>
        )
    }

}