# Principium [![Build Status](https://travis-ci.org/nelsonic/valens.png?branch=master)](https://travis-ci.org/nelsonic/valens) [![Dependencies](https://david-dm.org/nelsonic/valens.png)](https://david-dm.org/nelsonic/valens)

## A Simple Text Editor

### Define Basic Features

- New Text "File" (record)
- Input Text in textarea
- Save Text on Client Side (pushes to server)
- Save Text Server Side to FS/Data Store
- Display confirmation in Browser with URL of record

#### App Should Accept HTTP Connections

A GET request to / (root url) should return the default ("home") page.





#### Display a Record

When navigating to the url corresponding to a existing record we 
should see that record displayed in the editor.





## History

### Which Template Engine/Language Should We Use?

While [**Jade**](http://jade-lang.com/) (the Express.js default engine) 
is very *elegant*, it has several *glaring issues*:

- (Steep) **Learning Curve** for New Developers (new syntax to learn)
- **Slow**er than alternatives (see: http://ectjs.com/#benchmark)
- **Server Only** (not *designed* for use in client-side)

In a previous project we 
used [ECT](http://ectjs.com/) but it allows too much "***logic in views***"
(which should be *avoided*) and does not have any unit tests 
https://github.com/baryshev/ect so we can't rely on it to *not break*... 

A list of express-compatible templating/redering engines is available at:
https://github.com/visionmedia/consolidate.js

- SWIG: https://github.com/paularmstrong/swig
looks a lot more serious about quality.
good documentation: http://paularmstrong.github.io/swig/

- Dust.js: http://akdubya.github.io/dustjs/ the simplicity appeals to me.
rather than having to type `<%= name %>` its just `{name}`
and dust automatically escapes all content so risk of XSS is greatly reduced.
we can have a watcher in the IDE for the use of un-escaping.

- Handlebars would be an option: https://github.com/ericf/express3-handlebars
but as the LinkedIn article above notes, dust offers all the advantages of 
handlebars and mustache... so why not just use dust? :-D

- underscore.js tempates:
http://underscorejs.org/#template
downside is that underscore allows *arbitrary javascript code execution* 
`<% alert("pwnd!") %>` so we would need to do extra checking
to confirm novice users are (accidentally) breaking things...

Found this overview on the LinkedIn engineering blog:

- Discussion on (Client Side) Templating:
http://engineering.linkedin.com/frontend/client-side-templating-throwdown-mustache-handlebars-dustjs-and-more

Based on LinkedIn & PayPal's use of dust I was tempted to use it, but...
the current node (express) module https://github.com/swider/express-dust 
has **no unit tests**! (LinkedIn are not using dust with Node...)

I could work on retrospectively writing unit tests for express-dust
or try and implement my own render engine using dust core ...



### Which 3rd Party Modules Can/Should We Use?

As appealing as it is to build everything from scratch, it makes sense to use
a *selection* of 3rd party modules that already cover many of our use cases.

We need an agreed process for selecting 3rd party modules.

- Is the module writtten in JavaScript (can we read the source)?
- Does the module have 100% unit test coverage?
- Is it **stable** (e.g. Travis build passing)?
- **Actively developed** or collecting dust?

Is it *worth* doing a flow/decision **diagram** for this...?

### Which Test Should We *Write* First?

**Terminology** - For simplicity I refer to the Text data as a "**record**".
(we *could* call it a "File" or "Document" but I want to keep it *generic*)

Lets start with server-side creating the *new* file/record 
(if a filename/record is *not* specified)

At the simplest level we need to save the record to the filesystem (**FS**). 
<br />Not all [PAAS](http://en.wikipedia.org/wiki/Platform_as_a_service) allow 
*direct* fs access. (Erm, cough! @heroku!)
So the first we need to test if **fs** (write) is available!

#### Basic FS Tests:

- **read** from the current working directory
- **read** specific (predefined) file
- **write**/update specific file
- ~~create ./test/**tmp** (temporary directory)~~ ()
- **create** a new file and write to it

Travis gives error: **Uncaught Error: ENOENT, open**
see: https://travis-ci.org/nelsonic/valens/builds/14895407

Spent ages trying to solve it. Decided to try a domain:
http://shapeshed.com/uncaught-exceptions-in-node/

But Travis does not *like* the idea of creating a new file...

See: https://travis-ci.org/nelsonic/valens/builds/14948654

What if we simplify the test...?
Create the (temporary file in the current working directory) **__dirname**

Test passes but temporary file does not get deleted...
Submitted issue to Mocha: https://github.com/visionmedia/mocha/issues/1058

Got a reply to my issue on GitHub.
[travisjeffery](https://github.com/travisjeffery) recommended using the 
**done()** method in my last test.

Tried it. temporary file still present. :-(

Turns out problem was because files were being created in CWD not script dir.
fixed by changing **__dirname** to **process.cwd()**


References

- fs.mkdir: http://nodejs.org/api/fs.html#fs_fs_mkdir_path_mode_callback
- fs.unlink: http://nodejs.org/docs/latest/api/fs.html#fs_fs_unlink_path_callback


- - -

### Which Testing Framework?

I would ***love*** to have *time* to write my own unit testing framework...!
I've used all the major Node.js testing frameworks and found all lacking! :-(

### Features of a Unit Testing Framework

A few features of a Unit Tesing Framework:

- **Generic** (test any code regardless of platform)
- Run in the **Command Line** *or* **Browser** (same results for both)
- Easy to **Write** Tests (I want non-technical people to write tests!)
- Easy to **Read** Tests (Anyone can read the test name and results)
- Timer for *Each* Test (to detect if things are slowing down when refactoring)
- Display Progress over time
- Show **Code Coverage** on feature/functional basis and as a whole

Some of these features already exist, others not yet ...

In the interest of getting *started* I'm going to use *Mocha* because it allows
 us to use **Istanbul** code coverage. This is *rudimentary* (IMO) but its 
the best we *have* till we *build* a better solution.... 

If you don't know Mocha, see: https://github.com/nelsonic/learn-mocha

- - -

## Tangental 

### Project Name

if you're wondering why I called this project "Valens"
see: http://translate.google.com/#la/en/valens

### Which FONT for Programming?

How much detail is **too much detail**...?
http://hivelogic.com/articles/top-10-programming-fonts


### To Grid or Not to Grid?

http://stackoverflow.com/questions/3540194/how-to-make-a-grid-like-graph-paper-grid-with-just-css
http://stackoverflow.com/questions/4172246/grid-drawn-using-a-canvas-element-looking-stretched
http://stackoverflow.com/questions/2588181/canvas-is-stretched-when-using-css-but-normal-with-width-height-properties


### Text Area Highlight

http://stackoverflow.com/questions/3549250/highlighting-a-piece-of-string-in-a-textarea

### Node Assert

- Official Documentation: http://nodejs.org/api/assert.html

### Self Documenting Code

My biggest annoyance with [JSDoc](http://usejsdoc.org) is that 
it requires ***Java***! :-(
Why can't we just parse the .js file to find comments and 
