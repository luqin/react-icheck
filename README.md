# React-iCheck

[![NPM version][npm-badge]][npm] [![Build Status][travis-ci-image]][travis-ci-url]

[![Dependency Status][deps-badge]][deps]
[![devDependency Status][dev-deps-badge]][dev-deps]
[![peerDependency Status][peer-deps-badge]][peer-deps]

[iCheck](https://github.com/fronteed/icheck) components built with [React](http://facebook.github.io/react/). **No jQuery and Zepto** 

Online demo: http://luqin.github.io/react-icheck

**Note: React-iCheck still in development**

![Skins](http://fronteed.com/iCheck/examples.png)


## Features

* **Identical inputs across different browsers and devices** — both [desktop and mobile](#browser-support)
* **Touch devices support** — iOS, Android, BlackBerry, Windows Phone, Amazon Kindle
* **Keyboard accessible inputs** — `Tab`, `Spacebar`, `Arrow up/down` and other shortcuts
* **Customization freedom** — use any HTML and CSS to style inputs (try [6 Retina-ready skins](http://fronteed.com/iCheck/))
* **No jQuery and Zepto**
* **Screenreader accessible inputs** &mdash; [ARIA](https://developer.mozilla.org/en-US/docs/Accessibility/ARIA) attributes for VoiceOver and others
* **Lightweight size**


**By default, iCheck doesn't provide any CSS styles for wrapper divs** (if you don't use [skins](http://fronteed.com/iCheck/)).


## Usage

```sh
npm install react-icheck icheck --save
```

```js
import 'icheck/skins/all.css'; // or single skin css

import {Checkbox, Radio} from 'react-icheck';

// Checkbox with label
<Checkbox
  checkboxClass="icheckbox_square-blue"
  increaseArea="20%"
  label="Checkbox"
/>

// without label
<Checkbox
  id="checkbox1"
  checkboxClass="icheckbox_square-blue"
  increaseArea="20%"
/>
<label for="checkbox1">First name</label>

// Radio
<Radio
  name="aa"
  radioClass="iradio_square-blue"
  increaseArea="20%"
  label="Radio"
/>
```

```js
import {Radio, RadioGroup} from 'react-icheck';

<RadioGroup name="radio" value="3">
    <Radio
      value="3"
      radioClass="iradio_square-blue"
      increaseArea="20%"
      label="Radio, <span class='label1'>#input-3</span>"
    />
    <Radio
      value="4"
      radioClass="iradio_square-blue"
      increaseArea="20%"
      label="Radio, <span class='label1'>#input-4</span>"
    />
    <Radio
      value="5"
      radioClass="iradio_square-blue"
      increaseArea="20%"
      label="Radio, <span class='label1'>#disabled</span>"
      disabled
    />
</RadioGroup>
```

More examples: [Online demo](http://luqin.github.io/react-icheck), [Source](https://github.com/luqin/react-icheck/tree/master/examples)

## Browser support

iCheck is verified to work in Internet Explorer 6+, Firefox 2+, Opera 9+, Google Chrome and Safari browsers. Should also work in many others.

Mobile browsers (like Opera mini, Chrome mobile, Safari mobile, Android browser, Silk and others) are also supported. Tested on iOS (iPad, iPhone, iPod), Android, BlackBerry and Windows Phone devices.

## Local Setup

Dev base on [react-component-tools](https://github.com/luqin/react-component-tools)

* Install the dependencies with `npm install`
* Run the docs site in development mode with `npm start`. This will watch for file changes as you work. And auto refresh the page to see the updates.

## TODO List

* Testing

[npm-badge]: http://badge.fury.io/js/react-icheck.svg
[npm]: https://www.npmjs.com/package/react-icheck

[deps-badge]: https://david-dm.org/luqin/react-icheck.svg
[deps]: https://david-dm.org/luqin/react-icheck

[dev-deps-badge]: https://david-dm.org/luqin/react-icheck/dev-status.svg
[dev-deps]: https://david-dm.org/luqin/react-icheck#info=devDependencies

[peer-deps-badge]: https://david-dm.org/luqin/react-icheck/peer-status.svg
[peer-deps]: https://david-dm.org/luqin/react-icheck#info=peerDependencies 

[travis-ci-image]: https://travis-ci.org/luqin/react-icheck.svg
[travis-ci-url]: https://travis-ci.org/luqin/react-icheck
