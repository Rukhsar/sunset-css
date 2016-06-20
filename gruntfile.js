module.exports = function ( grunt ) {

    'use strict';


    // ================================================================
    // CONFIG TASKS
    // ================================================================

    // Define the configuration
    grunt.initConfig({

        // Specifics of npm's package.json handling
        pkg: grunt.file.readJSON( 'package.json' ),

        // Banner
        banner:
        '/*!\n'+
        ' * Sunset v<%= pkg.version %>\n'+
        ' * <%= pkg.homepage %>\n'+
        ' *\n'+
        ' * Copyright (c) '+new Date().getFullYear()+' Rukhsar Manzoor\n'+
        ' * Licensed under the <%= pkg.license %> license\n'+
        '*/\n\n',

        // DEFAULT TASK
        // ================================================================

        // Watch files and process the above tasks
        watch: {
            options: {
                livereload: false
            },
            grunt: {
                files: [
                    'gruntfile.js'
                ],
                options: {
                    reload: true
                }
            },
            sass: {
                files: [
                    'src/**/*.scss'
                ],
                tasks: [
                    'sass',
                    'autoprefixer'
                ]
            }
        },

        // BUILD TASKS
        // ================================================================

        // Clear files and folders
        clean: {
            all: [ 'dist' ]
        },

        // Compile Sass files to CSS
        sass: {
            minify: {
                options: {
                    banner: '<%= banner %>',
                    noCache: true,
                    sourcemap: 'none',
                    style: 'compressed'
                },
                files: {
                    'dist/sunset.min.css': [ 'src/**/*.scss', '!src/**/_*.scss' ]
                }
            },
            default: {
                options: {
                    banner: '<%= banner %>',
                    noCache: true,
                    sourcemap: 'none',
                    style: 'expanded'
                },
                files: {
                    'dist/sunset.css': [ 'src/**/*.scss', '!src/**/_*.scss' ]
                }
            }
        },

        // Parse CSS and add vendor-prefixed CSS properties using the Can I Use database.
        autoprefixer: {
            minify: {
                options: {
                    browsers: [
                        'last 1 versions'
                    ],
                    map: {
                        inline: false
                    }
                },
                files: {
                    'dist/sunset.min.css': 'dist/sunset.min.css'
                }
            },
            default: {
                options: {
                    browsers: [
                        'last 1 versions'
                    ],
                    map: false
                },
                files: {
                    'dist/sunset.css': 'dist/sunset.css'
                }
            }
        }

    });


    // ================================================================
    // REGISTER TASKS
    // ================================================================

    // Default task
    grunt.registerTask( 'default', [
        'build',
        'watch'
    ]);

    // Build task
    grunt.registerTask( 'build', [
        'clean',
        'sass',
        'autoprefixer'
    ]);


    // ================================================================
    // LOAD TASKS
    // ================================================================

    // Automatically loading Grunt tasks
    require( 'load-grunt-tasks' )( grunt );

    // Display the elapsed execution time of Grunt tasks
    require( 'time-grunt' )( grunt );


};
