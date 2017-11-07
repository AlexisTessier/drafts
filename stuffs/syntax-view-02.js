'use strict';

const scroll_view = {};

scroll_view.settings = {
	resistance: 0.8
}

scroll_view.view = state => pug(`
	.scroll_view()
		.scroll_view-inner-wrapper
			for element in elements
				.scroll_view-element element
`, state);

scroll_view.view.layout = scrollViewLayout('scroll_view');

scroll_view.view.controllers = [
	state => {
		if(state.events.active)
			
	},
	onInit((view, state) => {
		view
	})
]


module.exports = scroll_view

/*----------*/

'use strict'

const Node = {}

Node.settings = {
	color: 'red'
}

Node.type = {
	id: 'number',
	title: 'string',
	slug: 'string',
	children: type.arrayOf(Node)
}

Node.view = state => pug(`
html
	head
		title= rootNode.title+(isRoot ? '' : ' - '+title)
	body
		each child in children
			+view(child, 'section')
`, state)

// view, settings, type, state
// view.settings
// view.type
// view.state

Node.view.state = (context, node) => {
	return {
		title: node.title,
		rootNode: context.rootNode,
		isRoot: !context.parentNode
	}
}

Node.view_widget = state => pug(`
	.Node_widget
		h1.Node_widget-title= title
`, state)

/*---------*/

//node/home.js
module.exports = {
	type: 'Node',
	title: 'Home',
	children: [{
		title: 'Introduction'
	}, {
		title: 'À propos'
	}]
};

//settings/routes.js
const home = require('node/home');

function fetchBook({
	id
}, filter) {
	return new Promise((resolve, reject) => {
		mongo.fetch({type:'book', id}).then(book => {
			resolve(book);
		});
	});
}

module.exports = {
	'/': view(home),
	'/widget': view(home, 'widget'),
	'/book/{id}': view(fetchBook),
	'widget/book/{id}': view(createFetch({
		type: 'book', by: 'id', fields: ['title', 'cover']
	}), 'widget')
}

// fetch the node
// look the node type ('Node' by default)
// look the matching MVC component
// check the type and node correctness (according to the view)
// pass the node to the selected view

//static / dynamic / reactive