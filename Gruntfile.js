// Wrapper function to encapsulate Grunt config 
module.exports = function(grunt) {
  // Initialize our Grunt config object
  grunt.initConfig({
    bowercopy: {
      options: {
        runBower: false,
        report: false,
        srcPrefix: 'bower_components'
      },
      gem_vendor: {
        options: {
          destPrefix: 'concerto-frontend-gem/vendor/assets/javascripts'
        },
        files: {
          'moment.min.js': 'moment/min/moment.min.js',
          'moment-timezone-with-data.min.js': 'moment-timezone/builds/moment-timezone-with-data.min.js',
          'webcomponents-lite.min.js': 'webcomponentsjs/webcomponents-lite.min.js'
        }
      }
    },
    "regex-replace": {
      componentize: {
        src: ['concerto-frontend-gem/app/assets/html/concerto_frontend/concerto-frontend.html'],
        actions: [
          {
            name: 'stripstart',
            search: /^((?:\s|.)*?)(<script>)/,
            replace: '$2',
            flags: ''
          },
          {
            name: 'stripvulcan',
            search: '(</head.*?>)(<dom-module)',
            replace: '$2',
            flags: ''
          },
          {
            name: 'stripend',
            search: '(</dom-module>)(.*?</html>)',
            replace: '$1',
            flags: ''
          }
        ]
      }
    },
    // Read NPM package settings and store values in pkg property
    pkg: grunt.file.readJSON("package.json"),
    // Configure the vulcanize plugin to concatenate our Polymer html files
    vulcanize: {
      default: {
        options: { 
          inlineScripts: true,
          inlineCss: true,
          stripComments: true
        },
        files: {
          "concerto-frontend-gem/app/assets/html/concerto_frontend/concerto-frontend.html" : "vulcanize_this.html"
        },
      },
    },
    watch: {
      scripts: {
        files: ['*.html', 'contents/*.html'],
        tasks: ['vulcanize', 'regex-replace']
      },
    },
  });

  // Load in the Grunt plugins that will be used
  //  these should be installed via 'npm install' before running 'grunt'
  grunt.loadNpmTasks('grunt-vulcanize'); // concatenate Polymer elements
  grunt.loadNpmTasks('grunt-contrib-watch'); // run tasks when files are modified
  grunt.loadNpmTasks('grunt-bowercopy'); // copy files to gem
  grunt.loadNpmTasks('grunt-regex-replace');

  // Set up our default task that is run when 'grunt' is executed
  grunt.registerTask('default', ['vulcanize', 'bowercopy']);
}