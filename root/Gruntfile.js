'use strict';


/**
 * 脚本定义
 * @by lexus.lin
 */
module.exports = function(grunt) {
    //别名
    grunt.registerTask('default', ['connect', 'watch']);
    // 读取npm tasks
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');

    //读取配置
    var pkg = grunt.file.readJSON('package.json');

    var cfg = {
        host: '127.0.0.1',
        port: 9001,
        livereload: 35729
    };

    //grunt config
    grunt.initConfig({
        options: {
            force: true
        },

        //复制图片
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '**',
                    dest: 'dist/'
                }, {
                    expand: true,
                    cwd: 'css',
                    src: '**',
                    dest: 'dist/css/'
                }, {
                    expand: true,
                    cwd: 'lib/jquery/dist/',
                    src: 'jquery.min.js',
                    dest: 'dist/js/'
                }, {
                    expand: true,
                    cwd: 'lib/seajs/',
                    src: 'sea.js',
                    dest: 'dist/js/'
                }]
            }
        },

        //开启Web服务
        connect: {
            options: {
                livereload: cfg.livereload
            },
            dev: {
                options: {
                    port: cfg.port,
                    base: 'src',
                    open: {
                        target: cfg.host + ':' + cfg.port + '/index.html',
                        appName: 'chrome',
                        callback: function() {}
                    }
                }
            }
        },

        open: {
            dev: {
                path: cfg.host + ':' + cfg.port + '/index.html',
                app: 'chrome'
            }
        },

        watch: {
            css: {
                files: 'src/**',
                tasks: [],
                options: {
                    livereload: cfg.livereload
                },
            },
        }

    });

};
