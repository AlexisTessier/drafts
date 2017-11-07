'use strict';

const type = require('vanille-type');

const NotEmptyString = type('not empty string', s => type(String, s) && s.trim().length > 0);
const DashifiedString = type('dashified string', s => dashify(s) === s);

const NamedEntity = type({ name: NotEmptyString });

const Author = type('author', NamedEntity, {
	slug: s => NotEmptyString(s) && DashifiedString(s),
	celebrity: c => type.enum(['HIGH', 'MEDIUM', 'LOW'], c)
});

/**
 * @param { NamedEntity } author
 * @return { NotEmptyString } author-name
 */
function getAuthorName(author) {
	return NamedEntity(author).name;
}

const stephen = Author(createAuthor({
	name: 'Stephen King',
	celebrity: 'HIGH'
}));

const authorName = NotEmptyString(getAuthorName(stephen));

function createAuthor(data) {
	return Author({
		name: data.name,
		slug: dashify(data.name),
		celebrity: data.celebrity
	});
}

const AbsolutePath = type('absolute path', p => path.isAbsolute(p));
const ErrorFirstCallback = type('error first callback', Function, f => f.length >= 1, type.signature({err: Error}));

function readFile(filepath, callback) {
	AbsolutePath(filepath);
	ErrorFirstCallback(callback);
}