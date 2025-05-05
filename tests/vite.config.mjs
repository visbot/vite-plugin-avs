import { defineConfig } from 'vite';
import avs from '../dist/index.js';

export default defineConfig({
	plugins: [avs()],
	build: {
		emptyOutDir: false,
		rollupOptions: {
			input: 'test.mjs',
		},
	},
});
