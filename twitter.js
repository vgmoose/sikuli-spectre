var page = require('webpage').create();
var execFile = require("child_process").execFile;

// input images
var twitterLogin = "img/twitter_input_1_login_box.png";
var twitterCompose = "img/twitter_input_2_compose.png";
var sendTweet = "img/twitter_input_3_send_tweet.png";

// result "slots" (so you can see what the script sees)
var site = "img/twitter_1_initial_page.png";
var result = "img/twitter_2_logged_in.png";
var tweeting = "img/twitter_3_tweeting.png";
var completed = "img/twitter_4_completed_tweet.png";

// login details and tweet message contents
var twitterusername = "ENTER YOUR TWITTER USERNAME HERE";
var twitterpassword = "ENTER YOUR TWITTER PASSWORD HERE";
var tweetMessage = "YO! This is an automated tweet via Sikuli-Spectre: https://github.com/vgmoose/sikuli-spectre. Let's change autonomous web scripting!";

page.viewportSize = { width: 800, height: 800 };

page.open('https://twitter.com', function () {
          setTimeout(function(){
                     page.render(site);
                     
                     // run the script to find where "apps" target is on the page
                     execFile("./image_coords.sh", [site, twitterLogin], null, function (err, stdout, stderr) {
                              
                              var output = JSON.stringify(stdout);
                              output = output.substring(1, output.length-3);
                              
                              var coor = eval("["+output+"]");
                              console.log("Found login box at ("+coor[0] + ", " + coor[1]+")");
                              
                              // click the "login box" image!
                              page.sendEvent('click', parseInt(coor[0]), parseInt(coor[1]));
                              
                              // enter username, tab, enter password, type enter
                              page.sendEvent('keypress', twitterusername+'\t'+twitterpassword+'\n');
                              
                              
                              setTimeout(function(){
                                         // render the results
                                         page.render(result);
                                         // run the script to find the compose button
                                         execFile("./image_coords.sh", [result, twitterCompose], null, function (err, stdout, stderr) {
                                                  
                                                  var output = JSON.stringify(stdout);
                                                  output = output.substring(1, output.length-3);
                                                  
                                                  var coor = eval("["+output+"]");
                                                  console.log("Found compose button  at ("+coor[0] + ", " + coor[1]+")");
                                                  
                                                  // click the "compose" image!
                                                  page.sendEvent('click', parseInt(coor[0]), parseInt(coor[1]));
                                                  
                                                  // enter contents of tweet
                                                  page.sendEvent('keypress', 'n'+tweetMessage);
                                                  
                                                  setTimeout(function(){
                                                             // render the results
                                                             page.render(tweeting);
                                                             
                                                             // run the script to find where "Tweet" target is on the page
                                                             execFile("./image_coords.sh", [tweeting, sendTweet], null, function (err, stdout, stderr) {
                                                                      
                                                                      var output = JSON.stringify(stdout);
                                                                      output = output.substring(1, output.length-3);
                                                                      
                                                                      var coor = eval("["+output+"]");
                                                                      console.log("Found send tweet button at ("+coor[0] + ", " + coor[1]+")");
                                                                      
                                                                      // click the "send tweet" image!
                                                                      page.sendEvent('click', parseInt(coor[0]), parseInt(coor[1]));
                                                                      
                                                                      setTimeout(function(){
                                                                                 // render the results
                                                                                 page.render(completed);
                                                                                 phantom.exit();
                                                                                 }, 4000);
                                                                      })
                                                             }, 2000);
                                                  })
                                         }, 4000);
                              })
                     }, 2000);
          });