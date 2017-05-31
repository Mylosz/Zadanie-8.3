module.exports = function(grunt) {

  grunt.initConfig({
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'css/style.css': 'style.sass'
  			}
  		}
  	},
    watch: {
    scripts: {
        files: ['sass/style.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
    }
},
    jshint: {
      all: ['js/scripts.js']
    }
  });


grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.registerTask('default', ['sass', 'watch', 'jshint']);
};
