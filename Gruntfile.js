module.exports = function (grunt) {
rts = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true
      },
      files: {
        src: './index.html',
        dest: 'dist/index.html'
      }
    },
    cssmin: {
      'dist/second.css': 'second.css'
    },
    uglify: {
      release:{
        files: {
          'dist/second.js': 'second.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify']);
  grunt.registerTask("release", ['copy', 'htmlmin','cssmin', 'uglify']);
};
  grunt.initConfig({
    htmlmin: {
      options: {
                        collapseWhitespace: true
              
          
      },
  files: {
                src: './index.html',
            dest: 'dist/index.html'
              
      
  }
        
      

