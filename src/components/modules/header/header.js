import React from 'react';
import { Row, Col, List, ListInlineItem } from 'reactstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <Row className="text-white clearfix mb-5">
            <Col className="float-left my-3" sm='6'>
                <h5 className="text-uppercase font-weight-bold">
                    <Link 
                        to='/'
                        className="text-white text-decoration-none" >
                        База знаний по вселенной "Игра Престолов"
                    </Link>
                </h5>
            </Col>
            <Col className="my-3" sm='6'>
                <List type="inline" className="float-right text-uppercase font-italic">
                    <ListInlineItem className="pr-3">
                        <Link 
                            to='/characters/'
                            className="text-white text-decoration-none" >
                            Персонажи
                        </Link>
                    </ListInlineItem>
                    <ListInlineItem className="pr-3">
                        <Link 
                            to='/houses/'
                            className="text-white text-decoration-none" >
                            Дома
                        </Link>
                    </ListInlineItem>
                    <ListInlineItem className="pr-3">
                        <Link 
                            to='/books/'
                            className="text-white text-decoration-none" >
                            Книги
                        </Link>
                    </ListInlineItem>
                </List>
            </Col>
        </Row>
    );
};

export default Header;