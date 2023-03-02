// ==UserScript==
// @name         CSDN 清爽版
// @namespace    https://blog.csdn.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.blog.csdn.net/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let css = `
        @media screen and (min-width: 1700px) {
          .nodata .container main {
            width: auto;
          }
        }

        @media screen and (min-width: 1380px) {
          .nodata .container main {
            width: auto;
          }
        }

        @media screen and (max-width: 1320px) {
          .nodata .container main {
            width: auto;
          }
        }

        #content_views pre code {
            user-select: text!important;
        }
    `

    var node = document.createElement("style");
    node.type = "text/css";
    node.appendChild(document.createTextNode(css));
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
        heads[0].appendChild(node);
    } else {
        document.documentElement.appendChild(node);
    }


    let eleSelectorList = [
        "aside.blog_container_aside",
        "#rightAside",
        "#csdn-toolbar",
        "#toolBarBox",
        ".article-info-box",
        "#blogColumnPayAdvert",
        ".recommend-box",
        "#recommendNps",
        ".template-box",
        ".blog-footer-bottom",
        ".csdn-side-toolbar",
    ];

    eleSelectorList.forEach(item => {
        document.querySelectorAll(item).forEach(ele => {
            ele && ele.remove()
        })
    })

    let codeEleList = document.querySelectorAll("code")
    codeEleList.forEach(ele=>{
        ele.removeEventListener("mouseenter")

    })

})();
