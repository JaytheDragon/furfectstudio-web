import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const SUPPORT_LOCALE = ['ko', 'en', 'ja', 'zh'];
const PAGES = ['/'];

// GitHub Pages configuration
const dev = process.argv.includes('dev');
const base = dev ? '' : process.env.BASE_PATH || '/furfectstudio-web';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({ 
			pages: 'build', 
			assets: 'build',
			fallback: undefined,
			strict: false
		}),
		paths: {
			base: base
		},
		prerender: {
			entries: [
				'/',
				...SUPPORT_LOCALE.map((locale) => `/${locale}/`)
			],
			handleHttpError: 'warn'
		},
		alias: {
			'@/*': 'src/*'
		}
	}
};

export default config;
