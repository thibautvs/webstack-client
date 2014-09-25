<img src="http://thibautvs.com/blog/img/urge2code/webstack.png" />



#Philosophy

WebStack was designed to be :

* **Reliable** : technologies on which your business can confidently rely upon
* **Performant** : to build great products and great user experiences
* **Productive** : for fast time to market, quick iterations and staying ahead of competition
* **API first** : the web client is considered one of the many potential clients (smartphones, watches)
* **Business ready** : scalable codebase, multi-lingual support, authentication + roles, etc
* **Open source** : innovative, lightweight and standards-compliant technologies

The WebStack logo is purple, the color of good judgment.

#Technology Stack

The client part of WebStack is composed of the technologies listed below. For the rationale behind these choices,
please refer to the [Design Decisions](#design-decisions) section.

* HTML5
* CSS3
* SASS
* JavaScript
* AngularJS
* Gulp
* JsHint
* Karma / Protractor
* Mocha / Chai / Sinon
* PhantomJS
* Zurb Foundation Grid
* Normalize CSS
* Bower
* LiveReload


# Documentation

WebStack contains all the necessary elements to start new developments, namely :

* AngularJS setup : working controllers, views, directives, factories, filters and services
* Project structure : files organized for easier maintenance and scalability
* Styles setup : Normalize.css, SASS compilation with source maps support, must-have mixins and responsive grid (Zurb Foundation)
* 3rd party dependencies management (Bower)
* Minification, bundling, and other tasks management with development and production modes (Gulp)
* JS errors reporting and code quality inspection (JSHint)
* Unit and end-to-end tests configuration (Karma/Protractor/Mocha/Chai/Sinon/PhantomJS)
* Global error handling and authentication (HTTP interceptors)
* i18n and l10n
* Wiring with a ReST API
* Lightweight development web server with LiveReload support
* ...

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
npm install --development
npm install karma-cli -g
npm install protractor -g
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
the app changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

To run the application in development mode, use the `gulp --dev` command
(or the alias `npm start`). Development mode skips the bundling and minification
process for easier debugging, generates SASS source maps, watches for file changes
to retrigger related tasks automatically (such as SASS compilation, for example)
and starts a light development web server configured with [LiveReload][livereload].

The app can then be accessed at `http://localhost:8080`.

Production mode is obtained by simply running the `gulp` command.



## Directory Layout

    app/                --> all of the files to be used in production
      sass/             --> sass files
        app.scss        --> main stylesheet
      img/              --> image files
      index.tmpl        --> app layout file (the main html template)
      js/               --> javascript files
        app.js          --> application
        controllers     --> application controllers
        directives      --> application directives
        factories       --> custom angular factories
        filters         --> custom angular filters
        services        --> custom angular services
      views/            --> angular views (partial html templates)
        home.html
        about.html

    test/               --> test config and source files
      protractor-conf.js    --> config file for running e2e tests with Protractor
      e2e/                  --> end-to-end specs
        scenarios.js
      karma.conf.js         --> config file for running unit tests with Karma
      unit/                 --> unit level specs/tests
        controllers-spec.js      --> specs for controllers
        directivess-spec.js      --> specs for directives
        filters-spec.js          --> specs for filters
        services-spec.js         --> specs for services


## Testing

There are two kinds of tests in the application: Unit tests and End to End tests.

### Running Unit Tests

The app comes preconfigured with unit tests. These are written in
[Mocha][mocha]/[Chai][chai]/[Sinon][sinon], which are run with the [Karma Test Runner][karma].
A Karma configuration file is provided to run them.

* the configuration is found at `test/karma.conf.js`
* the unit tests are found in `test/unit/`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```


### End to end testing

The app comes with end-to-end tests, written in [Mocha][mocha]/[Chai][chai]/[Sinon][sinon].
These are run with the [Protractor][protractor] End-to-End test runner.

* the configuration is found at `test/protractor-conf.js`
* the end-to-end tests are found in `test/e2e/`

A web server needs to be serving up the application, so that Protractor can interact with it.

```
npm start
```

or

```
gulp --dev
```

In addition, WebDriver needs to be installed since Protractor is built upon it:

```
npm run update-webdriver
```

Then, the end-to-end tests can be run using the following command:

```
npm run protractor
```


## JSHint

Gulp will run [JSHint][jshint] to perform JS inspection and report errors. If there are any, you will
find information about these in `logs/js-hint.txt`

## Updating the application

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


```
npm run update-index-async
```

This will copy the contents of the `angular-loader.js` library file into the `index-async.html` page.
You can run this every time you update the version of Angular that you are using.


### Running the App during Development

The app comes preconfigured with a local development webserver. This is because opening html pages via
the `file://` scheme instead of `http://` prevents things like cookies, xhr, etc to function properly.
The server is started automatically by gulp in development mode and can also be started with `npm start`.

Alternatively, you can choose to configure your own webserver, such as nginx. Just
configure your server to serve the files under the `app/` directory.


### Running the App in Production

Run the `gulp` command to perform compilation, minification and bundling of assets.


# Design Decisions

The goal of this section is to document the design decisions so that developers can better understand the process that has led to the assembling of WebStack. This can also serve as a base for future discussion when challenging particular decisions and find out why it has been implemented like that in the first place.

* **MVC framework** : [AngularJS][angularjs] has been chosen. There are 2 other contenders : [Backbone][backbonejs] and [Ember][emberjs]. Backbone has been quickly eliminated as it does much less than the other frameworks (no controllers, no data-binding out of the box, ...) and a lot of boilerplate code is necessary. And Because backbone isn't an opinionated framework, every developer might have a different implementation for a given problem, leading to finding resources on the web more difficult from a consistency point of view. Then there's Ember, which is a really good framework, comparable to Angular from a feature perspective, but the fact that there's much less traction with it (including less books than Angular on Amazon), the fact that most of full stack JS articles on the Web have favored Angular instead of Ember makes it a more interesting choice. Also, Angular benefits from corporate backing (Google – in a similar fashion to [Joyent][joyent] backing [Node][node]) meaning that several engineers are being paid to work on it. It is said by many that AngularJS is generally simpler than Ember, with a lower learning curve. Ember is however recommended when it comes to building huge apps (millions of LoC). Finally, the fact that many job offers on the web currently demand Angular instead of Ember and a lot of people having prior experience with Angular are other strong arguments to finalize this choice.

* **Folder structure** : there are [3 main patterns of project structure organization][folderstruct] in Angular. The file pattern is quickly left off as it's more appropriate for little POCs than real projects (a single Controllers.js file will quickly become a mess). Then there's the folder pattern, the one that has been preferred (a folder for Controllers, a folder for Directives, etc). And finally, the last pattern (module pattern) which is certainly more appropriate for huge applications where teams can split the work between modules and even reuse them. Articles on the Web mention that people using this organization pattern had hundreds of controllers, which is really a far cry from the needs of typical projects.

* **Testing** : [Karma][karma] (developed by the Angular team) is a test runner for unit testing, and [Protractor][protractor] (based on [Selenium][selenium]) is intended for end to end or integration testing. These come bundled with [angular-seed][ngseed]. There's no point is questioning those as they are considered standard choices by the community and it seems there are no alternatives anyway. Then comes the choice of the testing library. There are 3 main contenders : [QUnit][qunit], [Jasmine][jasmine] and [Mocha][mocha] (that has to be complemented with other libraries). QUnit is the oldest one and, according to many articles, the less capable of the 3 (lacks a fluent syntax, hard to do asynchronous testing, no baked-in headless support, ...). So that leaves us with Jasmine and Mocha. Jasmine focuses on a BDD syntax, while Mocha is more flexible but requires other libraries to be plugged-in, such as Chai, an assertion library allowing to choose between a Should/Expect/Assert syntax, and SinonJS for test spies, stubs and mocks. The investigation led to the conclusion that Mocha is more flexible and has more features (test reporters, code coverage, etc). It is also the testing framework that is the most popular when it comes to Node testing, and because Node is used in the server part of WebStack, it's a point worth considering. Mocha is also better when it comes to testing asynchronous JS (and there will be a lot), as this [article from Martin Fowler][fowlertest] explains. Finally, several users complained on the web that Pivotal Labs (the company behind Jasmine) isn't very reactive when it comes to pull requests (several months). So Mocha was the preferred choice, with Chai as assertion library and sinon for spies (the most popular combination). When it comes to unit tests, [PhantomJS][phantomjs] is used (headless browser) so a browser window doesn't pop up when running these tests. Real browsers are used when it comes to end-to-end testing.

* **Task runner** : to main contenders here : [Grunt][gruntjs], which has been the go-to task runner so far and [Gulp][gulpjs], a new contender considered by some to have [dethroned Grunt][dethroned]. It's a tougher choice here because Grunt is really mature and used a lot in the community (and even [made it to job descriptions][jobdesc]), configured by default in angular-seed with running tests etc, so it seems like a very good choice. But further investigation and discussions with other developers have led to the conclusion to use Gulp for the following reasons : it's stream-based, so it's not writing tmp files to disk like Grunt (minification, bundling, etc) and will lead to increased performance of everything task-related. Some users reported that their build when from several seconds using Grunt (they hit refresh and didn't see their changes and had to refresh again) to a matter of milliseconds with Gulp when it comes to large projects. Even if it will be less noticable on smaller projects, Gulp is a future-proof solution. Second, there are already lots of [Gulp plugins][gulpplugins] so it really caught up with Grunt on that part. And lastly, [Gulp is code-based][codebased] (writing JS code in node) instead of [config-based in Grunt][configbased] (JSON file) and is thus more intuitive to developers.

