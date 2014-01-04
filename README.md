#Lines.js


Beautiful diagonal background lines.

##Get Lines
* Via bower:  

```bash
bower install lines
```
* Or, you can simply [download](https://github.com/dbtek/lines/archive/1.0.1.zip) from GitHub.

##Usage

* Download and include lines.js inside your html.
```html  
<script type="text/javascript" src="lines.js"></script>
```

* Add a canvas element to the page.
```html  
<canvas id="lines-canvas" width="600" height="600"></canvas>
```

* Use with default options:

```javascript  
  new lines().draw();
```
* Use with customizations:

```javascript  
  new lines({canvas: 'canvas-id', pieces: 3, color: '#D34567'}).draw();
```

* For quick implementation take a look at included [demo](https://github.com/dbtek/lines/blob/master/demo.html).

#### Options
**canvas:** Canvas HTML id.  
**pieces:** Number of lines to be drawn.  
**color:** Hex code of the lines' color.  

## License
* Open-sourced under [MIT](http://opensource.org/licenses/MIT) license.
