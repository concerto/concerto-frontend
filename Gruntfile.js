// Wrapper function to encapsulate Grunt config
module.exports = function(grunt) {
  // Initialize our Grunt config object
  grunt.initConfig({
    // Read NPM package settings and store values in pkg property
    pkg: grunt.file.readJSON("package.json"),
    // Configure the vulcanize plugin to concatenate our Polymer html files
    vulcanize: {
      options: { 
        inlineScripts: true,
        inlineCss: true,
        stripComments: true
      },
      files: {
        src: "screen.html",
        dest: "concerto-frontend-gem/app/views/concerto_frontend/_frontend.html"
      },
    },
    watch: {
      scripts: {
        files: ['*.js', '*.html', 'contents/*.html'],
        tasks: ['vulcanize']
      },
    },
  });

  // Load in the Grunt plugins that will be used
  //  these should be installed via 'npm install' before running 'grunt'
  grunt.loadNpmTasks('grunt-vulcanize'); // concatenate Polymer elements
  grunt.loadNpmTasks('grunt-contrib-watch'); // run tasks when files are modified

  // Set up our default task that is run when 'grunt' is executed
  grunt.registerTask('default', ['vulcanize']);
}