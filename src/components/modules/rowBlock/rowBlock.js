import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../../modules/itemList';
import CharDetails from '../../modules/charDetails';

export default class RowBlock extends Component {

    state = {
        itemId: null
    }

    onSelectItem = (id) => {
        this.setState({
            itemId: id
        });
    }

    render() {

        return (
            <Row>
                <Col md='6' className='my-2'>
                    <ItemList 
                        onSelectItem={this.onSelectItem} 
                        getData = {this.props.getData}
                        numberPage = {this.props.numberPage}
                        label = {this.props.label}/>
                </Col>
                <Col md='6' className='my-2'>
                    <CharDetails itemId={this.state.itemId} />
                </Col>
            </Row>
        )
    }
}