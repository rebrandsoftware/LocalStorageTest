i18next2json
============
by Mike Gibson - Rebrand Software, LLC<BR />
mike@rebrandsoftware.com<BR />
<a href='http://www.rebrandsoftware.com'>http://www.rebrandsoftware.com</a><BR />
twitter:<a href='http://www.twitter.com/MikeKGibson'>@MikeKGibson</a><BR />

Description
============
i18next2json converts i18next tagged HTML and Javascript content to a JSON file for translating.

Usage
============
Run the included index.html in a browser.  Paste the HTML and Javascript from your project into the respective text areas (you can paste multiple pages/files at once).

The data-i18n HTML tags will be extracted using the data-i18n value as the key and the HTML content as the key value.  If a target like [placehoder] is embedded in the tag, the key value will be extracted from the target attribute.

The i18n.t() Javascript functions will be extracted resulting in a JSON file containing all the keys in your project which can be translated.  If a comment followed by text in quotation marks is found after the i18n.t() function it will be used for the key value.  For example var exit = i18n.t('app.reallyExit'); //"Are you sure you want to exit now?". 

License
============
The MIT License

Copyright (c) 2013 Michael Gibson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.