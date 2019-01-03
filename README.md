# ansi-cursor-position

Get the current position of the terminal cursor in an ANSI compatible terminal.

```
npm install ansi-cursor-position
```

## Usage

``` js
const position = require('ansi-cursor-position')

position((x, y) => console.log('current cursor position is', x, y))
```

## License

MIT
