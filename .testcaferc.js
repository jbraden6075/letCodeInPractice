module.exports = {
    browsers: "chrome",
    src: "./tests/**/*.js",
    reporter: {
        name: "spec",
        output: "./artifacts/reports/spec.txt"
    },
    screenshots: {
        path: "./artifacts/screenshots",
        pathPattern: "${DATE}_${TIME}/${TEST}.png",
        takeOnFails: true,
        thumbnails: false,
        fullPage: true,
    },
    skipJsErrors: true,
    selectorTimeout: 5000
}