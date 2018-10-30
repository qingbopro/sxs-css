var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require("gulp-rename"),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    csscomb = require('gulp-csscomb'),
	plumber = require('gulp-plumber')


// css
gulp.task('less', function () {
    return gulp.src(['./sxs.less']) //**：所有级别的子目录、*：所有文件名
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 100 versions', 'ie 8'],
            // browsers: ['last 100 Chrome versions'],
            cascade: true //是否美化属性值 默认：true 像这样：
                //-webkit-transform: rotate(45deg);
                //        transform: rotate(45deg);
        }))
        .pipe(csscomb())
        .pipe(gulp.dest('./dist/'))
        .pipe(cleanCSS({
            advanced: false, //是否合并选择器
            keepSpecialComments: '*' //保留所有特殊前缀
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./dist/'));
});

// js
gulp.task('js', function () {
    return gulp.src('./sxs.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(uglify({ mangle: true })) //默认：true 是否修改变量名
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./dist/'));
});

// 默认
gulp.task('default', ['less', 'js'], function () {
    gulp.start('browser-sync');
    gulp.start('watch');
});

// 同步
gulp.task('browser-sync', function () {
    browserSync.init({
        files: "./", // 监听的目录（该目录下有变化时同步页面）
        server: {
            baseDir: "./" // 启动的目录（就是localhost:3000指向的默认目录）
        }
    });
});

// 监听
gulp.task('watch', function () {
    gulp.watch('./src/**/*.less', ['less']);
    gulp.watch('./sxs.js', ['js']);
});
