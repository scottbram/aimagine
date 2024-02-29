module.exports = function(eleventyConfig) {
    // eleventyConfig.addPassthroughCopy("./src/index.html");
    // eleventyConfig.addPassthroughCopy("./src/css");
    // eleventyConfig.addPassthroughCopy("./src/js");
    // eleventyConfig.addPassthroughCopy("./src/img");
    passthroughFileCopy: true;

    return {
        dir: {
            input: "./src",
            output: "./dist"
        }
    }
};