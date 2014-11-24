JSON-Template-Engine
====================

Create html from JSON objects


```javascript
var html = tag({tag: "a", href: "http//google.se", html: "google"});
```


##Examples

###Render link

```javascript
{tag: "a", href: "http//google.se", html: "google"}
```
Render to

```html
<a href="http://google.se">google</a>
```

###Render table

```javascript
{tag: "table", html:[
    {tag: "tr", html: [
        {tag: "td", html: "1"},
        {tag: "td", html: "2"},
        {tag: "td", html: "3"},
    ]}
]}
```
Render to

```html
<table>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>
</table>
```

###Render table with 12 rows

```javascript
{tag: "table", html: function(){
    var res = [];

    for (var i = 0; i < 12; i++){
        res.push({tag: "tr", html: {tag: "td", html: i}});
    }
    return res;
}}
```
Render to

```html
<table>
    <tr><td>1</td></tr>
    <tr><td>2</td></tr>
    <tr><td>3</td></tr>
    <tr><td>4</td></tr>
    <tr><td>5</td></tr>
    <tr><td>6</td></tr>
    <tr><td>7</td></tr>
    <tr><td>8</td></tr>
    <tr><td>9</td></tr>
    <tr><td>10</td></tr>
    <tr><td>11</td></tr>
    <tr><td>12</td></tr>
</table>
```