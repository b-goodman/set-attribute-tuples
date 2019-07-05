# setAttributeTuples

Sets multiple attributes to an Element.

## Installation

```bash
npm install set-attribute-tuples
```

## Usage

### Set multiple attributes

```javascript
import setAttributeTuples from "set-attribute-tuples"

const div = document.createElement("div");
setAttributeTuples(div, [ ["id", "undo"], ["class", "btn-wrapper"] ]);
```

## (Typescript) Optionally cast as a specific element type

```typescript
const div = setAttributeTuples<HTMLDivElement>(
    document.createElement("div"),
    [["data-blah", "12345"]]
);

console.log(div.dataset.blah)
// "12345"
```
