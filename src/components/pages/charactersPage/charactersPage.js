import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import ItemList from '../../modules/itemList';
import CharDetails from '../../modules/charDetails';
import RandomChar from '../../modules/randomChar';
import GotService from '../../../services/GotService';
import Error from '../../modules/errorMessage';


export default class CharactersPage extends Component {

    gotService = new GotService();

    state = {
        display: true,
        charId: null,
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    onToggleDisplay() {
        this.setState({display: !this.state.display})
    }

    onSelectChar = (id) => {
        this.setState({
            charId: id
        });
    }

    render() {
        const {display} = this.state;
        const randomDisplay = display ? <RandomChar/> : null;

        if (this.state.error) {
            return (
                <Container>
                    <Error/>
                </Container>
            )
        }

        return (
            <Container>
                <Row>
                    <Col lg={{size: 6, offset: 0}}>
                        {randomDisplay}
                        <Button 
                            color="primary" 
                            className="mb-2 float-right w-75"
                            onClick={() => this.onToggleDisplay()}
                        >
                            Изменить случайного персонажа
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList onSelectChar={this.onSelectChar} />
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={this.state.charId} />
                    </Col>
                </Row>
            </Container>
        )
    }
} 