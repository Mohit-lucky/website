# Fruitful.js website

This is the website that powers http://fruitfuljs.org! It's built using
[choo](http://choo.io), [browserify](http://browserify.org/) and
[tachyons](http://tachyons.io). It's hosted on [GitHub Pages](http://pages.github.com).

## Contributing

This project follows the general guidelines on contributing enforced throughout
the organization. Basically, if you get your Pull Request merged, you will
receive write access for this repository and get invited to the GitHub
organization.

## Local Setup

In the case that you want to work on this project, it's very simple to get
running locally. First off, you need to clone this repository to your
computer:

```sh
git clone https://github.com/fruitfuljs/website fruitful-website
cd fruitful-website
```

Then, you can install the npm dependencies and start a development server:

```sh
npm install
npm start
```

Running `npm start` opens a `bankai` (a browserify-based build tool) server
that can be accessed at http://localhost:3001! This server unfortunately doesn't
support live-reload, so you'll need to manually refresh the page every time
you made an edit.

## Site Structure

All of the routes are kept in `index.js`. When adding a new page, don't forget to
import your view file and also add a new route.

Views are mostly correspondent to separate pages and are found in the `views/` subfolder.
They can be pretty simple, see the `views/conduct.js` page for an example.

## Deploying

To deploy the site to GitHub Pages, you can run `npm run deploy`. This will
compile the site and automatically push the result to the `gh-pages` branch.
Make sure that you have write access before you run this.
