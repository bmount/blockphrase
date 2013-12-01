![sparkline for streets idea](http://pics.cityrewrite.com/pics/sparkstreets/sparkstr01.png)

simple thing combining a sort of sparkline with some visual concepts from 
Armelle Caron's beautiful [tout bien rangé](http://www.armellecaron.fr/art/index.php?page=plans_de_berlin)
project.

It'll hopefully result in a simple visual phrase for given city blocks, showing the form
of spaces created by street layout.

The repo has some development tiles from Stamen (toner-background) checked in. Otherwise the canvas 
`getImageData` has some kind of same origin policy, `server.js` is mostly for proxying
remote tile providers.

To use:

`node server.js // http://localhost:8002`

License: MIT
