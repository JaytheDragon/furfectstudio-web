import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const SUPPORT_LOCALE = ['ko', 'en', 'ja', 'zh'];
const PAGES = ['/'];

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
			fallback: '404.html',
			strict: false
		}),
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
