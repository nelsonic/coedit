# Principium [![Build Status](https://travis-ci.org/nelsonic/valens.png?branch=master)](https://travis-ci.org/nelsonic/valens) [![Dependencies](https://david-dm.org/nelsonic/valens.png)](https://david-dm.org/nelsonic/valens)

## A Simple Text Editor

### Define Basic Features

- New Text "File" (record)
- Input Text in textarea
- Save Text on Client Side (pushes to server)
- Save Text Server Side to FS/Data Store
- Display confirmation in Browser with URL of record

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


References

- fs.mkdir: http://nodejs.org/api/fs.html#fs_fs_mkdir_path_mode_callback


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
