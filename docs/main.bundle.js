!function(e){function n(n){for(var t,a,o=n[0],r=n[1],l=0,s=[];l<o.length;l++)a=o[l],i[a]&&s.push(i[a][0]),i[a]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);for(u&&u(n);s.length;)s.shift()()}var t={},i={2:0};var a={};var o={19:function(){return{"./photon":{__wbindgen_object_drop_ref:function(e){return t[7].exports.__wbindgen_object_drop_ref(e)},__wbg_new_59cb74e423758ede:function(){return t[7].exports.__wbg_new_59cb74e423758ede()},__wbg_stack_558ba5917b466edd:function(e,n){return t[7].exports.__wbg_stack_558ba5917b466edd(e,n)},__wbg_error_4bb6c2a97407129a:function(e,n){return t[7].exports.__wbg_error_4bb6c2a97407129a(e,n)},__widl_instanceof_Window:function(e){return t[7].exports.__widl_instanceof_Window(e)},__widl_f_get_image_data_CanvasRenderingContext2D:function(e,n,i,a,o,r){return t[7].exports.__widl_f_get_image_data_CanvasRenderingContext2D(e,n,i,a,o,r)},__widl_f_put_image_data_CanvasRenderingContext2D:function(e,n,i,a,o){return t[7].exports.__widl_f_put_image_data_CanvasRenderingContext2D(e,n,i,a,o)},__widl_f_create_element_Document:function(e,n,i,a){return t[7].exports.__widl_f_create_element_Document(e,n,i,a)},__widl_f_body_Document:function(e){return t[7].exports.__widl_f_body_Document(e)},__widl_f_width_HTMLCanvasElement:function(e){return t[7].exports.__widl_f_width_HTMLCanvasElement(e)},__widl_f_height_HTMLCanvasElement:function(e){return t[7].exports.__widl_f_height_HTMLCanvasElement(e)},__widl_f_new_with_u8_clamped_array_and_sh_ImageData:function(e,n,i,a,o){return t[7].exports.__widl_f_new_with_u8_clamped_array_and_sh_ImageData(e,n,i,a,o)},__widl_f_data_ImageData:function(e,n){return t[7].exports.__widl_f_data_ImageData(e,n)},__widl_f_append_child_Node:function(e,n,i){return t[7].exports.__widl_f_append_child_Node(e,n,i)},__widl_f_set_text_content_Node:function(e,n,i){return t[7].exports.__widl_f_set_text_content_Node(e,n,i)},__widl_f_document_Window:function(e){return t[7].exports.__widl_f_document_Window(e)},__wbg_call_8a9c8b0a32a202ff:function(e,n,i){return t[7].exports.__wbg_call_8a9c8b0a32a202ff(e,n,i)},__wbg_newnoargs_a172f39151049128:function(e,n){return t[7].exports.__wbg_newnoargs_a172f39151049128(e,n)},__wbindgen_object_clone_ref:function(e){return t[7].exports.__wbindgen_object_clone_ref(e)},__wbindgen_debug_string:function(e,n){return t[7].exports.__wbindgen_debug_string(e,n)},__wbindgen_throw:function(e,n){return t[7].exports.__wbindgen_throw(e,n)},__wbindgen_rethrow:function(e){return t[7].exports.__wbindgen_rethrow(e)}}}}};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(e){var n=[],t=i[e];if(0!==t)if(t)n.push(t[2]);else{var l=new Promise(function(n,a){t=i[e]=[n,a]});n.push(t[2]=l);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=function(e){return r.p+""+e+".bundle_"+{0:"4b4964166a17761e7064"}[e]+".js"}(e);var u=new Error;s=function(n){c.onerror=c.onload=null,clearTimeout(d);var t=i[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",u.type=a,u.request=o,t[1](u)}i[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return({0:[19]}[e]||[]).forEach(function(e){var t=a[e];if(t)n.push(t);else{var i,l=o[e](),s=fetch(r.p+""+{19:"65551ef1a39a77c18177"}[e]+".module.wasm");if(l instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)i=Promise.all([WebAssembly.compileStreaming(s),l]).then(function(e){return WebAssembly.instantiate(e[0],e[1])});else if("function"==typeof WebAssembly.instantiateStreaming)i=WebAssembly.instantiateStreaming(s,l);else{i=s.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,l)})}n.push(a[e]=i.then(function(n){return r.w[e]=(n.instance||n).exports}))}}),Promise.all(n)},r.m=e,r.c=t,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)r.d(t,i,function(n){return e[n]}.bind(null,i));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r.oe=function(e){throw console.error(e),e},r.w={};var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var u=s;r(r.s=8)}([function(e,n){e.exports="images/nine_yards.jpg"},,,,,,,,function(e,n,t){"use strict";t.r(n);t(10),t(11),t(12),t(14),t(15),t(16);t(9).install()},function(e,n){function t(){return"serviceWorker"in navigator&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}n.install=function(e){e||(e={}),t()&&navigator.serviceWorker.register("sw.js",{})},n.applyUpdate=function(e,n){},n.update=function(){t()&&navigator.serviceWorker.getRegistration().then(function(e){if(e)return e.update()})}},function(e,n){e.exports="fonts/libre-baskerville-v5-latin-regular.woff"},function(e,n){e.exports="fonts/libre-baskerville-v5-latin-regular.woff2"},function(e,n,t){e.exports='<!doctype html> <html lang=en> <head> <meta charset=UTF-8> <meta name=viewport content="width=device-width,initial-scale=1"> <meta name=Description content="A WebAssembly image processing library that delivers blazing performance and safety/security."> <meta property=og:title content="Photon: A high-performance WebAssembly image processing library."> <meta property=og:type content=website> <meta property=og:url content=https://github.com/tr1s/tris-webpack-boilerplate> <meta property=og:image content=https://i.imgur.com/lxRBpeb.jpg> <meta property=og:image:alt content="A blue package, symbolizing what webpack does."> <meta property=og:description content="A simple yet thorough webpack starter boilerplate for static websites that achieves high performance and cover all best practices."> <meta name=twitter:card content=summary> <meta name=twitter:creator content=@triscodes> <meta name=theme-color content=#2c638f> <meta name=msapplication-navbutton-color content=#2c638f> <meta name=apple-mobile-web-app-status-bar-style content=black-translucent> <link rel=stylesheet href=styles.css /> <title>📦Photon: A Rust Image Processing Library</title> <link rel=stylesheet href=https://cdn.jsdelivr.net/npm/@glorious/demo/dist/gdemo.min.css> <script src=https://cdn.jsdelivr.net/npm/@glorious/demo/dist/gdemo.min.js><\/script> </head> <body> <header> </header> <main> <div class=landing> <div class=content> <header class=container> <h4 class=logo>photon</h4> <nav class=contright> <ul> <li>Home</li> <li>Docs</li> <li><a href=demo.html>Demo</a></li> <li>GitHub</li> </ul> </nav> </header> <article class=landing_hero> <article class=landing_text> <h1>WebAssembly image processing</h1> <p>High-performance WebAssembly image processing that runs both natively and on the web. Bring native speed image processing back to the browser. Powered by Rust, keeping it safe and secure. </p> <div class=buttons> <button class="btn btn-default btn_fill pulse">Get Started</button> <button class=slide>Docs</button> </div> </article> <article class=landing_image> <img src='+t(0)+' id=img /> <canvas id=canvas></canvas> </article> </article> <article class=features> <h2>Features</h2> <p>Unlike other libraries, this library is built with 100% pure Rust, so security and safety is guaranteed. </p> <ul class=features_list> <li> <h3>Web-Assembly Friendly</h3> <p>For web-based image processing, Photon is 4-10x faster than JS, leading to faster results, and less lag. </p> <h5>Read More </h5> </li> <li> <h3>Over 90 functions </h3> <p>Photon provides functions for every domain of image processing. </p> <h5>Read More </h5> </li> <li> <h3>Call WASM with JS</h3> <p>This library\'s WASM functions can be called via JS, allowing for zero-cost abstraction and faster development.</p> <h5>Read More </h5> </li> </ul> </article> <article class=guide> <h2 class=center>How it works</h2> <section class=guide_pane> <section> <h2>Write once, run anywhere.</h2> <p>Photon can be executed:</p> <ul> <li>In the browser via JS</li> <li>On Node.JS</li> <li>Natively on any machine</li> </ul> <p>Photon compiles to WebAssembly, which allows the execution of native-speed code in the browser and on Node.JS. This means incredible performance and since Photon\'s core library is written in Rust, it promises security and safety. </p> <button class="btn btn_fill">Animate</button> </section> <div class=container> <div class=w> <div class="p a"></div> <div class="p b"></div> <div class="p c"></div> <div class="p d"></div> </div> </div> </section> <section class=guide_pane> <section> <h2> Functions </h2> <p> Functions include:</p> <ul> <li> <b>Image correction:</b> Hue rotation, sharpening, brightness adjustment, adjusting saturation, lightening/darkening all within various colour spaces. </li> <li><b>Convolutions</b>: Sobel filters, blurs, Laplace effects, edge detection, etc., </li> <li><b>Channel manipulation</b>: Increasing/decreasing RGB channel values, swapping channels, removing channels, etc.</li> <li><b>onochrome effects</b>: Duotoning, greyscaling of various forms, thresholding, sepia, averaging RGB values</li> <li><b>Colour manipulation</b>: Work with the image in various colour spaces such as HSL, LCh, and sRGB, and adjust the colours accordingly. </li> <li><b>Filters</b>: Over 30 pre-set filters available, incorporating various effects and transformations. </li> <li> <b>Text</b>: Apply text to imagery in artistic ways, or to watermark, etc.,</li> <li><b>Watermarking</b>: Watermark images in multiple formats. </li> <li><b>Blending</b>: Blend images together using 10 different techniques, change image backgrounds. </li> View all [functions here](https://silvia-odwyer.github.io/photon/docs/photon/all.html). </ul> <button class="btn btn_fill">Animate</button> </section> <div class=container> <div class="background anim_img"></div> <div class="foreground anim_img"></div> </div> </section> <section class=guide_pane> <section> <h2>Channel/Colour Manipulation</h2> <p> The library provides low-level access to pixel and channel manipulation, as well as high-level functions for image correction, filtering, watermarking, and convolutions. </p> <button class="btn btn_fill">Animate</button> </section> <div class=container> <div class=w> <div class="p a"></div> <div class="p b"></div> <div class="p c"></div> <div class="p d"></div> </div> </div> </section> <section class=guide_pane> <section> <h2> Blend Images </h2> <p> Functions include:</p> <b>Blending</b>:<p> Blend images together using 10 different techniques. </p> <p>Create new images from existing ones, or create new worlds from source images.</p> <button class="btn btn_fill">Animate</button> </section> <div class=container> <div class="background anim_img"></div> <div class="foreground anim_img"></div> </div> </section> <section> <section class=guide_pane> <section> <h2>View The Demo</h2> <p>To see WebAssembly in action and all effects available, make sure to check out our</p> <a href=demo.html>demo </a> <p>, where you can test out the effects, view performance, and see if Photon is the right library for your needs.</p> <button class="btn btn_fill">View The Demo</button> </section> </section> <section class=guide_pane> <section> <h2>View The Demo</h2> <p>To see WebAssembly in action and all effects available, make sure to check out our</p> <a href=demo.html>demo </a> <p>, where you can test out the effects, view performance, and see if Photon is the right library for your needs.</p> <button class="btn btn_fill">View The Demo</button> </section> <div id=code> </div> </section> </section> </article> <h2>Compare WebAssembly versus JavaScript</h2> <button id=compare_js class=pulse>Start JS</button> <button id=compare_wasm class=pulse>Start WASM</button> <p>Below are two identical images of size 40MB, the left image being edited by JavaScript and the right image edited by WebAssembly. </p> <article class=comparison> <article> <h4>JavaScript</h4> <p id=js_time>JS time: </p> <img id=js_img src='+t(13)+" /> <canvas id=js_canvas></canvas> </article> <article> <h4>WebAssembly</h4> <p id=wasm_time>WASM time: </p> <canvas id=wasm_canvas></canvas> </article> </article> <article class=\"guide center cta\"> <h2>Quick Links</h2> <p></p> <button class=\"btn btn_fill\">View The Docs</button> <button class=\"btn btn_outline\">PhotonPRO</button> </article> <footer> <div class=footer_lhs> <h1 class=logo>Photon</h1> <p>Image processing with WebAssembly.</p> <p>Copyright 2019 copy All Rights Reserved. Software open-sourced under MIT. </p> </div> <div class=footer_rhs> <ul> <li>Home</li> <li>About</li> <li>GitHub</li> <li>Docs</li> </ul> </div> </footer> </div> </div> <script> // Constructor receives a selector that indicates\r\n      // where to inject the demonstration in your page.\r\n      const demo = new GDemo('#code');\r\n      \r\n      const code = `\r\n      extern crate photon;\r\n      fn main() {\r\n         // Open the image as a PhotonImage type\r\n         let img = photon::helpers::open_image(\"daisies.JPG\");\r\n         \r\n         // Apply a Sobel effect to the image \r\n         let filtered_img = photon::conv::sobel_vertical(img);\r\n         \r\n         // Write the contents of this image in PNG format.\r\n         photon::helpers::save_image(filtered_img, \"new_image.PNG\");\r\n     }\r\n      `\r\n      \r\n      demo\r\n\r\n        .openApp('terminal', {minHeight: '350px', promptString: '$'})\r\n        .command('git clone https://github.com/silvia-odwyer/photon', {onCompleteDelay: 500})\r\n        // .respond('')\r\n        .command('cd photon')\r\n        .command('npm start')\r\n        .respond('This will start a webpack build pipeline, and contains a quick demo to help you get started.')\r\n        .command('cd crate')\r\n        .command('cargo run --release')\r\n        .respond('This will natively run the Rust binary code.')\r\n        .openApp('editor', {minHeight: '350px', windowTitle: 'demo.js'})\r\n        .write(code, {onCompleteDelay: 1500})\r\n        .end(); <\/script> ##### 96 customisable functions are available, for varying image effects. `photon` can be thought of as a high-level wrapper to the Rust `image` crate, but conversely also includes functions which provide low-level access to pixel and channel manipulation, perfect for developers who wish to work with this data directly. ### 🧐 Repo Organisation This repo can be thought of as a hybrid library, divided into 2 major components: 1. ***Core Rust library***: This provides universal image processing functions, which can be used either natively or in the browser. The WASM component of this repo relies on this for all image processing functionality. 2. ***WebAssembly helpers and starter demo***: This section of the library contains helpers for exporting pixel data to and from the browser, and communicates directly with the core Rust library. The starter demo demonstrates calling the compiled WebAssembly code using JS functions and hooks into a webpack build pipeline. ### Documentation Documentation can be found [here](https://silvia-odwyer.github.io/photon/docs/photon/index.html). ## Examples ![](https://github.com/silvia-odwyer/photon/blob/master/docs/img_examples/streetlamp_collage.png) ## 🚴Getting Started These instructions will get you a copy of Photon up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. ### Prerequisites To use Photon, you must have Rust and Node installed. Builds of Photon are compiled using the rust nightly toolchain. ### Native Use Photon contains native-only functions for opening files from the filesystem. When an image is opened, it is converted to a `PhotonImage` type, which can then be passed into any image processing function, and the `PhotonImage` value is accordingly edited. Getting started is relatively straightforward, this code snippet is all you need to get started: ```rust extern crate photon; fn main() { // Open the image as a PhotonImage type let img = photon::helpers::open_image(\"daisies.JPG\"); // Apply a Sobel effect to the image let filtered_img = photon::conv::sobel_vertical(img); // Write the contents of this image in PNG format. photon::helpers::save_image(filtered_img, \"new_image.PNG\"); } ``` See the documentation for a full list of effects which you can apply. All functions take in a `PhotonImage` similar to above. ### 🚴 Get Started With WebAssembly ##### 🔋 Batteries Included This repo comes pre-configured with a quick-start demo, which hooks into a Webpack build pipeline, and provides all WASM-friendly functions. ***WARNING***: Running WASM code in development mode is ***significantly*** slower than in production mode (often up to 10 times), so don't be disheartened if the JS alternatives outperform WASM. For the blazing speeds promised, make sure to build the project under production mode with `npm run build` and visit `dist/index.html`. * `npm run start` -- Serve the project locally for development at `http://localhost:8080`. * `npm run build` -- Bundle the project (in production mode). ##### WebAssembly Use To allow for universal communication between the core Rust library and WebAssembly, the functions have been generalised to allow for both native and in-browser use. Due to this, image data from the browser must first be converted to a PhotonImage before being passed to the image processing functions. The PhotonImage can then be converted back to JS-compatible ImageData so that it can be displayed in-browser. See the code snippet below: ```js function filterImage(event) { var canvas = document.getElementById(\"canvas\"); var ctx = canvas.getContext(\"2d\"); ctx.drawImage(newimg, 0, 0); // Get the image data from the image let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height); // Convert the ImageData to a PhotonImage (so that it can communicate with the core Rust library) let rust_image = module.open_image(imgData, canvas.width, canvas.height); // Filter the image, the PhotonImage's raw pixels are modified and // the PhotonImage is returned let new_image = module.filter(rust_image, filter_name); // Convert the PhotonImage's raw pixels to JS-compatible ImageData let new_pixels = module.to_image_data(new_image); // Place the pixels back on the canvas ctx.putImageData(new_pixels, 0, 0); } ``` Not all functions available in the core Rust library are available in WebAssembly (currently investigating this). Only WASM-friendly functions have been annotated with #[wasm_bindgen]. All supported WASM functions are displayed in the starter demo. ## Modules Photon contains a series of modules, which include: - `effects`: Various image effects, including adding offsets, thresholding, duotoning, solarization, etc., - `channels`: Functions related to increasing/decreasing the red, green, and blue channels of the image data. - `filters`: Preset filters, which alter the rgb channels of the image. Contains over 20. - `conv`: Laplace, Sobel, emboss; image proc functions which require image convolution. - `noise`: Noise generation of varying tints and hues. - `multiple`: A module for dealing with multiple images, such as watermarking images, etc., - `correction`: Hue rotation, adjusting saturation, lightening/darkening: all techniques available in multiple colour spaces, which lead to varying effects. All effects and filters can be viewed below and on the official website. ## 📚 Documentation View the official [documentation here](https://silvia-odwyer.github.io/photon/docs/photon/index.html). ## Building For Production #### Native You can edit the binary file in the `bin` dir to create an executable or a command-line app, for example. Then, to build this executable for native use in release mode: ```sh cd crate cargo build --release ``` #### WebAssembly To build the example under production mode: ```sh npm run build ``` Check the `dist` folder for the outputted static files, which can be deployed to a live server. </main> </body> </html>"},function(e,n){e.exports="images/fruit.jpg"},function(e,n){e.exports='<!doctype html> <html> <head> <meta http-equiv=Content-type content="text/html; charset=utf-8"/> <title>Photon WASM Demo</title> </head> <body> <style>@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap);body{background-color:#222}.default{background-color:#222;font-family:Roboto,sans-serif;height:100%}.dark,.main-navbar,.main-sidebar{background-color:#222;color:#696969}.main{margin-left:40vh;padding:0 10px;background-color:#222}.main_content{padding-top:14vh}.sidebar{height:100%;width:40vh;position:fixed;z-index:1;top:0;left:0;background-color:#1f1f1f;overflow-x:hidden;padding-top:20px}.sidebar li{display:block;color:#696969;cursor:pointer}@media screen and (max-height:450px){.sidebar{padding-top:15px}.sidebar a{font-size:18px}}nav{overflow:hidden;background-color:#1d1d1d;position:fixed;top:0;width:100%}nav li{float:left;display:block;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;font-family:Roboto,sans-serif}ul li{text-decoration:none;list-style:none;padding-right:4em}ul li:active{color:#fff}.tab_nav{display:flex;flex-direction:row;flex-wrap:wrap;margin-left:0}.logo{color:#fff;font-size:1em;margin-left:1em}h2,h3,h4,h5{color:#fff;font-family:Roboto,sans-serif;font-weight:300}h4{text-transform:uppercase;font-size:.7em;letter-spacing:4px}.content{grid-area:"main_left";width:80%}.colour_scheme{border:solid transparent .1em;border-radius:.5em;background-color:#1d1b1b;padding:2em;padding-right:4em;padding-left:4em}.benchmarks{color:#fff;font-size:2em;grid-area:"main_right"}.main_content{display:grid;grid-template-columns:75% 25%;grid-template-rows:auto;grid-template-areas:"main_left main_right"}#code{font-size:.5em;font-family:\'Courier New\',Courier,monospace}.topnav{display:flex;flex-direction:row;justify-content:flex-end}</style> <div class=default> <div class=sidebar> <h3 class=logo>Photon</h3> <ul> <h4>Channels</h4> <li class=effect id=inc_red_channel>Inc Red Channel</li> <li class=effect id=inc_blue_channel>Inc Blue Channel</li> <li class=effect id=inc_green_channel>Inc Green Channel</li> <li class=effect id=inc_two_channels>Inc 2 Channels</li> <li class=effect id=swap_rg_channels>Swap R+G Channels</li> <li class=effect id=swap_gb_channels>Swap B+G Channels</li> <li class=effect id=swap_rb_channels>Swap R+B Channels</li> <li class=effect id=remove_red_channel>Remove Red Channel</li> <li class=effect id=remove_green_channel>Remove Green Channel</li> <li class=effect id=remove_blue_channel>Remove Blue Channel</li> <li class=effect id=dec_red_channel>Dec Red Channel</li> <li class=effect id=dec_blue_channel>Dec Blue Channel</li> <li class=effect id=dec_green_channel>Dec Green Channel</li> <h5>Watermark</h5> <li class=effect id=watermark>Watermark</li> <h4>Text</h4> <li class=effect id=text>Text</li> <li class=effect id=text_border>Text With Border</li> <h4>Filters</h4> <li class=filter id=oceanic>Oceanic</li> <li class=filter id=islands>Islands</li> <li class=filter id=marine>Marine</li> <li class=filter id=seagreen>Seagreen</li> <li class=filter id=flagblue>Flagblue</li> <li class=filter id=liquid>Liquid</li> <li class=filter id=diamante>Diamante</li> <li class=filter id=radio>Radio</li> <li class=filter id=twenties>Twenties</li> <li class=filter id=rosetint>Rosetint</li> <li class=filter id=mauve>Mauve</li> <li class=filter id=bluechrome>Bluechrome</li> <li class=filter id=vintage>Vintage</li> <li class=filter id=perfume>Perfume</li> <li class=filter id=serenity>Serenity</li> <h4>Monochrome</h4> <li class=effect id=grayscale>Grayscale</li> <li class=effect id=grayscale_human_corrected>Grayscale Human Corrected</li> <li class=effect id=threshold>Threshold</li> <li class=effect id=decompose_min>Decompose Min</li> <li class=effect id=decompose_max>Decompose Max</li> <li class=effect id=sepia>Sepia</li> <li class=effect id=grayscale_shades>Grayscale Shades</li> <li class=effect id=red_channel_grayscale>Red Grayscale</li> <li class=effect id=green_channel_grayscale>Green Grayscale</li> <li class=effect id=blue_channel_grayscale>Blue Grayscale</li> <h4>Effects</h4> <li class=effect id=primary>Primary</li> <li class=effect id=solarize>Solarize</li> <li class=effect id=offset_red>Offset Red</li> <li class=effect id=offset_green>Offset Green</li> <li class=effect id=offset_blue>Offset Blue</li> <li class=effect id=lix>Lix</li> <li class=effect id=neue>Neue</li> <li class=effect id=ryo>Ryo</li> <li class=effect id=inc_brightness>Increase Brightness</li> <li class=effect id=inc_lum>Increase Luminosity</li> <h4>Colour Spaces</h4> <li class=effect id=hue_rotate_hsl>Hue Rotate HSL</li> <li class=effect id=hue_rotate_hsv>Hue Rotate HSV</li> <li class=effect id=hue_rotate_lch>Hue Rotate LCh</li> <li class=effect id=lighten_hsl>Lighten HSL</li> <li class=effect id=lighten_hsv>Lighten HSV</li> <li class=effect id=lighten_lch>Lighten LCh</li> <li class=effect id=darken_hsl>Darken HSL</li> <li class=effect id=darken_hsv>Darken HSV</li> <li class=effect id=darken_lch>Darken LCh</li> <li class=effect id=saturate_hsl>Saturate HSL</li> <li class=effect id=saturate_hsv>Saturate HSV</li> <li class=effect id=saturate_lch>Saturate LCh</li> <li class=effect id=desaturate_hsl>Desaturate HSL</li> <li class=effect id=desaturate_hsv>Desaturate HSV</li> <li class=effect id=desaturate_lch>Desaturate LCh</li> <h4>Conv</h4> <li class=effect id=emboss>Emboss</li> <li class=effect id=box_blur>Box Blur</li> <li class=effect id=gaussian_blur>Gaussian Blur</li> <li class=effect id=sharpen>Sharpen</li> <li id=hue_rotate>JavaScript</li> <h4>Multiple</h4> <h5>Blend</h5> <li class=blend id=blend>Blend</li> <li class=blend id=overlay>Overlay</li> <li class=blend id=atop>Atop</li> <li class=blend id=plus>Plus</li> <li class=blend id=multiply>Multiply</li> <li class=blend id=burn>Burn</li> <li class=blend id=difference>Difference</li> <li class=blend id=soft_light>Soft Light</li> <li class=blend id=hard_light>Hard Light</li> <li class=blend id=dodge>Dodge</li> <li class=blend id=exclusion>Exclusion</li> <li class=blend id=lighten>Lighten</li> <li class=blend id=darken>Darken</li> <h3>Change Image</h3> <ul> <li class=change_image id=lemons>Lemons</li> <li class=change_image id=blue_metro>Blue Metro</li> <li class=change_image id=underground>Underground</li> <li class=change_image id=nine_yards>Nine Yards</li> <li class=change_image id=fruit>Fruit</li> <li class=change_image id=largefruit>Large Fruit</li> <li class=change_image id=daisies>Daisies</li> <li class=change_watermark id=watermark1>Watermark 1</li> </ul> </ul> </div> <nav class=topnav> <ul> <li>Change Image </li> <li>Docs</li> <li>GitHub</li> </ul> </nav> <div class=main> <div class=main_content> <section class=content> <h4>Photon WebAssembly Demo</h4> <h2>Original</h2> <div id=image_container></div> <canvas id=canvas></canvas> </section> <section class=benchmarks> <div id=time></div> <div id=code></div> </section> </div> </div> </div> </body> </html> '},function(e,n,t){},function(e,n,t){(function(e){var n,a,o,r,l,s;function c(){l=performance.now(),console.time("wasm_compare");var n=o.getImageData(0,0,r.width,r.height),t=e.open_image(n,r.width,r.height),i={grayscale:function(){return e.grayscale(t)},offset_red:function(){return e.offset(t,0,15)},offset_blue:function(){return e.offset(t,1,15)},offset_green:function(){return e.offset(t,2,15)},primary:function(){return e.primary(t)},solarize:function(){return e.solarize(t)},threshold:function(){return e.threshold(t,100)},sepia:function(){return e.sepia(t)},decompose_min:function(){return e.decompose_min(t)},decompose_max:function(){return e.decompose_max(t)},grayscale_shades:function(){return e.grayscale_shades(t)},red_channel_grayscale:function(){single_channel_grayscale(t,0)},green_channel_grayscale:function(){single_channel_grayscale(t,1)},blue_channel_grayscale:function(){single_channel_grayscale(t,2)},hue_rotate_hsl:function(){colour_space(t,"hsl","shift_hue")},hue_rotate_hsv:function(){colour_space(t,"hsv","shift_hue")},hue_rotate_lch:function(){colour_space(t,"lch","shift_hue")},lighten_hsl:function(){colour_space(t,"hsl","lighten")},lighten_hsv:function(){colour_space(t,"hsv","lighten")},lighten_lch:function(){colour_space(t,"lch","lighten")},darken_hsl:function(){colour_space(t,"hsl","darken")},darken_hsv:function(){colour_space(t,"hsv","darken")},darken_lch:function(){colour_space(t,"lch","darken")},desaturate_hsl:function(){colour_space(t,"hsl","desaturate")},desaturate_hsv:function(){colour_space(t,"hsv","desaturate")},desaturate_lch:function(){colour_space(t,"lch","desaturate")},saturate_hsl:function(){colour_space(t,"hsl","saturate")},saturate_hsv:function(){colour_space(t,"hsv","saturate")},saturate_lch:function(){colour_space(t,"lch","saturate")},inc_red_channel:function(){return e.alter_channel(t,0,30)},inc_blue_channel:function(){return e.alter_channel(t,2,30)},inc_green_channel:function(){return e.alter_channel(t,1,30)},inc_two_channels:function(){return e.alter_channel(t,1,30)},dec_red_channel:function(){return e.alter_channel(t,0,-30)},dec_blue_channel:function(){return e.alter_channel(t,2,-30)},dec_green_channel:function(){return e.alter_channel(t,1,-30)},swap_rg_channels:function(){return e.swap_channels(t,0,1)},swap_rb_channels:function(){return e.swap_channels(t,0,2)},swap_gb_channels:function(){return e.swap_channels(t,1,2)},remove_red_channel:function(){return e.remove_red_channel(t,250)},remove_green_channel:function(){return e.remove_green_channel(t,250)},remove_blue_channel:function(){return e.remove_blue_channel(t,250)},emboss:function(){return e.emboss(t)},box_blur:function(){return e.box_blur(t)},sharpen:function(){return e.sharpen(t)},lix:function(){return e.lix(t)},neue:function(){return e.neue(t)},ryo:function(){return e.ryo(t)},gaussian_blur:function(){return e.gaussian_blur(t)},inc_brightness:function(){return e.inc_brightness(t,20)},inc_lum:function(){return e.inc_luminosity(t)},grayscale_human_corrected:function(){return e.grayscale_human_corrected(t)},blend:function(){return e.blend(t,rust_image2,"over")},overlay:function(){return e.blend(t,rust_image2,"overlay")},atop:function(){return e.blend(t,rust_image2,"atop")},xor:function(){return e.blend(t,rust_image2,"xor")},plus:function(){return e.blend(t,rust_image2,"plus")},multiply:function(){return e.blend(t,rust_image2,"multiply")},burn:function(){return e.blend(t,rust_image2,"burn")},difference:function(){return e.blend(t,rust_image2,"difference")},soft_light:function(){return e.blend(t,rust_image2,"soft_light")},hard_light:function(){return e.blend(t,rust_image2,"hard_light")},dodge:function(){return e.blend(t,rust_image2,"dodge")},exclusion:function(){return e.blend(t,rust_image2,"exclusion")},lighten:function(){return e.blend(t,rust_image2,"lighten")},darken:function(){return e.blend(t,rust_image2,"darken")},watermark:function(){return e.watermark(t,watermark_img,10,30)},text:function(){return e.draw_text(t,"welcome to WebAssembly",10,20)},text_border:function(){return e.draw_text_with_border(t,"welcome to the edge",10,20)}}.swap_rg_channels(),a=e.to_image_data(i);o.putImageData(a,0,0),console.timeEnd("wasm_compare"),s=performance.now(),d("wasm")}function u(){l=performance.now(),console.time("js_compare"),function(e,n){var t=n.getImageData(0,0,e.width,e.height);for(i=0;i<t.data.length;i+=4)t[i]+=30;n.putImageData(t,0,0)}(a,n),console.timeEnd("js_compare"),s=performance.now(),d("js")}function d(e){console.log("update benchmarks");var n=s-l;if("js"==e)document.getElementById("js_time").innerHTML="Time: ".concat(n,"ms");else if("wasm"==e){document.getElementById("wasm_time").innerHTML="Time: ".concat(n,"ms")}}console.log("%c Hello from Photon!","background: lemonchiffon; border: 1px solid #fff"),console.log("%c Hire the dev behind Photon 💠","background: lavenderblush; border: 1px solid #000; padding: 4px; padding-top: 10px; padding-bottom: 8px;"),t.e(0).then(t.bind(null,7)).then(function(e){e.run();var t=document.getElementById("canvas"),i=document.getElementById("img");t.width=i.width,t.height=i.height;var l=t.getContext("2d");function s(n){l.drawImage(i,0,0),console.time("edit_time");var a=l.getImageData(0,0,t.width,t.height),o=e.open_image(a,t.width,t.height),r={grayscale:function(){return e.grayscale(o)},offset_red:function(){return e.offset(o,0,15)},offset_blue:function(){return e.offset(o,1,15)},offset_green:function(){return e.offset(o,2,15)},primary:function(){return e.primary(o)},solarize:function(){return e.solarize(o)},threshold:function(){return e.threshold(o,100)},sepia:function(){return e.sepia(o)},decompose_min:function(){return e.decompose_min(o)},decompose_max:function(){return e.decompose_max(o)},grayscale_shades:function(){return e.grayscale_shades(o)},red_channel_grayscale:function(){single_channel_grayscale(o,0)},green_channel_grayscale:function(){single_channel_grayscale(o,1)},blue_channel_grayscale:function(){single_channel_grayscale(o,2)},hue_rotate_hsl:function(){colour_space(o,"hsl","shift_hue")},hue_rotate_hsv:function(){colour_space(o,"hsv","shift_hue")},hue_rotate_lch:function(){colour_space(o,"lch","shift_hue")},lighten_hsl:function(){colour_space(o,"hsl","lighten")},lighten_hsv:function(){colour_space(o,"hsv","lighten")},lighten_lch:function(){colour_space(o,"lch","lighten")},darken_hsl:function(){colour_space(o,"hsl","darken")},darken_hsv:function(){colour_space(o,"hsv","darken")},darken_lch:function(){colour_space(o,"lch","darken")},desaturate_hsl:function(){colour_space(o,"hsl","desaturate")},desaturate_hsv:function(){colour_space(o,"hsv","desaturate")},desaturate_lch:function(){colour_space(o,"lch","desaturate")},saturate_hsl:function(){colour_space(o,"hsl","saturate")},saturate_hsv:function(){colour_space(o,"hsv","saturate")},saturate_lch:function(){colour_space(o,"lch","saturate")},inc_red_channel:function(){return e.alter_channel(o,0,30)},inc_blue_channel:function(){return e.alter_channel(o,2,30)},inc_green_channel:function(){return e.alter_channel(o,1,30)},inc_two_channels:function(){return e.alter_channel(o,1,30)},dec_red_channel:function(){return e.alter_channel(o,0,-30)},dec_blue_channel:function(){return e.alter_channel(o,2,-30)},dec_green_channel:function(){return e.alter_channel(o,1,-30)},swap_rg_channels:function(){return e.swap_channels(o,0,1)},swap_rb_channels:function(){return e.swap_channels(o,0,2)},swap_gb_channels:function(){return e.swap_channels(o,1,2)},remove_red_channel:function(){return e.remove_red_channel(o,250)},remove_green_channel:function(){return e.remove_green_channel(o,250)},remove_blue_channel:function(){return e.remove_blue_channel(o,250)},emboss:function(){return e.emboss(o)},box_blur:function(){return e.box_blur(o)},sharpen:function(){return e.sharpen(o)},lix:function(){return e.lix(o)},neue:function(){return e.neue(o)},ryo:function(){return e.ryo(o)},gaussian_blur:function(){return e.gaussian_blur(o)},inc_brightness:function(){return e.inc_brightness(o,20)},inc_lum:function(){return e.inc_luminosity(o)},grayscale_human_corrected:function(){return e.grayscale_human_corrected(o)},blend:function(){return e.blend(o,rust_image2,"over")},overlay:function(){return e.blend(o,rust_image2,"overlay")},atop:function(){return e.blend(o,rust_image2,"atop")},xor:function(){return e.blend(o,rust_image2,"xor")},plus:function(){return e.blend(o,rust_image2,"plus")},multiply:function(){return e.blend(o,rust_image2,"multiply")},burn:function(){return e.blend(o,rust_image2,"burn")},difference:function(){return e.blend(o,rust_image2,"difference")},soft_light:function(){return e.blend(o,rust_image2,"soft_light")},hard_light:function(){return e.blend(o,rust_image2,"hard_light")},dodge:function(){return e.blend(o,rust_image2,"dodge")},exclusion:function(){return e.blend(o,rust_image2,"exclusion")},lighten:function(){return e.blend(o,rust_image2,"lighten")},darken:function(){return e.blend(o,rust_image2,"darken")},watermark:function(){return e.watermark(o,watermark_img,10,30)},text:function(){return e.draw_text(o,"welcome to WebAssembly",10,20)},text_border:function(){return e.draw_text_with_border(o,"welcome to the edge",10,20)}}[n](),s=e.to_image_data(r);l.putImageData(s,0,0),console.timeEnd("edit_time")}l.drawImage(i,0,0),document.getElementById("compare_wasm").addEventListener("click",c,!1),document.getElementById("compare_js").addEventListener("click",u,!1),l.drawImage(i,0,0),setTimeout(function(){s("primary")}),setTimeout(function(){s("inc_red_channel")},4e3),setTimeout(function(){s("inc_green_channel")},6e3),setTimeout(function(){s("inc_blue_channel")},8e3),setTimeout(function(){s("remove_red_channel")},1e4),setTimeout(function(){s("remove_green_channel")}),setTimeout(function(){s("remove_blue_channel")},14e3),setTimeout(function(){s("solarize")},16e3),setTimeout(function(){s("threshold")},18e3),setTimeout(function(){s("sepia")},2e4),setTimeout(function(){s("decompose_min")}),setTimeout(function(){s("swap_rg_channels")},24e3),setTimeout(function(){s("swap_gb_channels")},26e3),setTimeout(function(){s("swap_rb_channels")},28e3),setTimeout(function(){s("remove_red_channel")},3e4),js_img=document.getElementById("js_img"),a=document.getElementById("js_canvas"),r=document.getElementById("wasm_canvas"),a.width=js_img.width,a.height=js_img.height,r.width=js_img.width,r.height=js_img.height,n=a.getContext("2d"),o=r.getContext("2d"),n.drawImage(js_img,0,0),o.drawImage(js_img,0,0)});var h=45;requestAnimationFrame(function e(){document.documentElement.style.setProperty("--direction",h+++"deg"),requestAnimationFrame(e)})}).call(this,t(17)(e))},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}]);
//# sourceMappingURL=main.bundle.js.map