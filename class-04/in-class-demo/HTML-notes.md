# HTML Notes

* Why do we use HTML?
  * To structure our web pages
  * Elements are used for structure
  * CONTENT

* You can nest elements inside of other elements

## ANATOMY of Tags & Elements

* `<h1>Content Goes Here<h1>`

## Attributes

* Attributes are hidden
* Included in the opening tag
* Attributes allow you to assign classes, ids, etc. -- comes in handy for CSS purposes
* Provides additional information to the tag

* `<img src="file-or-url-goes-here" alt="Descriptive text about image goes here"></img>`

* `<img src="source" alt="alt text" />`

* `<img></img>`

* `<p id="most-important-text">I'M IMPORTANT</p>`

## Semantic Elements

What is a semantic element?
* Heading - display a heading
* p - paragraph element, displays text
* img - displays an image
* header/main/footer

<header>
<main>
<footer>

## BASIC HTML PAGE STRUCTURE
```html
<!DOCTYPE HTML>
<html>
  <head>
    INFO FOR THE BROWSER GOES HERE, not visible to users
    <title>Name of my site</title>
  </head>
  <body>
    CONTENT GOES HERE
  </body>
</html>
```