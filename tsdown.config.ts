import { defineConfig } from 'tsdown';

export default defineConfig({
	outDir: 'lib',
	tsconfig: './tsconfig.json',
	attw: true,
	publint: true,
	exports: true,
});
