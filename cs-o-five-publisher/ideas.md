cs-o-five

Installer wizard creator
	-> clone the installer project repository and write the installer.config.json file
	-> run the installer project main script (electron app to ensure a maximum compatibility ?)
	-> create an electron app installer wizard with some default components sets

Installer wizard
	-> use of docker ?
	-> redis configuration ?

	-> install git and nvm 
	-> install and use the required version of node

	-> ask the project name and directory
	-> ask the components sets to use (and display those from installer.config.json file)
	-> ask datas from the installer.config.json

	-> init a node project
	-> install the dependencies (nosg)
	-> install the nosg components set
	-> install the cs-o-five components set
	-> install the components sets
	-> create the main component set