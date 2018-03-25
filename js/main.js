"use-strict";

const pkgJson = require( '../package.json');

const pkgLockJson = require( '../package-lock.json');

/**
 * @author Adam A. Zerella
 * @description TODO 
 */
export const DATA = {
    "environment"   : process.env.NODE_ENV,
    "version"       : pkgJson.version,
    "dependencies"  : ( Object.keys(pkgLockJson.dependencies).length ),
    "bundleSize"    : "34.8 KB",
    "coverage"      : "0%"
}
