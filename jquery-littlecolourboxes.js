// JavaScript Document
/* This jQuery plugin is released under the following Open Source license: http://www.gnu.org/licenses/gpl-2.0.html

The code has been created by Suburban Glory Web Design: http://www.suburban-glory.com/

info@suburban-glory.oom

version 0.3
*/
jQuery.fn.colboxes = function ($colour) {

    if (jQuery.browser.msie && parseFloat(jQuery.browser.version) > 6 || !jQuery.browser.msie) {

        jQuery(window).bind("load", function () {

            var imageBoxes = jQuery("#image-boxes");

            // find dimensions of image
            var imageHeight = imageBoxes.height();
            var imageWidth = imageBoxes.width();

            imageBoxes.wrap('<div id="image-boxes-wrapper"></div>');

            jQuery('#image-boxes-wrapper').css({
                "width": imageWidth + "px",
                "height": imageHeight + "px",
                "position": "relative",
                "overflow": "hidden",
                "padding": "0",
                "margin": "0"
            });

            // Now create the small boxes dimensions
            var smallBoxWidth = Math.ceil(imageWidth / 7);
            var smallBoxHeight = Math.ceil(imageHeight / 7);

            // create letters array
            var idLetters = ["a", "b", "c", "d", "e", "f", "g"];

            // This creates the switch statement for the dynamic left margin size

            function letter_switch($variable) {

                switch ($variable) {
                case 'a':
                    return 0;
                    break;
                case 'b':
                    return smallBoxWidth;
                    break;
                case 'c':
                    return smallBoxWidth * 2;
                    break;
                case 'd':
                    return smallBoxWidth * 3;
                    break;
                case 'e':
                    return smallBoxWidth * 4;
                    break;
                case 'f':
                    return smallBoxWidth * 5;
                    break;
                case 'g':
                    return smallBoxWidth * 6;
                    break;
                case 'h':
                    return smallBoxWidth * 7;
                    break;
                } // End of switch statement
            } // End of letter_switch variable
            idLetters = idLetters.reverse();

            for ($i = 0; $i <= idLetters.length; $i++) {

                // create mask for image
                jQuery(document.createElement('div')).attr("id", "main-photo-" + idLetters[$i]).insertAfter(imageBoxes);

                // Give mask dimensions and, background color and position it over the image
                jQuery("#main-photo-" + idLetters[$i]).css({
                    "height": imageHeight + "px",
                    "width": smallBoxWidth + "px",
                    "position": "absolute",
                    "left": letter_switch(idLetters[$i]),
                    "top": "0",
                    "z-index": "1",
                    "padding": "0",
                    "margin": "0"
                });

            }

            // Now create the small divs to fit into the previously created elements
            for ($x = 0; $x <= idLetters.reverse().length; $x++) {
                for ($t = 0; $t <= 7; $t++) {

                    // create mask for image
                    jQuery(document.createElement('div')).attr("id", idLetters[$x] + $t).css({
                        "float": "left",
                        "background-color": jQuery.trim($colour),
                        "width": smallBoxWidth + "px",
                        "height": smallBoxHeight + "px",
                        "opacity": "0",
                        "padding": "0",
                        "margin": "0"
                    }).appendTo('#main-photo-' + idLetters[$x]);


                } // End of x forloop
            } // End of t forloop
            // Creates opacity boxes
            for ($i = 0; $i < idLetters.length; $i++) {

                for ($e = 0; $e <= 6; $e++) {

                    randomOpacity = Math.random() * 10 / 10;

                    var idObj = "#" + idLetters[$i] + $e;

                    jQuery(idObj).delay(500).animate({
                        "opacity": (randomOpacity + 0.0).toFixed(1) + 0.4
                    }, 2000);

                    jQuery(idObj).delay(1000).animate({
                        "opacity": "0"
                    }, 2000);

                }
            }

            // Finish off with seven random opacity squares.
            for ($d = 1; $d <= 7; $d++) {

                randNumber = Math.floor(Math.random() * idLetters.length);
                randNumberTwo = Math.floor(Math.random() * 7);
                randomOpacity = Math.random() * 10 / 10;

                jQuery("#" + idLetters[randNumber] + randNumberTwo).animate({
                    "opacity": (randomOpacity + 0.0).toFixed(1) + 0.4
                });

            }

            $("#main-photo-undefined").remove();

        }); // End of document ready
    } // end if statement for ie6
}