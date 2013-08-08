// Generated by LiveScript 1.2.0
(function(){
  module.exports = function(grunt){
    grunt.task.loadNpmTasks('grunt-lsc');
    grunt.task.loadNpmTasks('grunt-contrib-uglify');
    grunt.initConfig({
      lsc: {
        moedict: {
          files: {
            'jquery.moedict.js': ['jquery.moedict.ls']
          }
        }
      },
      uglify: {
        moedict: {
          options: {
            preserveComments: 'some'
          },
          files: {
            'jquery.moedict.min.js': ['jquery.moedict.js']
          }
        }
      }
    });
    return grunt.registerTask('default', ['lsc', 'uglify']);
  };
}).call(this);
