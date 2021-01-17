import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Col} from 'reactstrap';
import GotService from '../../services/GotService';
import ItemDetails, {Field} from '../modules/itemDetails';

export default class BookDetails extends Component {

    gotService = new GotService();

    render() {
        return (
            <>
                <Col className="w-25 mb-2 ">
                    <Link
                        to='/books/'
                        className="rounded text-white text-decoration-none text-center bg-dark py-2 px-5 d-block w-100" >
                        Назад
                    </Link>
                </Col>
                <ItemDetails 
                    itemId={this.props.id}
                    getData={this.gotService.getBook}>
                    <Field field='name' label = 'Наименование'/>
                    <Field field='numberOfPages' label = 'Кол-во страниц' />
                    <Field field='publisher' label = 'Публикация' />
                    <Field field='released' label = 'Дата издания' />
                </ItemDetails>
            </>
        )
    }

}