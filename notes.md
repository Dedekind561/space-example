1. recap components, mitchs lecture etc

2. draw out wireframe

3. plan grid

4. give components class names
```js
<header className="Header">
<Router className="Router">
<main className="Home">
<main className="PlanetList">
<main className="SinglePlanet">
<footer className="footer">
```

5. comment out contents/data

6. give components borders & set up grid
```css
/* App & Main Grid */
.App {
  text-align: center;
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 80vh 1fr;
}

.Header {
  border: solid 1px red;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.Router {
  border: solid 1px blue;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.Footer {
  border: solid 1px goldenrod;
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}

/* Within Router: */

.Home {
  border: solid 1px green;
  height: 100%;
}

.PlanetList {
  border: solid 1px green;
  height: 100%;
}

.SinglePlanet {
  border: solid 1px green;
  height: 100%;
  overflow-y: scroll;
}
```

7. work on PlanetList component grid

```css
/* PlanetList */
.PlanetList {
  border: solid 1px green;
  height: 100%;
  display: grid;
  grid-template-columns: 23fr 1fr;
  grid-template-rows: 1fr 9fr;
}

.PlanetAdder {
  border: solid 1px grey;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}
.PlanetList h1 {
  border: solid 1px greenyellow;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.PlanetList ul {
  border: solid 1px pink;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  overflow-y: scroll;
}
```

8. fix list styling on PlanetList
```css
.PlanetList ul {
  border: solid 1px pink;
  grid-row: 3 / 4;
  overflow-y: scroll;
  list-style: none;
  margin: 0px;
  padding: 0px;
}
```

9. font:
```html
<link href="https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700,800,900&display=swap" rel="stylesheet">
```