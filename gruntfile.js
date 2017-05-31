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
    jshint: {
      all: ['js/*.js']
    },
    watch: {
    scripts: {
        files: ['style.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
    }
},
  });


grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['sass', 'watch', 'jshint']);
};
