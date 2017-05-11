module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({

    copy: {
      dist: {
        files: {
          '_site_git/' : '_site/**'
        }
      },
      css : {
        files: {
          '_site/css/style.css': 'css/style.css'
        }
      }
    },
    shell: {
      jekyll: {
        command: 'rm -rf _site/*; bundle exec jekyll build',
        stdout: true
      }
    },
    less: {
      development: {
        options: {
          paths: ['less']
        },
        files: {
          'css/style.css': ['less/style.less']
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      less: {
        files: ['less/*.less'],
        tasks: ['lessCopy']
      },
      jekyllSources: {
        files: [
          // capture all except css
          '*.html', '*.yml', '*.svg', 'js/**.js', '**/*.md',
          '_posts/**', '_includes/**', '_data/**', '_layouts/**',
          'atom.xml'
        ],
        tasks: ['shell:jekyll']
      }
    },

    connect: {
      server: {
        options: {
          base: '_site/',
          port: 4000
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.server.options.port %>/'
      }
    }
  });

  // less watch
  grunt.registerTask('lessCopy', ['less:development', 'copy:css']);

  grunt.registerTask('server', [
    'copy',
    'connect:server',
    'open:server',
    'watch'
  ]);

  // Default task.
  grunt.registerTask('default', 'server');

};