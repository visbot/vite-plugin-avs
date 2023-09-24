# @visbot/vite-plugin-avs

> A Vite plugin for your AVS presets

[![License](https://img.shields.io/github/license/visbot/vite-plugin-avs?color=blue&style=for-the-badge)](https://github.com/visbot/vite-plugin-avs/blob/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@visbot/vite-plugin-livescript?style=for-the-badge)](https://www.npmjs.org/package/vite-plugin-livescript)
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

## License

This work is licensed under [The MIT License](LICENSE)
