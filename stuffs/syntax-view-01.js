export type Publication = {
	title: string,
	cover: string
}

export const settings = {

}

export const view = ({
	title
}) => {
	return `<div><h1>${title}</h1></div>`
}

export const layout = Layout(
	require('./Publication-style'),

	style('.Publication-title', context => ({
		marginTop: 15,

		fontSize: remSize(
			context.sizeClass.get({
				widthCompact: 12
			}, 16)
		)

		hover: {
			color: context.component.primary ? 'orange' : 'blue'
		},

		'.Publication-title-main': {
			textDecoration: 'none'
		}
	}))

	component => font('title', {
		name: 'title',
		size: component.title.length > 16 ? 12 : 18
	}),

	grid('element-list', { columns: 28 })
		.linesOf('element', {
			numberOfElementPerLine: 3
			gutter: 2,
			verticalGutter: '4vw'
		})
);

export const viewController = UIViewController(
	View(view)
	// tagContent('title', {
	// 	selector: 'h1'
	// })
)

export const Publication = (state, node) => Component({Publication}, viewController, state, node);

export default Publication;

/*-------------------*/

export const customViewController = UIViewController(
	viewController,
	modifier('hola')
)

export const MyCustomPublication = (state, node)

/*-------------------*/

techtrendsFront = Publication({
	title: "Front"
}, context.dom.get('[data-node-id="techtrends-front"]'));

techtrendsFront({
	title: "Front-End"
})

context.persist(techtrendsFront, {
	title: "Front-End"
}).then((data, state, previousState) => {
	console.log('modification correctement enregistré')
}).catch((err, data, state, previousState) => {
	console.log('oups')
})

/*-------------------*/

function tagContent(stateKey, {
	selector, index = 0
}) {
	
	function behaviour(context, rootNode, state) {
		const tagNode = behaviour.$tagNode = behaviour.$tagNode || dom.getAll(selector, rootNode).item(index);

		return state ? (tagNode.textContent = state[stateKey]) : tagNode.textContent;
	}

	return {stateKey, behaviour};
}

function UIView(name, ...behaviours){
	if(typeof name !== 'string'){
		behaviours.unshift(name)
	}

	const view = {};

	behaviours.forEach(({
		stateKey, behaviour
	}) => {
		view[stateKey] = behaviour;
	});

	return (state, node, context = rootContext()) => {
		
	}
}

function createContext(context = {}, type = {rootContext}) {
	return Object.freeze(Object.assign({}, context, {
		type
	}));
}

function rootContext(context = {}) {
	return createContext(context, rootContext);
}

function Component(contextType, view, state, node, context = rootContext()){
	let componentName = name;
	if(typeof name !== 'string'){
		componentName = null, view = name, state = view, node = state, context = node || rootContext();
	}
	
	return state => view(state, node, createContext(context, Component));
}