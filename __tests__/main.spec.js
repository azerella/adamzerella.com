import { DATA } from "../js/main.js";

/**
 * @author Adam A. Zerella
 * @description TODO 
 */
test( "package.json returns correct package version", () => {
    expect( DATA.version ).toBe( "0.1.1" );
});