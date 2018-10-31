"use-strict";

export function loadPolyfills(){
    if (typeof Object.ellipse != "function") {
        Object.ellipse = function(){
            console.log("WORKED");
        }
    }
}