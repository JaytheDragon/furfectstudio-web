import { browser } from '$app/environment';
import { init, locale, register } from 'svelte-i18n';
import { DEFAULT_LOCALE } from '@/consonant';

register('ko', () => import('./locale/ko.json'));
register('ja', () => import('./locale/ja.json'));
register('en', () => import('./locale/en.json'));
register('zh', () => import('./locale/zh.json'));

if (!browser) locale.set(DEFAULT_LOCALE);

init({
	fallbackLocale: DEFAULT_LOCALE,
	initialLocale: browser ? window.navigator.language : DEFAULT_LOCALE
});
