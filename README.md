<p align="center">
    <h1 align="center">Gatsby starter blog</h1>
    <p align="center">A file-driven generator made with Gatsby.js for creating a fast loading, customizable, scalable and SEO-friendly blogs</p>
</p>

[![Build Status](https://travis-ci.org/lgcolella/gatsby-starter-blog.svg?branch=master)](https://travis-ci.org/lgcolella/gatsby-starter-blog)
[![Maintainability](https://api.codeclimate.com/v1/badges/aab01710cf46beab74ed/maintainability)](https://codeclimate.com/github/lgcolella/gatsby-starter-blog/maintainability)

## Summary

* [Stack](#-stack)
* [Features](#-features)
* [Guide](#-guide)
* [Credits](#-credits)

## 🔧 Stack

[![Gatsby JS](https://github.com/lgcolella/gatsby-starter-blog/raw/master/repository/gatsby.png "Gatsby JS")](https://www.gatsbyjs.org/)
[![React JS](https://github.com/lgcolella/gatsby-starter-blog/raw/master/repository/react.png "React JS")](https://reactjs.org/)
[![GraphQL](https://github.com/lgcolella/gatsby-starter-blog/raw/master/repository/graphql.png "GraphQL")](https://graphql.org/)
[![TravisCI](https://github.com/lgcolella/gatsby-starter-blog/raw/master/repository/travis.png "TravisCI")](https://travis-ci.org/)

## 🔌 Features

* Content
    - Posts in Markdown
    - Syntax highlighting
    - Images optimized for fast loading
    - Support for multi-language posts
    - Tags
    - Archive
    - Various available icon sets: Material Design, Font Awesome, Ionicons, Typicons, Github Octicons, Feather
    - Social share buttons
    - Comments (Disqus)
    - RSS Feed
    - Favicon
    - Web App Manifest (manifest.json)
* Style
    - Less styling
    - Responsive design
* SEO
    - OpenGraph Tags
    - Twitter Tags for Twitter Cards
    - HTML hreflang attribute for multi-language versions posts
    - Sitemap
    - Roboto.txt file
* Development tools
    - ESlint for linting
    - Prettier for code style
    - TravisCI support

## Guide

* [How add a translated version of a post](#How-add-a-translated-version-of-a-post)

### How add a translated version of a post

1. Choose in the ```content``` path the folder of the post to translate.
2. Place here the translated version of post and rename the file with the [ISO](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) code according to its language (ex. ```index.it.md```, ```index.de.md```).

You've finished! Now in your post you'll get a link to translated version and viceversa.

Metatags for [SEO](https://support.google.com/webmasters/answer/189077) are automatically added in each version of post pages using the ISO code choosen for the filename. Tags will only be added for posts with translated versions.
Note that for ```index.md```, the ISO code used in metatags is taken from the ```config.js```' variable ```defaultLanguage```.

## 📃 Credits

* 404 page's image by [Freepik](https://www.freepik.com/free-vector/404-error-web-template-with-bored-cat_2234126.htm)