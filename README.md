# Personal Résumé

![Job Search](https://img.shields.io/badge/looking%20for%20work-no-green)

> PDF generator for my professional résumé/CV powered by [Electron](https://www.electronjs.org/)

## Why?

I have a background in digital media and have used Photoshop, Illustrator, and/or InDesign to create my résumés for years (not Microsoft Word... never Word).
I've come to realize that building flashy documents in HTML and CSS has a few advantages over the traditional methods:

* Simple and familiar version control
* Reusable styles and layout
* I get to flex by having an open source résumé 💪

That said, I tend to have strong opinions about typography and layout. Any old document templating app or online service just won't do.
Rather than scour the internet for a solution I can do myself, I just did it myself.

## How?

I've been building desktop apps in Electron since 2016, and it's become my go-to any time I want to build a quick GUI.
By leveraging Electron's [webContents API](https://www.electronjs.org/docs/api/web-contents#contentsprinttopdfoptions), we can easily save styled HTML as a PDF.

The juicy info is defined in `resume.json` and loaded into an HTML template using [EJS](https://ejs.co/) via [ejs-electron](https://github.com/bowheart/ejs-electron). From there, I can preview the document in a `BrowserWindow`, inspect the layout with `devTools`, and tweak `style.css` as needed.

My contact info is stored in private environment variables so as not to publish them to the weird and wild internet. If you want to get in touch, feel free to message me on [LinkedIn](https://www.linkedin.com/in/joshua-chumbley-793a46156/).

## Run the App

* Make sure you've installed [Node.js](https://nodejs.org/)
* Clone this repo `git clone https://github.com/jdchum/Resume`
* Install dependencies `cd Resume && npm install`
* Set the following environment variables (you cannot run the app without them):
  * `RESUME_LOCATION`
  * `RESUME_PHONE`
  * `RESUME_EMAIL`
* Preview the document by running `npm start`
* Save the document to `resume.pdf` by running `npm run pdf`*

*\*The resulting PDF is quite large (around 2.5MB). I optimize the file using [Adobe's online PDF compression tool](https://www.adobe.com/acrobat/online/compress-pdf.html) to get the flle size down to about 50KB if I plan on sending it to someone. I'd like to automate this part, but the solutions I've found are either paid ([PDFTron](https://www.pdftron.com/documentation/samples/node/js/OptimizerTest)) or reduce the quality of the text to an unacceptable degree ([GhostScript](https://ghostscript.com/)).*
