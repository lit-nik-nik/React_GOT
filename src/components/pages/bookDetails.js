import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Col, Row, Media} from 'reactstrap';
import GotService from '../../services/GotService';
import ItemDetails, {Field} from '../modules/itemDetails';
import img from './books_1.png';

export default class BookDetails extends Component {

    gotService = new GotService();

    render() {
        return (
            <>
                <Row>
                    <Col>
                        <Link
                            to='/books/'
                            className="rounded text-white text-decoration-none text-center bg-danger py-2 px-5 d-block w-25 mb-2" >
                            Назад
                        </Link>
                    </Col>
                </Row>
                <Row className="bg-white rounded p-3">
                    <Col className="text-center">
                        <img src={img} alt="Books GOT" className="w-50"></img>
                    </Col>
                    <ItemDetails 
                        itemId={this.props.id}
                        getData={this.gotService.getBook}>
                        <Field field='name' label = 'Наименование'/>
                        <Field field='authors' label = 'Автор книги'/>
                        <Field field='numberOfPages' label = 'Кол-во страниц' />
                        <Field field='publisher' label = 'Публикация' />
                        <Field field='released' label = 'Дата издания' />
                    </ItemDetails>
                </Row>
            </>
        )
    }

}