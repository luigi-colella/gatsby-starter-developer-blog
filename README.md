<p align="center">
    <h1 align="center">Gatsby starter developer blog</h1>
    <p align="center">A file-driven generator made with Gatsby.js for creating fast loading, customizable, scalable and SEO-friendly blogs.</p>
    <p align="center">If you are looking for a site <strong>ready to go in production</strong> and with <strong>most common features out of the box</strong>, you should give a change to this starter! Not every blog needs of a CMS or other complex solutions. This blog is made for who want share its thoughs in minutes without care of SEO, server or database concerns. <strong>You can deploy it on the host you want at the cheapest price</strong> because it is built only with HTML, CSS, JS and it doesn't need of backend to work. It is <strong>mostly designed for blogs and portfolios</strong>. But despite the fact that it allows to automates the most common features of these types of site (ex. tags, SEO, archive...), it is high customizable and extensible.</p>
</p>

[![Build Status](https://travis-ci.org/lgcolella/gatsby-starter-developer-blog.svg?branch=master)](https://travis-ci.org/lgcolella/gatsby-starter-developer-blog)

## Summary

* [Stack](#-stack)
* [Features](#-features)
* [Guide](#-guide)
* [Credits](#-credits)
* [Contribute](#-how-contribute)

## 🔧 Stack

[![Gatsby JS](https://github.com/lgcolella/gatsby-starter-blog/raw/master/repository/gatsby.png "Gatsby JS")](https://www.gatsbyjs.org/)
[![React JS](https://github.com/lgcolella/gatsby-starter-blog/raw/master/repository/react.png "React JS")](https://reactjs.org/)
[![Less](https://github.com/lgcolella/gatsby-starter-blog/raw/master/repository/less.png "Less")](http://lesscss.org/)
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
    - Dark and Light themes
* SEO
    - OpenGraph Tags
    - Twitter Tags for Twitter Cards
    - HTML title and alt attributes for post's cover
    - HTML hreflang attribute for multi-language versions posts
    - Sitemap
    - Roboto.txt file
* Development tools
    - PropTypes for checking data passed to components
    - ESlint for linting
    - Prettier for code style
    - TravisCI support

## 📓 Guide

* [How add a post](#How-add-a-post)
* [How edit metatags of a post](#How-edit-metatags-of-a-post)
* [How add a translated version of a post](#How-add-a-translated-version-of-a-post)
* [How change theme](#how-change-theme)

### How add a post

1. Create a folder in the ```content``` path. Since folder's name will not be used in any part of site, you can rename it as you want in order to organize better your contents (ex. ```2019-01-20-my-post```).
2. In this folder create a file ```index.md```.
3. At the beginning of file, insert two ```---```, one above of the other. They are separators to define post's metatags.
4. Between above two separators, insert metatags. They are couples key/value to define additional info useful for process your post. Read [here](#How-edit-metatags-of-a-post) for more info about them.
5. Under the second separator ```---``` write your post using [Markdown syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/).

### How edit metatags of a post

Metatags are additional informations that you provide in your posts to allow them to be processed correctly.
Some metatags are used for some site's features and others for SEO purposes. You have to list all fields but you can omit values of non-mandatory ones.
Here a table for list them and explain how use each one.

| **Metatag name** | **Description** | **Mandatory (Yes/No)** |
| --- | --- | --- |
| title | The title of your post | Y |
| path | (Relative) url path of your post | Y |
| date | Date of your post | Y |
| tags | Tags to which your post belongs | Y |
| excerpt | A brief summary of your post | N |
| cover | Relative path of post's image preview | Y |

*Example*
```
title: My new blog post
path: blog/my-new-blog-post
date: 2019-01-20
tags: [technology, seo, writing]
excerpt: In this post we'll see a post example...
cover: ./preview.png
```

### How add a translated version of a post

1. Choose in the ```content``` path the folder of the post to translate.
2. Place here the translated version of post and rename the file with the [ISO](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) code according to its language (ex. ```index.it.md```, ```index.de.md```).

You've finished! Now in your post you'll get a link to translated version and viceversa.

Metatags for [SEO](https://support.google.com/webmasters/answer/189077) are automatically added in each version of post pages using the ISO code choosen for the filename. Tags will only be added for posts with translated versions.
Note that for ```index.md```, the ISO code used in metatags is taken from the ```config.js```' variable ```defaultLanguage```.

### How change theme

Themes available with this starter are in ```src/style/themes```, but you can also create your own following these as example. Import what you prefer in ```src/style/index.less``` file.

## 📃 Credits

* 404 page's image by [Freepik](https://www.freepik.com/free-vector/404-error-web-template-with-bored-cat_2234126.htm)
* Flag icons by [Freepik](https://www.flaticon.com/packs/countrys-flags)

## 🤝 How contribute

Everyone can contribute to enhance this starter! Here a not-exhaustive list of how to do.

- If you are a *developer* you can improve the code.
- If you are a *designer* you can propose new themes or enhance the UX.
- If you are a *blogger* you can propose new features that you would have.
- If you are a *user* you can improve the guide or give me a feedback.

Even the smallest help is precious and matters to improve this project!
