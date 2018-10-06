// ==UserScript==
// @name         SteamFastKeyClaimer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Claim Steam keys quickly
// @author       StefanJanssen
// @match        https://store.steampowered.com/account/registerkey?key=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // To try avoid possible detection add a small random wait time
    randomWait( ()=>{
        document.getElementById("accept_ssa").checked = true; // Accept terms and conditions
        randomWait(RegisterProductKey); // Execute the same function used by Valve when one clicks the activate button
    });

    function randomWait(func){
        window.setTimeout(func, Math.random()*600+100);
    }
})();
