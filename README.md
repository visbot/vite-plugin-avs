# @visbot/vite-plugin-avs

> A Vite plugin for your AVS presets

[![License](https://img.shields.io/github/license/visbot/vite-plugin-avs?color=blue&style=for-the-badge)](https://github.com/visbot/vite-plugin-avs/blob/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@visbot/vite-plugin-avs?style=for-the-badge)](https://www.npmjs.org/package/@visbot/vite-plugin-avs)
[![Build](https://img.shields.io/github/actions/workflow/status/visbot/vite-plugin-avs/tests.yml?style=for-the-badge)](https://github.com/visbot/vite-plugin-avs/actions)

## Installation

`npm install -D @visbot/vite-plugin-avs`

## Usage

```js
import { defineConfig } from 'vite';
import avs from '@visbot/vite-plugin-avs';

export default defineConfig({
    plugins: [
        avs()
    ]
});
```

You are now set up to import your AVS presets as modules.

**Example**

```ts
import preset from './preset.avs';
```

## License

This work is licensed under [The MIT License](LICENSE)
