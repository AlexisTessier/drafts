'use strict';

const path = require('path');

const cleanquirer = require('cleanquirer');

const cli = cleanquirer({
	name: 'cli',
	options: [{
		name: 'optionName',
		description: 'a description',
		hook(value = 'defaultValue', next) {
			next(null, 'value')
		}
	}],
	commands: [
		path.join(__dirname, 'commands/*.js'),
		'module/simple-action.js',
		{
			name: 'enter',
			extends: cli.immersiveMode
		},
		{
			name: 'action',
			action(){
				return new Promise()
			}
		},
		{
			name: 'other',
			help: 'do something',
			options: [{
				name: 'optionName'
			}],
			action(options, done) {
				console.log('make action');
			}
		}, {
			name: 'default',
			alias: 'exec'
		}
	],
	validCases: ['camelCase', 'snake_case', 'kebab-case']
});

module.exports = cli;

require('../cli')().then( command => {
	console.log(`${command.name} done`);
}).catch(err => {throw err});