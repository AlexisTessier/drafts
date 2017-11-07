'use strict';

const {
	string,
	image
} = require('vizir/model');

/*-----------*/

const book = {};

book.type = {
	title: string({
		minLength: 2
	}).nullable().default('kjk'),

	author: 'string',
	editor: string,
	cover: model.image.nullable.default()
}

book.settings = {
	color: 'red',
	maxHeight: 120
}

book.state = (model, context, p) => {
	return model
}

book.view = state => {
	return `<h1>${state.title}</h1>`;
}

book.layout = state => {

}

book.viewController = state => [
	modifier('active')
]

module.exports = book;

/*-------------*/

function render(model, node) {

}

const book = Book_page({

}, node)

sync(book, Book_title('#node'))