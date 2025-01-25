# LogPainter 🚀

![NPM Version](https://img.shields.io/npm/v/logpainter?color=blue&label=version&logo=npm)
![Downloads](https://img.shields.io/npm/dt/logpainter?logo=npm)
![License](https://img.shields.io/github/license/Federico-Pena/logpainter)
![TypeScript](https://img.shields.io/badge/TypeScript-Supported-blue?logo=typescript)
![GitHub stars](https://img.shields.io/github/stars/Federico-Pena/logpainter?style=social)

logpainter is a lightweight and easy-to-use package for adding **stylized console messages** and **animated loaders** in Node.js.

## Installation 📦

```sh
npm install logpainter
```

or for development

```sh
npm install logpainter --save-dev
```

---

## Usage 🛠️

### `consoleStyler` – Styled Console Messages 🎨

Use `consoleStyler` to display formatted messages in the terminal with colors, emojis, and text styles.

```ts
import { consoleStyler } from 'logpainter'

consoleStyler('This is a test', {
  color: 'red',
  emojiStart: 'world_map'
})
```

**Example Output:**

<!-- Add a GIF showcasing consoleStyler here -->

![Console Data Example](./path-to-your-gif.gif)

---

### `consoleLoader` – Animated Terminal Loaders ⏳

Use `consoleLoader` to display a loading animation while executing an asynchronous task.

```ts
import { consoleLoader } from 'logpainter'

consoleLoader(
  async () => new Promise((res) => setTimeout(() => res('Success'), 2000)),
  {
    message: 'Loading...',
    loaderName: 'arrows'
  }
)
  .then((res) =>
    consoleStyler(res, {
      color: 'green',
      emojiStart: 'thumbs_up'
    })
  )
  .catch((err) =>
    consoleStyler(err, {
      color: 'red',
      emojiStart: 'thumbs_down'
    })
  )
```

**Example Output:**

<!-- Add a GIF showcasing consoleLoader here -->

![Console Loader Example](./path-to-your-gif.gif)

---

## Available Options ⚙️

### `consoleStyler` Options:

| Option       | Type      | Description                                  |
| ------------ | --------- | -------------------------------------------- |
| `color`      | `string`  | Text color (`red`, `blue`, `green`, etc.).   |
| `bold`       | `boolean` | Bold text.                                   |
| `bgColor`    | `string`  | Background color.                            |
| `indent`     | `number`  | Spaces before the text.                      |
| `emojiStart` | `string`  | Emoji at the beginning.                      |
| `emojiEnd`   | `string`  | Emoji at the end.                            |
| `aling`      | `string`  | Text alingnment (`left`, `center`, `right`). |

---

### `consoleLoader` Options _(extends `consoleStyler` options)_

`consoleLoader` includes all options from `consoleStyler`, plus the following:

| Option       | Type     | Description                                      |
| ------------ | -------- | ------------------------------------------------ |
| `message`    | `string` | Loading message.                                 |
| `loaderName` | `string` | Loader animation style (`arrows`, `dots`, etc.). |

---

## TypeScript Support 🟦

LogPainter provides full TypeScript support. You can import types like this:

```ts
import type { ConsoleLoader, ConsoleStyler } from 'logpainter'
```

---

## License 📜

MIT License © 2025 [ChifoDev](https://github.com/Federico-Pena)
