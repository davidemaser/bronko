/*global module:false*/
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      ' */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['node_modules/jquery/dist/jquery.min.js','src/core/<%= pkg.name %>.js','src/components/config.js','src/components/alerts.js','src/components/log.js','src/components/data.js','src/components/app.js','src/components/paginate.js','src/components/assistants.js','src/components/ajax.js','src/components/template.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'dist/bronko.css': 'src/scss/bronko.scss'
        }
      }
    },
    cssmin: {
      options: {
        sourceMap:false
      },
      target: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['bronko.css'],
          dest: 'dist/min',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/min/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      scripts:{
        files: ['src/components/*.js','**/*.json'],
        tasks: ['concat', 'uglify'],
        options: {
          debounceDelay: 250
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin', 'watch']);

};
