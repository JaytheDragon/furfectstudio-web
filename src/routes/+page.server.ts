import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load = ({ request }: { request: Request }) => {
	// Get the Accept-Language header
	const acceptLanguage = request.headers.get('accept-language') || 'ko';
	const browserLang = acceptLanguage.split(',')[0].slice(0, 2);
	
	// Supported languages (following original structure)
	const supportedLangs = ['ko', 'en', 'ja', 'zh'];
	const defaultLang = supportedLangs.includes(browserLang) ? browserLang : 'ko';
	
	// Redirect to the appropriate language page with base path
	throw redirect(302, `${base}/${defaultLang}/`);
}; 