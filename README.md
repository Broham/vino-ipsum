Vino Ipsum
=========

A jQuery plugin that generates random 'lorem ipsum' snippets with wine based terminology. 

```html
<div>
    <p>
        Century poor-tasting well-known disgorge pits sugars key hollow acres sweet 
        exceedingly altitude croatia do tca.
    </p>
</div>
```

USAGE
--------

Using the Vino Ipsum plugin you can model a div containing a paragraph of filler text fifty words long like so..

```html
<div>
    <p class='vino-50'></p>
<div>
```  

Vino Ipsum targets any element with a class that has the prefix 'vino-' and populates it with a given amount of random words. The amount of words is defined by the class suffix which in this case is '50'.  

On page load the model above is rendered into something like..

```html
<div>
    <p class='vino-50'>
        Cotes destroyed grüner herbaceous through the grayish-purple hybrids oak component specific soft flavorful blanc hectare sugars doesnit enologist part west vin used multiplying unctuous part introduction mostly section throughout italy pronounced enjoys natural pressing his aromatic capture sweet grüner labrusca shipper origen now own while walls labrusca cava cotes same.
    </p>
</div>
```

```javascript
$('p').vino(50) // Populates all p elements with a random lorem snippet 50 words long
```
If no argument is passed into the function and no 'vino-' class is attached to the element in question, then the element will be populated with a snippet of arbitrary length (between 3 and 50 words).  


***

DEMO : https://broham.github.io/vino-ipsum/
