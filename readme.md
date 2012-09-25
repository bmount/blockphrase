![sparkline for streets idea](http://pics.aguacat.es/pics/sparkstreets/sparkstr01.png)

simple thing combining a sort of sparkline with some visual concepts from 
Armelle Caron's beautiful [tout bien rangé](http://www.armellecaron.fr/art/index.php?page=plans_de_berlin)
project.

It'll hopefully result in a simple visual vocabulary for city blocks, showing the form
of spaces created by street layout.

The repo has some development tiles from Stamen (toner-background) checked in. Otherwise the canvas 
`getImageData` has some kind of same origin policy, so you probably need something like `server.js`
for remote tile providers.

Right now it's interactive which is not the intended final behavior, click on blocks to render them.

`node server.js // http://localhost:8002`
