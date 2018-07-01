const packageJSON = require("../package.json");

/**
 * @description Meta information about environment and app
 */
export default {
	environment: process.env.NODE_ENV,
	version: packageJSON.version,
	dependencies: 0,
	bundleSize: "34.8 KB",
	coverage: "0%",
};
