// Wrapper function to encapsulate Grunt config
module.exports = function(grunt) {
  // Initialize our Grunt config object
  grunt.initConfig({
    // Read NPM package settings and store values in pkg property
    pkg: grunt.file.readJSON("package.json"),
    // Configure the vulcanize plugin to concatenate our Polymer html files
    vulcanize: {
      options: { 
        inline: true,
        strip: true
      },
      files: {
        src: "demo.html",
        dest: "frontend.html"
      },
    },
  });

  // Load in the Grunt plugins that will be used
  //  these should be installed via 'npm install' before running 'grunt'
  grunt.loadNpmTasks('grunt-vulcanize');

  // Set up our default task that is run when 'grunt' is executed
  grunt.registerTask('default', ['vulcanize']);
}