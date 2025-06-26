import type { Handle } from '@sveltejs/kit';
import { DEFAULT_LOCALE, SUPPORT_LOCALE, SUPPORT_LOCALE_LANGCODE } from './consonant';

export const handle = (async ({ event, resolve }) => {
	const urlLocale = event.url.pathname.split('/')[1];
	const locale = SUPPORT_LOCALE.includes(urlLocale) ? urlLocale : DEFAULT_LOCALE;

	const returnLocale = SUPPORT_LOCALE_LANGCODE[locale];

	const resp = resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', returnLocale)
	});

	return resp;
}) satisfies Handle;
