# Sikuli Spectre

### Let's change autonomous web scripting!
Sikuli Spectre combines [PhantomJS](http://phantomjs.org) and [Sikuli](http://sikuli.org) to allow the user to write PhantomJS scripts that render in the background but use Sikuli's image finding algorithms to interact visually with the webpage that isn't being displayed.

### Requirements
* Sikuli IDE installed for your system
* PhantomJS installed

### Running the Demo
```
phantomjs sikuli.js
```

The code will open the specified site and write the behind the scenes output that the headless webkit is looking at to [img/before_site.png](https://github.com/vgmoose/sikuli-spectre/blob/master/img/before_site.png)

It will then run the sikuli script via [image_coords.sh](https://github.com/vgmoose/sikuli-spectre/blob/master/image_coords.sh). If this line errors, you may need to customize line 2 of [image_coords.sh](https://github.com/vgmoose/sikuli-spectre/blob/master/image_coords.sh) to the appropriate use Java 6 runtime.

The script will report back coordinates of [img/apps_target.png](https://github.com/vgmoose/sikuli-spectre/blob/master/img/apps_target.png) in [img/before_site.png](https://github.com/vgmoose/sikuli-spectre/blob/master/img/before_site.png) to PhantomJS. This information is then applied as a click event

[img/result_of_click.png](https://github.com/vgmoose/sikuli-spectre/blob/master/img/result_of_click.png) is then written as just that- the result of the click

### What next?
The method of interacting with sikuli through phantomjs is a bit complicated, and can result in an ugly script fast that is [hard to follow](https://github.com/vgmoose/sikuli-spectre/blob/master/spire.js).

Our primary goal is to make Spectre easier to use and interact with, much like Sikuli IDE does for the desktop. Simple and easy-to-use image based web automation will hopefully improve everyone's personal experience on the Internet.