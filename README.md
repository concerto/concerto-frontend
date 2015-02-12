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

#### Building the concerto_frontend gem

Change direcetories to the concerto-frontend-gem and then run ```gem build concerto_frontend.gemspec``` 
Push final gem to RubyGems using ```gem push concerto_frontend-X.X.X.gem``` and add to core Concerto as concerto_frontend with the latest version number. 