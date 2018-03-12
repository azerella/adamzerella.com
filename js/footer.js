"use-strict";

import React, { Component } from "react";

import { DATA } from "./main.js";

/**
 * @author Adam A. Zerella
 * @description TODO 
 */
export default class Footer extends React.Component {
    constructor() {
        super();
    };

    render(){
        return (
            <div id="footer-text"> Adam Zerella &#8198; {DATA.version} </div>
        );
    }
}