import React, {Component} from 'react';
import {Row, Col, Button} from 'reactstrap';
import GotService from '../../services/GotService';
import RandomItem, {Field} from '../modules/randomItem';

export default class Home extends Component {

    gotService = new GotService();
    
    state = {
        display: true
    }

    onToggleDisplay() {
            this.setState({display: !this.state.display});
    }

    render() {
        const {display} = this.state;
        let randomChar, randomBook, randomHouse;
        if (display) {
            randomChar = <RandomItem
                            getRandomData = {this.gotService.getRandomCharacter}
                            label = 'Случайный персонаж'>
                            <Field field='gender' label = 'Пол'/>
                            <Field field='born' label = 'Дата рождения'/>
                            <Field field='died' label = 'Дата смерти'/>
                            <Field field='culture' label = 'Культура'/>
                        </RandomItem>;
            randomBook = <RandomItem
                            getRandomData = {this.gotService.getRandomBook}
                            label = 'Случайная книга'>
                            <Field field='name' label = 'Наименование'/>
                            <Field field='numberOfPages' label = 'Кол-во страниц' />
                            <Field field='publisher' label = 'Публикация' />
                            <Field field='released' label = 'Дата издания' />
                        </RandomItem>;
            randomHouse = <RandomItem
                            getRandomData = {this.gotService.getRandomHouse}
                            label = 'Случайный дом'>
                            <Field field='name' label = 'Наименование'/>
                            <Field field='region' label = 'Регион'/>
                            <Field field='words' label = 'Мир'/>
                            <Field field='titles' label = 'Глава Дома'/>
                            <Field field='overlord' label = 'Повелитель'/>
                            <Field field='ancestralWeapons' label = 'Родовое оружие'/>
                        </RandomItem>;
        }
        
        return (
            <>
                <Row className="mb-2">
                    <Col className="p-2 rounded bg-white text-center">
                        <h4 className="mb-2 text-underline">Добро пожаловать на сайт по вселенной "Игра Престолов"</h4>
                        <p>Данный сайт использует для данных информацию размещенную на API - <a href="https://www.anapioficeandfire.com/" target="_blank" rel="noreferrer">An API of Ice And Fire</a></p>
                    </Col>
                </Row>
                <Row>
                    <Button 
                        color="dark" 
                        className="mb-2 float-right w-100"
                        onClick={() => this.onToggleDisplay()}
                    >
                        Обновить
                    </Button>
                    {randomChar}
                    {randomHouse}
                    {randomBook}
                </Row>
            </>
        )
    }
}