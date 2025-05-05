import { defineConfig } from 'tsup';

export default defineConfig({
	clean: true,
	dts: true,
	entry: ['index.ts'],
	format: 'esm',
	minify: true,
	platform: 'node',
	treeshake: 'recommended',
});
