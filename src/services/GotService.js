export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }

    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error (`Could nor fetch ${this._apiBase}${url}, error ${res.status}`);
        }

        return await res.json();
    }

    getCharacter = async (id = 1) => {
        const res = await this.getResourse(`/characters/${id}`);
        return this._transformChar(res);
    }

    getHouse = async (id = 1) => {
        const res = await this.getResourse(`/houses/${id}`);
        return this._transformHouse(res);
    }

    getBook = async (id = 1) => {
        const res = await this.getResourse(`/books/${id}`);
        return this._transformBook(res);
    }

    getAllCharacters = async (page = 3, size = 10) => {
        const res = await this.getResourse(`/characters?page=${page}&pageSize=${size}`);
        return res.map(this._transformChar);
    }

    getAllHouses = async (page = 1, size = 10) => {
        const res = await this.getResourse(`/houses?page=${page}&pageSize=${size}`);
        return res.map(this._transformHouse);
    }

    getAllBooks = async (page = 1, size = 10) => {
        const res = await this.getResourse(`/books?page=${page}&pageSize=${size}`);
        return res.map(this._transformBook);
    }

    getRandomCharacter = async (number = 2119) => {
        const random = Math.floor(Math.random() * number + 15 );
        const res = await this.getResourse(`/characters/${random}`);
        return this._transformChar(res);
    }

    getRandomHouse = async (number = 444) => {
        const random = Math.floor(Math.random() * number);
        const res = await this.getResourse(`/houses/${random}`);
        return this._transformHouse(res);
    }

    getRandomBook = async (number = 12) => {
        let random = Math.floor(Math.random() * number);
        const res = await this.getResourse(`/books/${random}`);
        return this._transformBook(res);
    }

    _transformChar = (char) => {
        if (!char.gender) {
            char.gender = 'Данных нет';
        }

        if (!char.born) {
            char.born = 'Данных нет';
        }

        if (!char.died) {
            char.died = 'Данных нет';
        }

        if (!char.culture) {
            char.culture = 'Данных нет';
        }

        return {
            id: char.url.match(/\d+$/g).join(''),
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse = (house) => {
        return {
            id: house.url.match(/\d+$/g).join(''),
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook = (book) => {
        return {
            id: book.url.match(/\d+$/g).join(''),
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }
}