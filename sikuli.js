var page = require('webpage').create();
var execFile = require("child_process").execFile;

var target = "img/apps_target.png";

var site = "img/before_site.png";
var result = "img/result_of_click.png";

page.viewportSize = { width: 800, height: 800 };

page.open('http://vgmoose.github.io', function () {
          setTimeout(function(){
                     
                     page.render(site);
                     
                     // run the script to find where "apps" target is on the page
                     execFile("./image_coords.sh", [site, target], null, function (err, stdout, stderr) {
                              
                              var output = JSON.stringify(stdout);
                              output = output.substring(1, output.length-3);
                              
                              var coor = eval("["+output+"]");
                              console.log("Found image at ("+coor[0] + ", " + coor[1]+")");
                              
                              // click the "apps" image!
                              page.sendEvent('click', parseInt(coor[0]), parseInt(coor[1]));
                              
                              setTimeout(function(){
                                         // render the results
                                         page.render(result);
                                         phantom.exit();
                                         }, 2000);
                              })
                     }, 2000);
          });