* **Styles** :

  * **CSS preprocessor** : [Sass][sass] with the scss syntax have been chosen. This is widely considered by the community as a superior alternative to [Less][less] (no real mixins, ...) and [Stylus][stylus] (syntax too different from CSS, not actively maintained anymore). In development mode, sourcemaps are being provided to facilitate css debugging.
  
  * **Reset file** : [Normalize.css][normalize] has been prefered over [ResetCSS][reset] because it preserves browser defaults and builds upon them instead of unstyling everything and fixes bugs out of scope of ResetCSS, among other things. Also, Normalize.css is being used by Zurb Foundation and Twitter Bootstrap. More info can be found in this [article about Normalize][normalizearticle].


  * **Responsive grid** : [Zurb Foundation][foundation] has been preferred over [Twitter Bootstrap][bootstrap] because [more advanced and robust][moreadvanced], even though the difference is minor. The class names are also more intuitive in Foundation than in Bootstrap (ex: "large-4 columns" vs ".col-lg-4").
  
* **JS code inspection** : 2 main competitors : [JSLint][jslint] and [JSHint][jshint]. JSLint is the original initiative, maintained by Douglas Crockford, JS Architect at Yahoo. This tool is extremely severe (eg: a couple of lines of what you consider perfectly valid JS will trigger errors because things have to be indented in a specific way, etc). So that's why the community created JSHint, a tool where there is not a single authority declaring how JS must be written, more pragmatic when it comes to reporting : many developers abandonned JSLint because of the amount of ridiculous errors they had, creating noise around more compelling warnings/errors. [JSHint can be configured][jshintconfig] to determine which rules the inspection process has to validate, which can't be done with JSLint. Thus JSHint was selected as a task executed by Gulp, which produces a js-hint.txt report file in the logs folder.

