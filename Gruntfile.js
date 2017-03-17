module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            js: {
                src: ['src/**/*.js'],
                dest: 'dist/script.js',
            },
            css: {
                src: ['res/**/*.css'],
                dest: 'dist/style.css',
            }
        },
        uglify: {
            js: {
                files: {
                    'dist/script.min.js': ['dist/script.js']
                }
            }
        },
        cssmin: {
            css: {
                files: {
                    'dist/style.min.css': ['dist/style.css']
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.js', 'res/**/*.css'],
                tasks: ['concat', 'uglify', 'cssmin'],
            }
        },
        'http-server': {
            'dev': {
                root: './',
                port: 8282,
                host: 'localhost',
                autoIndex: true,
                ext: ["html", "js", "css"],
                runInBackground: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-http-server');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
    grunt.registerTask('run', ['default', 'http-server:dev', 'watch']);

}