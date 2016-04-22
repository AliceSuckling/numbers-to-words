##Numbers to Words
Translates a number from 0 - 1000 and turns it into the english word equivalent.

![Output sample] (https://github.com/HocusPocus2015/numbers-to-words/blob/master/app/assets/images/numbersToWords.gif) 

####Configuration Notes

The project uses [Grunt](http://gruntjs.com/) to run tasks in development. 
Run the application using the Gruntfile's `default` task:
```
$ grunt
```
Install the project dependencies by running:
```
$ npm install
```

A list of the Grunt plugins in this application. | 
------------ | 
[Grunt watch](https://github.com/gruntjs/grunt-contrib-watch) watches for changes to file content and then executes Grunt tasks when a change is detected. |
[Grunt copy](https://github.com/gruntjs/grunt-contrib-copy) copies files from development folders and puts them in the folder that will be served with the frontend of your application. |
[Grunt clean](https://github.com/gruntjs/grunt-contrib-clean) "cleans" or removes all files in the distribution folder (`dist`) so that logic in stylesheets, templates, or scripts isn't accidentally overridden by previous code in the directory. |
[Grunt Hapi](https://github.com/athieriot/grunt-hapi) runs a server using [`HapiJS`](http://hapijs.com/). Happy is a Node web application framework with robust configuration options. |
