import { locale, waitLocale } from 'svelte-i18n';

export const load = async ({ params }) => {
	const { locale: paramLocale } = params;

	// Set the locale to the one specified in the URL
	locale.set(paramLocale);
	await waitLocale();

	return {
		locale: paramLocale
	};
};