* **3rd party libraries** : the only external libraries added to the project are AngularJS, NormalizeCSS (see reasoning about those above) and Html5shiv as a much more lightweight alternative to Modernizr, conditionally included for IE < 9. It was decided not to include jQuery as all these tasks are now supposed to be accomplished in Angular. It's especially important for developers new to this technology to learn to do things "the Angular way" (no logic in views, super thin controllers, DOM manipulation only in directives, services instead of direct AJAX calls, among many other things). jQuery could still be added later on if absolutely needed.

* **Static resources delivery** :

  * **CDN** : no CDN will be used for external libraries such as Angular. The 1st reason is because Bower is used to manage dependencies so their versioning is centralized there. No specific version (including last version) of a library should be hardcoded in a script tag. The 2nd reason is to be able to minimize HTTP requests by bundling the assets in 1 CSS file and 1 JS file. Those will include application-specific code plus external libraries as well.

  * **Bundling** : when it comes to the strategy of serving CSS and JS files, it was decided not to opt for page-specific CSS and JS files, but rather include them bundled and minified in index.html. These files will be downloaded during the 1st request and will be cached client-side for all subsequent requests. The 1st page load is thus a bit slower, but then everything is faster as additional JS and CSS files never have to be downloaded, which makes for a better UX. This is an interesting strategy provided that you don't deploy too often (unlike some startups that do it many times a day).

  * **Cache invalidation** : performed by fingerprinting the bundles.

  * **Sync/async** : the scripts won't be downloaded asynchronously, as there's only one JS bundle.

  * **Minification** : CSS and JS files are being minified for production. HTML files won't be minified as, if things are being done properly, are going to be served gzipped anyway.


[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[mocha]: http://visionmedia.github.io/mocha/
[chai]: http://chaijs.com/
[sinon]: http://sinonjs.org/
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
[jslint]: http://www.jslint.com/
[jshint]: http://www.jshint.com/
[jshintconfig]: http://www.jshint.com/docs/options/
[livereload]: http://livereload.com/
[angularjs]: http://angularjs.org/
[backbonejs]: http://backbonejs.org/
[emberjs]: http://emberjs.com/
[joyent]: https://www.joyent.com/
[folderstruct]: https://medium.com/opinionated-angularjs/scalable-code-organization-in-angularjs-9f01b594bf06
[selenium]: http://www.seleniumhq.org/
[ngseed]: https://github.com/angular/angular-seed
[qunit]: http://qunitjs.com/
[jasmine]: http://jasmine.github.io/
[fowlertest]: http://martinfowler.com/articles/asyncJS.html
[phantomjs]: http://phantomjs.org/
[gruntjs]: http://gruntjs.com/
[gulpjs]: http://gruntjs.com/
[dethroned]: http://www.100percentjs.com/just-like-grunt-gulp-browserify-now/
[jobdesc]: http://www.careerbuilder.com/jobs/keyword/grunt
[gulpplugins]: http://gulpjs.com/plugins/
[codebased]: https://github.com/gulpjs/gulp/blob/master/README.md#gulp-----
[configbased]: http://gruntjs.com/api/grunt.config
[sass]: http://sass-lang.com/
[less]: http://lesscss.org/
[stylus]: http://learnboost.github.io/stylus/
[normalize]: http://necolas.github.io/normalize.css/
[reset]: http://meyerweb.com/eric/tools/css/reset/
[normalizearticle]: http://nicolasgallagher.com/about-normalize-css/
[foundation]: http://foundation.zurb.com/
[bootstrap]: http://getbootstrap.com/
[moreadvanced]: http://blog.teamtreehouse.com/use-bootstrap-or-foundation
