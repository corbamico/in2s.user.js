// ==UserScript==
// @name         Generate URL for in2s
// @namespace    https://github.com/corbamico/in2s.user.js
// @version      0.1
// @description  Generate pan.baidu.com url for in2s.net 神秘代码
// @match        https://www.in2s.net/archives/*
// @icon         https://ytbcdn.banbaise.com/wp-content/uploads/2020/03/cropped-df419c04c95fc7d58cc6f6f34a2fb7fd.jpeg
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    // Find the element with class="emoji"
    var emoji = document.querySelector('.emoji');
    if (emoji) {
        // Get the parent element of the emoji
        var parent = emoji.parentElement;
        // Get the html content of the parent element
        var html = parent.innerHTML;
        // Create a regular expression to match and split the html by class="emoji"
        var regex = /(.*)<img[^>]*class="emoji"[^>]*>(.*)/;
        // Check if the html matches the regex
        var match = html.match(regex);
        if (match) {
            // Get partA as the first captured group before class="emoji"
            var partA = match[1];
            partA=partA.trim();
            // Get partB as a fixed length of 4 characters after class="emoji"
            var partB = match[2].trim().slice(0, 4);
            // Construct the URL with partA and partB as parameters
            var url = 'http://pan.baidu.com/s/' + partA + '?pwd=' + partB;
            // Create a button element to open the URL
            var link = document.createElement('a');
            link.textContent = 'Open URL';
            link.style.marginLeft = '10px';
            link.target = '_blank';
            link.href = url;

            //Append the button element after partB in the parent element
            //parent.appendChild(button);
            parent.innerHTML = html.replace(partB, partB + link.outerHTML);
        } else {
            // Alert that there is no matching html for class="emoji" in its parent element
            //alert('No matching html for class="emoji" in its parent element.');
        }
    } else {
        // Alert that there is no element with class="emoji"
        //alert('No element with class="emoji".');
    }
})();
