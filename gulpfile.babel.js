import gulp             from "gulp";
import del              from "del";
import image            from "gulp-imagemin";
import sass             from "gulp-sass";
import bro              from "gulp-bro";
import babelify         from "babelify";
import autoprefixer     from "gulp-autoprefixer";
import concat           from "gulp-concat";
import connect          from "gulp-connect";
import changed          from "gulp-changed";
import cleanCSS         from "gulp-clean-css";
import sourcemaps       from "gulp-sourcemaps";

sass.compiler = require("node-sass");

const DEV_SRC = "src";
const PUB_SRC = "dest";

const paths = {
    "dev" : {
         "js"  : DEV_SRC + "/js/*.js"
        ,"jsPlugin" : DEV_SRC + "/js/plugin/*.js"
        ,"jsCommon" : DEV_SRC + "/js/common/*.js"
        ,"jsSub" : DEV_SRC + "/js/sub/*.js"
        ,"css" : DEV_SRC + "/css/*.scss"
        ,"cssPlugin" : DEV_SRC + "/css/plugin/*.css"
        ,"img" : DEV_SRC + "/images/**/**"
        ,"html": DEV_SRC + "/*.html"
        ,"favicons" : DEV_SRC + "/favicons/*.png"
    },
    "pub" : {
          "js"   : PUB_SRC + "/js"
         ,"jsPlugin" : PUB_SRC + "/js/plugin"
         ,"jsCommon" : PUB_SRC + "/js"
         ,"jsSub" : PUB_SRC + "/js"
         ,"css"  : PUB_SRC + "/css/"
         ,"cssPlugin" : PUB_SRC + "/css/plugin"
         ,"img"  : PUB_SRC + "/images"
         ,"html" : PUB_SRC + "/"
         ,"favicons" : PUB_SRC + "/images/favicon"
    },
    "watch" : {
          "js"   : DEV_SRC + "/js/*.js"
         ,"jsCommon" : DEV_SRC + "/js/common/*.js"
         ,"jsSub" : DEV_SRC + "/js/sub/*.js"
         ,"css"  : DEV_SRC + "/css/**/**/*.scss"
         ,"img"  : DEV_SRC + "/images/**"
         ,"html" : DEV_SRC + "/*.html"
    }
}

const gulp_js = () => 
    gulp
        .src(paths.dev.js)
        // .pipe(bro({
        //     transform:[
        //         babelify.configure({presets:["@babel/preset-env"]}),
        //         ["uglifyify",{global:true}]
        //     ]})
        // )
        .pipe(concat("main.js"))
        .pipe(gulp.dest(paths.pub.js))

const gulp_jsPlugin = () =>
    gulp
        .src(paths.dev.jsPlugin)
        .pipe(gulp.dest(paths.pub.jsPlugin))

const gulp_jsCommon = () =>
    gulp
        .src(paths.dev.jsCommon)
        // .pipe(bro({
        //     transform:[
        //         babelify.configure({presets:["@babel/preset-env"]}),
        //         ["uglifyify",{global:true}]
        //     ]})
        // )
        .pipe(concat("common.js"))
        .pipe(gulp.dest(paths.pub.jsCommon))

const gulp_jsSub = () =>
    gulp
        .src(paths.dev.jsSub)
        // .pipe(bro({
        //     transform:[
        //         babelify.configure({presets:["@babel/preset-env"]}),
        //         ["uglifyify",{global:true}]
        //     ]})
        // )
        .pipe(gulp.dest(paths.pub.jsSub))

const gulp_css = () =>
    gulp
        .src(paths.dev.css)
        .pipe(sass().on("error",sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.init())
        // .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.pub.css))

const gulp_cssPlugin = () =>
    gulp
        .src(paths.dev.cssPlugin)
        .pipe(gulp.dest(paths.pub.cssPlugin))

const gulp_html = () =>
    gulp
        .src(paths.dev.html)
        .pipe(gulp.dest(paths.pub.html))

const gulp_image = () =>
    gulp
        .src(paths.dev.img)
        .pipe(changed(paths.pub.img))
        .pipe(image())
        .pipe(gulp.dest(paths.pub.img))

const gulp_favicon = () =>
    gulp
        .src(paths.dev.favicons)
        .pipe(image())
        .pipe(gulp.dest(paths.pub.favicons))

const gulp_watch = () =>
    gulp.watch(paths.watch.js, gulp_js);
    gulp.watch(paths.watch.css, gulp_css);
    gulp.watch(paths.watch.html, gulp_html);
    gulp.watch(paths.watch.img, gulp_image);
    gulp.watch(paths.watch.jsCommon, gulp_jsCommon);
    gulp.watch(paths.watch.jsSub, gulp_jsSub);

const webserver = () =>
    connect.server({
          root : PUB_SRC
        , livereload : true
        , port : 8001
    })

const clean = () => del([PUB_SRC + "/*"]);

const prepare = gulp.series([clean, gulp_image, gulp_favicon]);

const assets = gulp.series([gulp_html, gulp_css, gulp_js, gulp_cssPlugin, gulp_jsPlugin, gulp_jsCommon, gulp_jsSub]);

const live = gulp.parallel([webserver, gulp_watch]);

export const build = gulp.series([prepare, assets, live]);