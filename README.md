Concerto Frontend
=================

#### Steps to building the Frontend

1. git clone https://github.com/concerto/concerto-frontend
2. change directories to concerto-frontend
3. bower install --save Polymer/polymer
4. npm install
5. grunt (add --verbose for extra debugging details)

#### Development notes

Run ```grunt watch``` to automatically vulcanize files after saving any changes.
When testing with core Concerto, include the gem by filepath and run the grunt tasks to automatically update the vulcanized _frontend.html. 