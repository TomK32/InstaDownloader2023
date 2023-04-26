# InstaDownloader2023

An open source Firefox and Chrome Extension which creates an download button for instagram images and videos on the right of the
bookmark icon.

## General Download

A download button appearers on a post next to the bookmark button


## Development

### Getting started

The main class is (obviously) the `index.ts`. Here the different downloaders subscribe to the `URLChangeEmitter` which
in turn notifies the different downloaders when they should be added to the page.  
The collection of the image links is handled in the downloaders. The retrieved image links get send to the background
script where the download happens.

### Building

The build script depends on linux, especially on the zip util which should be included in most linux distros. Building
in Windows is only partially supported.  
To Execute the build script run `npm install` and after the installation is complete execute `webpack`. There are
different flags which change the build.

- _--watch_ starts the build in watch mode and rebuilds the project if files get changed
- _--mode=production_ generates a production build without source maps and logging. In addition to these changes a zip
  files for the different browsers will get generated and linted.
- _--mode=development_ generates a development build with source maps and logging. No zip files get generated and no
  linting script gets executed.

The two flags can be combined if needed `webpack --mode=production --watch`.

## Credits

- The original addon from which this forked the last open source version [IGDownload by HuiiBuh](https://github.com/HuiiBuh/InstagramDownloader)
- The files get zipped with [JSZip](https://github.com/Stuk/jszip)
- Error logging inspired by [refined-github](https://github.com/sindresorhus/refined-github)
- The Download Icon is from [ShareIcon](https://www.shareicon.net/instagram-social-media-icons-880117) and was created
  by [Aarthi Padmanabhan](https://www.shareicon.net/author/aarthi-padmanabhan)
- The PayPal Icon is from [Wikipedia](https://wikipedia.org)
- The close icon is from [Google material design icons](https://github.com/google/material-design-icons)
