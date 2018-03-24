import { test } from "ava";

const DATA = require("../js/main.js");

/**
 * @author Adam A. Zerella
 * @description TODO 
 */
test( "package.json returns correct package version", t => {
    t.is( DATA.version, "0.1.1" );
});

