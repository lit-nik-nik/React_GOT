import React from 'react';
import { Row, Col, List, ListInlineItem } from 'reactstrap';

const Header = () => {
    return (
        <Row className="text-white clearfix">
            <Col className="float-left my-3" sm='6'>
                <h5 className="text-uppercase font-weight-bold">
                    <a className="text-white text-decoration-none" href="/">База знаний по вселенной "Игра Престолов"</a>
                </h5>
            </Col>
            <Col className="my-3" sm='6'>
                <List type="inline" className="float-right text-uppercase font-italic">
                    <ListInlineItem className="pr-3">
                        <a className="text-white text-decoration-none" href="/">Персонажи</a>
                    </ListInlineItem>
                    <ListInlineItem className="pr-3">
                        <a className="text-white text-decoration-none" href="/">Дома</a>
                    </ListInlineItem>
                    <ListInlineItem className="pr-3">
                        <a className="text-white text-decoration-none" href="/">Книги</a>
                    </ListInlineItem>
                </List>
            </Col>
        </Row>
    );
};

export default Header;