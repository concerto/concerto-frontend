Concerto Frontend
=================
This gem contains the client-side code that runs on Concerto display machines.
The latest version of the gem can be found on [RubyGems](https://rubygems.org/gems/concerto_frontend).

Installation 
------------
The concerto-frontend gem should be installed by default with the latest Concerto releases. If there seems to be anything wrong, follow these steps to install the gem. 

1. Concerto server administrators can visit the "Plugins" page in the "Admin" section of the navigation bar
2. Click on the "New Plugin" button
3. With "RubyGems" selected as the source, type "concerto_frontend" into the Gem Name text field. 
4. Click install plugin, then restart your web server as needed to install the new dependencies.

Development
-----------
The concerto-frontend uses web components and the latest [Polymer 1.0](https://www.polymer-project.org/1.0/) library.

#### Dependencies
1. [node js](https://nodejs.org/) 
2. [bower](http://bower.io/) to install Polymer and web component libraries. 
3. [grunt](http://gruntjs.com/) to run JavaScript tasks

#### Installation
1. git clone https://github.com/concerto/concerto-frontend 
2. change the current directory to the concerto-frotend project
3. run ```npm install``` and ```bower install``` to install the necessary tools and libraries 

#### Standalone development
The quickest method of development is to run the frontend without core Concerto. The frontend uses data in the "test" directory as a substitute for any screen and content data. Follow these steps to begin developing:

1. run ```npm install polyserve``` to install a simple web server to run our web component frontend
2. start the web server by simply running ```polyserve``` while in the project's root directory
3. polyserve will indicate which port and path the frontend can be reached at (this should be localhost:8080/components/concerto_frontend/demo.html)

#### Development through Concerto
This method allows developers to run live changes through core Concerto. Follow these steps to begin developing:

1. visit the "Plugins" page under your Concerto instance
2. add or edit the frontend plugin for installation by local system path
3. when specifying the path, the gem's root directory and gemspec are located in the concerto-frontend-gem folder within this project
4. run the ```grunt watch``` (add --verbose for extra debugging details) task within this project's root directory. This will automatically run the vulcanize task whenever changes are made to the frontend 

The grunt tasks will update the concatenated Polymer web components file and the changes should be reflected when previewing a screen under core Concerto.

#### Building the concerto_frontend gem
The following notes are kept for any developers on the Concerto team that need to push updates to RubyGems:

1. change direcetories to the concerto-frontend-gem and then run ```gem build concerto_frontend.gemspec```
2. push the final gem to RubyGems using ```gem push concerto_frontend-X.X.X.gem``` and add to core Concerto as concerto_frontend with the latest version number
