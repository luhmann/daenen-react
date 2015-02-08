var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

var gulpConfig = {
    'srcDir': 'client',
    'scriptsDir': 'javascripts',
    'stylesDir': 'stylesheets',
    'buildDir': 'public',
    'imgDir': 'images',
    'jsonDir': 'json',
    'file': __filename
};

gulp.task('clean', function (cb) {
    cb(del(gulpConfig.buildDir));
});


// Styles
gulp.task('styles', function () {
    return $.rubySass($.util.template('<%= srcDir %>/<%= stylesDir %>', gulpConfig), {
            style: 'expanded',
            precision: 10
        })
        .on('error', function (err) { console.log(err.message); })
        .pipe($.minifyCss({ benchmark: false, keepSpecialComments: 0 }))
        .pipe(gulp.dest($.util.template('<%= buildDir %>/<%= stylesDir %>', gulpConfig)))
        .pipe($.size());
});

// Scripts
gulp.task('scripts', ['json'], function () {
    var bundler = watchify(browserify({
        entries: [$.util.template('./<%= srcDir %>/<%= scriptsDir %>/app.js', gulpConfig)],
        insertGlobals: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));

    bundler.on('update', rebundle);

    function rebundle() {
        return bundler.bundle()
            // log errors if they happen
            .on('error', $.util.log.bind($.util, 'Browserify Error'))
            .pipe(source('app.js'))
            .pipe(gulp.dest($.util.template('<%= buildDir %>/<%= scriptsDir %>', gulpConfig)));
    }

    return rebundle();

});

// without watch
gulp.task('scripts-prod', ['json'], function () {
    var bundler = browserify({
        entries: [$.util.template('./<%= srcDir %>/<%= scriptsDir %>/app.js', gulpConfig)],
        insertGlobals: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    });

    return bundler.bundle()
        .on('error', $.util.log.bind($.util, 'Browserify Error'))
        .pipe(source('app.js'))
        .pipe(gulp.dest($.util.template('<%= buildDir %>/<%= scriptsDir %>', gulpConfig)));
});

gulp.task('compress', ['scripts-prod'], function () {
    return gulp.src($.util.template('./<%= buildDir %>/<%= scriptsDir %>/*.js', gulpConfig))
        .pipe($.uglify())
        .pipe(gulp.dest($.util.template('./<%= buildDir %>/<%= scriptsDir %>', gulpConfig)));
});

gulp.task('json', function() {
    return gulp.src(
        $.util.template('./<%= srcDir %>/<%= scriptsDir %>/<%= jsonDir %>/*.json', gulpConfig),
        {base: $.util.template('./<%= srcDir %>/<%= scriptsDir %>', gulpConfig )}
    ).pipe(gulp.dest($.util.template('<%= buildDir %>/<%= scriptsDir %>/<%= jsonDir %>/', gulpConfig)));
});

// Images
gulp.task('images', function () {
    return gulp.src($.util.template('<%= srcDir %>/<%= imgDir %>/**/*', gulpConfig))
        .pipe($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest($.util.template('<%= buildDir %>/<%= imgDir %>', gulpConfig)))
        .pipe($.size());
});

// Robots.txt and favicon.ico
gulp.task('extras', function () {
    return gulp.src([$.util.template('<%= srcDir %>/*.txt', gulpConfig), $.util.template('<%= srcDir %>/*.ico', gulpConfig)])
        .pipe(gulp.dest($.util.template('<%= buildDir %>', gulpConfig)))
        .pipe($.size());
});

// Watch
gulp.task('watch', ['scripts', 'styles', 'images'], function () {

    // Watch .json files
    gulp.watch($.util.template('./<%= srcDir %>/<%= scriptsDir %>/<%= jsonDir %>/*.json', gulpConfig), ['json']);

    // Watch CSS-Files
    gulp.watch($.util.template('<%= srcDir %>/<%= stylesDir %>/**', gulpConfig), ['styles']);

    // Watch image files
    gulp.watch($.util.template('<%= srcDir %>/<%= imgDir %>/**/*', gulpConfig), ['images']);

    // JS-Files watched by watchify
});


gulp.task('bundle', ['scripts-prod', 'styles']);

gulp.task('build', ['clean', 'bundle', 'images', 'extras', 'compress']);
