"use-strict";

const pkgJson = require( '../package.json');

/**
 * @author Adam A. Zerella
 * @description TODO 
 */
export default const DATA = {
    "environment"   : process.env.NODE_ENV,
    "version"       : pkgJson.version,
    "dependencies"  : ( Object.keys(pkgJson.devDependencies).length ) + ( Object.keys(pkgJson.dependencies).length ),
    "bundleSize"    : "34.8 KB",
    "coverage"      : "0%"
}
