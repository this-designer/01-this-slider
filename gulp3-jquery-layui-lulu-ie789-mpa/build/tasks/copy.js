const config = require('../config/index')
const gulp = require('gulp')

gulp.task('copyHTMLLeft', function () {

    console.log('=================================')
    console.log('以下范围的文件不搬运哦 \(￣︶￣*\))')
    console.log(...config.dev.copyHTMLExclude)
    console.log('=================================')

    return gulp.src([
        `${config.dev.pagesDir}/**/*.*`,
        // 排除
        ...config.dev.copyHTMLExclude
        ])
        .pipe(gulp.dest(`${config.common.templatesDir}`))
})

// 搬运图片
gulp.task('copyGlobalImages', function () {
    // 搬运图片
    return gulp.src([
        `${config.dev.assetsDir}/images/**/*.*`
        ])
        .pipe(gulp.dest(`${config.common.staticDir}/images`))
})
gulp.task('copyImages', function () {
    // 搬运图片
    return gulp.src([
        `${config.dev.imagesDir}/**/*.*`
        ])
        .pipe(gulp.dest(`${config.common.staticDir}/images`))
})

// @deprecated
// 搬运 静态样式(css)和雪碧图
gulp.task('copyCssLeft', function () {
    return gulp.src([
        `${config.dev.stylesDir}/**/*.{css,png}`
        ])
        .pipe(gulp.dest(`${config.common.staticDir}/css`))
})