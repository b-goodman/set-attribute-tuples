# setAttributeTuples

Sets multiple attributes to an Element.

## Installation

```bash
npm install set-attribute-tuples
```

```javascript
import setAttributeTuples from "set-attribute-tuples"
```

## Usage

---

### Set multiple attributes

```javascript
const div = document.createElement("div");
setAttributeTuples(div, [ ["id", "undo"], ["class", "btn-wrapper"] ]);

console.log(div.className);
//"btn-wrapper"
```

---

### (Typescript) Optionally cast as a specific element type

```typescript
const div = document.createElement("div");
const div = setAttributeTuples<HTMLDivElement>( div, [["data-blah", "12345"]]
);

console.log(div.dataset.blah)
// "12345"
```

---

## Development

| description    |          npm          |      yarn    |
|:--------------:|:---------------------:|:------------:|
| Build package  | `npm run build`       | `yarn build` |
| Run tests      | `npm run test`        | `yarn test`  |
