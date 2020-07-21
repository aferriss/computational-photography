# Computational Photography 

Hello! These are the materials for the computational photography workshop taught by Adam Ferriss (aferriss@gmail.com) at the Anderson Ranch summer of 2020, July 27 - 31.


## Schedule

### Day 1 - Monday July 27  

- Introductions
- Workshop Overview
- Setting up your environment
- p5 image function demos
  - `loadImage()`
  - `image()`
  - `get()`
  - `set()`
  - `copy()`
- exporting your work

### Day 2 - Tuesday July 28

- Pixel Part 1
  - looping over pixel array
  - accessing individual pixels
  - pixels as data

### Day 3 - Wednesday July 29

- Pixels Part 2
  - Kernel Convolution demo
- Shaders Part 1
  - Shader Syntax
  - Texture2D
  - Shader functions `smoothstep()`, `step()`, `clamp()`, `mix()`


### Day 4 - Thursday July 30 
- Shaders Part 2
  - UV fun (wiggle, distort, displacement)
  - Shader convolution
- Multipass rendering
  - Feedback


### Day 5 - Friday July 31 

- Extra workshop time
- Going further
- Work Share / Critique

## Resources

### Pixels
- p5js Pixel and Image functions:
  - [get()](https://p5js.org/reference/#/p5/get)
  - [set()](https://p5js.org/reference/#/p5/set)
  - [copy()](https://p5js.org/reference/#/p5/copy)
  - [loadPixels()](https://p5js.org/reference/#/p5/loadPixels)
  - [updatePixels()](https://p5js.org/reference/#/p5/updatePixels)
  - [pixels](https://p5js.org/reference/#/p5/pixels)
  - [loadImage()](https://p5js.org/reference/#/p5/loadImage)
  - [createImage()](https://p5js.org/reference/#/p5/createImage)
  - [image()](https://p5js.org/reference/#/p5/image)
  - [filter()](https://p5js.org/reference/#/p5/filter)
- p5js Color Functions
  - [color()](https://p5js.org/reference/#/p5/color)
  - [red()](https://p5js.org/reference/#/p5/red)
  - [green()](https://p5js.org/reference/#/p5/green)
  - [blue()](https://p5js.org/reference/#/p5/blue)
  - [brightness()](https://p5js.org/reference/#/p5/brightness)
  - [saturation()](https://p5js.org/reference/#/p5/saturation)
  - [hue()](https://p5js.org/reference/#/p5/hue)
- [Image processing in p5js](https://idmnyu.github.io/p5.js-image/index.html) is a nice tutorial on getting started with pixel manipulation in p5.
- [The Pixel Array - Coding Train](https://www.youtube.com/watch?v=nMUMZ5YRxHI)
- [Brightness Mirror - Coding Train](https://www.youtube.com/watch?v=rNqaw8LT2ZU)


### Shaders
- p5js Shader functions:
  - [p5.Shader](https://p5js.org/reference/#/p5.Shader)
  - [loadShader](https://p5js.org/reference/#/p5/loadShader)
  - [shader()](https://p5js.org/reference/#/p5/shader)
  - [resetShader()](https://p5js.org/reference/#/p5/resetShader)
  - [setUniform()](https://p5js.org/reference/#/p5.Shader/setUniform)
  - [textureWrap()](https://p5js.org/reference/#/p5/textureWrap)
- [The Book of Shaders](https://thebookofshaders.com/) by Patricia Gonzalez Vivo and Jen Lowe is an introduction to writing shaders with interactive editors in the browser.
- [p5js shaders](https://itp-xstory.github.io/p5js-shaders/#/) is a write up of how to get started with shaders in p5js.
- [Adam's shader examples](https://github.com/aferriss/p5jsShaderExamples) is a repo I've created with a whole bunch of examples of how you might accomplish certain effects using shaders
- [Shadertoy](https://www.shadertoy.com) is an online fragment shader editor. There's a ton of knowledge here if you're willing to be patient and comb through other examples. People have done some truly mind blowing things on this site.
- [Shader functions reference](https://www.shaderific.com/glsl-functions) is a reference for GLSL shader functions

### Javascript / p5
- [p5js editor](https://editor.p5js.org/)
- [p5js.org reference](https://p5js.org/reference) is where you can find information about all of the functionality of p5.js.
- [p5js forum](https://discourse.processing.org/c/p5js/10) is a good place to ask questions or talk to other people working with p5
- [The Coding Train](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw) is an amazing series of videos hosted by Daniel Shiffman (and others) that teaches coding and extensively covers p5js / processing.
- [MDN Javascript Docs](https://developer.mozilla.org/en-US/). Probably my favorite site for getting information about features of javascript. Typically very well written with lots of examples.
- [ES6 Features](https://github.com/lukehoban/es6features). ES6 is a modern flavor of javascript that adds some really handy new features to the language. This site is a little wrap up of all of them for quick reference.
- [Nested Loops - Coding Train](https://www.youtube.com/watch?v=1c1_TMdf8b8)
- [Arrays - Coding Train](https://www.youtube.com/watch?v=VIQoUghHSxU)
- [Arrays and Loops - Coding Train](https://www.youtube.com/watch?v=RXWO3mFuW-I&t=1s)

### Environment / Code Editor
- [Workflow: Visual Studio Code](https://www.youtube.com/watch?v=yJw0SyKO9IU)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) is a great code style guide / auto formatter. It also helps bring everyone's code into the same style which makes it easier to debug when reading code other people have written.
- [Shader Language Support](https://marketplace.visualstudio.com/items?itemName=slevesque.shader) is super helpful for syntax highlighting when working with GLSL or other shader languages.
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) adds a localserver to VSCode so you can preview your sketches without having to do any work to set up a localhost. Just click the `Go Live` button on the blue bar on the bottom right to start which should open up a web page at [localhost:5500](localhost:5500)
- [p5 Types](https://www.npmjs.com/package/@types/p5) is a typescript definitions file for p5.js. It is already included in the template I've prepared for you but if you plan to continue working in VSCode I highly recommend picking this up. This will give you autocomplete support when working with p5 in VSCode. You can just copy the `global.d.ts` file into your project folder and then on the first line of your sketch add: `/// <reference path="./global.d.ts" />`
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) is a little addon that makes it a little easier to tell which brackets belong to which by coloring the opening { and closing } the same color

### Books

- [Generative Design](http://www.generative-gestaltung.de/2/) is an excellent book with tons of code examples for getting your feet wet with generative design. The book now comes with p5.js examples too!
- [Getting Started with p5.js](https://www.oreilly.com/library/view/make-getting-started/9781457186769/) by Lauren McCarthy and Casey Reas is a great and quick primer for jumping into p5.js. I've often used this book for teaching and think it's one of the most friendly and approachable books for learning to code.
- [Learning Processing](http://learningprocessing.com/) by Daniel Shiffman is the book that I first read when learning to code. Super clear examples and covers just a tad of everything you need to get started with processing / p5.
- [The Nature of Code](https://natureofcode.com/) is Daniel Shiffman's follow up to Learning Processing. It looks at patterns in nature as inspiration for processing sketches and goes into some deeper topics like AI and emergence behavior.