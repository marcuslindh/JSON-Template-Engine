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