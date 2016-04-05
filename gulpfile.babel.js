'use strict';

import gulp                 from  'gulp';
import browser_sync         from 'browser-sync';
import sass                 from 'gulp-ruby-sass';
import browserify           from 'browserify';
import source               from 'vinyl-source-stream';
import config               from "./config";
import buffer               from  'vinyl-buffer';
import rename               from  'gulp-rename';
import uglify               from  'gulp-uglify';
import templateCache        from 'gulp-angular-templatecache';

const browserSync = browser_sync.create();


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', () => {
    return sass(config.styles.src, { sourcemap: config.styles.prodSourcemap })
        .on('error', (err) => {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest(config.styles.dest))
        .pipe(browserSync.stream());
});


// Angular template files
gulp.task('templateCache', () => {
    return gulp.src(config.scripts.templateCache)
        .pipe(templateCache({
            standalone:true
        }))
        .pipe(gulp.dest(config.scripts.templateCacheDest) );
});

// Browser Sync gulp task static server     
gulp.task('sync', () => {
    browserSync.init({
        server: {
            baseDir: config.baseDir
        }
    });
});


// Javascript browserify, minification, minification;
gulp.task('js', ['templateCache'], () => {
    return browserify(config.scripts.entryFile)
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source((config.scripts.main)))
        .pipe(buffer())
        .pipe(uglify({
            mangle: false
        }))
        .pipe(rename('app.js'))
        .pipe(gulp.dest(config.scripts.dest))
        .on('error', (err) => {
            console.error('Error!', err.message);
        });
});

// Watch for changes and do browser reload
gulp.task('watch', ['js', 'sass'], () => {
    gulp.watch([config.watch.js, config.watch.sass, config.watch.template], ['templateCache', 'js', 'sass'], browserSync.reload);
    gulp.watch([config.watch.html]).on('change', browserSync.reload); 

});

//Default Task
gulp.task('default', ['sync', 'watch']);
