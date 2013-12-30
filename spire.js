var page = require('webpage').create();
var execFile = require("child_process").execFile;

// input
var login = "img/box.png"
var closed_class = "img/closedup.png";
var checked = "img/checkbox.png";
var enroll = "img/enroll.png";
var finish = "img/finish.png";

// slots
var result = "img/loggedin.png";
var site = "img/login.png";

// information
var spireusername = "YOUR NETID";
var spirepassword = "YOUR PASSWORD";

page.viewportSize = { width: 800, height: 800 };

page.open('https://spire.umass.edu', function () {
          setTimeout(function(){
                     page.render(site);
                     execFile("./image_coords.sh", [site, login], null, function (err, stdout, stderr) {
                              
                              var output = JSON.stringify(stdout);
                              output = output.substring(1, output.length-3);
                              
                              var coor = eval("["+output+"]");
                              console.log("Clicked login box at ("+coor[0] + ", " + coor[1]+")");
                              
                              page.sendEvent('click', parseInt(coor[0]), parseInt(coor[1]));
                              page.sendEvent('keypress', spireusername+'\t'+spirepassword+'\n');
                              console.log("Entered login info");
                              
                              setTimeout(function(){
                                         page.open('https://www.spire.umass.edu/psc/heproda/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES_2.SSR_SSENRL_CART.GBL?FolderPath=PORTAL_ROOT_OBJECT.HCCC_ENROLLMENT.HC_SSR_SSENRL_CART_GBL2&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder', function () {
                                                   page.render(result);
                                                   
                                                   execFile("./image_coords.sh", [result, closed_class], null, function (err, stdout, stderr) {
                                                            //
                                                            var output = JSON.stringify(stdout);
                                                            output = output.substring(1, output.length-3);
                                                            
                                                            if (output != "Not Found")
                                                            {
                                                                console.log("Class is closed." + output);
                                                                phantom.exit();
                                                            }
                                                            
                                                            execFile("./image_coords.sh", [result, checked], null, function (err, stdout, stderr) {
                                                                     
                                                                     var output = JSON.stringify(stdout);
                                                                     output = output.substring(1, output.length-3);
                                                                     
                                                                     var coor = eval("["+output+"]");
                                                                     console.log("Clicked checkbox at ("+coor[0] + ", " + coor[1]+")");
                                                                     page.sendEvent('click', parseInt(coor[0]), parseInt(coor[1]));
                                                                     
                                                                     execFile("./image_coords.sh", [result, enroll], null, function (err, stdout, stderr) {
                                                                              
                                                                              var output = JSON.stringify(stdout);
                                                                              output = output.substring(1, output.length-3);
                                                                              
                                                                              var coor = eval("["+output+"]");
                                                                              console.log("Clicked enroll button at ("+coor[0] + ", " + coor[1]+")");
                                                                              page.sendEvent('click', parseInt(coor[0]), parseInt(coor[1]));
                                                                              
                                                                              setTimeout(function(){
                                                                                         page.render(result);
                                                                                         execFile("./image_coords.sh", [result, finish], null, function (err, stdout, stderr) {
                                                                                                  //
                                                                                                  var output = JSON.stringify(stdout);
                                                                                                  output = output.substring(1, output.length-3);
                                                                                                  
                                                                                                  var coor = eval("["+output+"]");
                                                                                                  console.log("Clicked finish button at ("+coor[0] + ", " + coor[1]+")");
                                                                                                  page.sendEvent('click', parseInt(coor[0]), parseInt(coor[1]));

                                                                                                  setTimeout(function(){
                                                                                                             page.render(result);
                                                                                                             phantom.exit();
                                                                                                             }, 2000);
                                                                                                  
                                                                                                  });
                                                                                         }, 2000);
                                                                              
                                                                              });
                                                                     });
                                                            });
                                                   // render the results
                                                   });
                                         }, 5000);
                              });
                     }, 2000);
          });