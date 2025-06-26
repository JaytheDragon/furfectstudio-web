export const prerender = true;

// Temporarily disabled to avoid conflicts with client-side routing
// Server-side redirects can cause issues with GitHub Pages SPA routing

/*
import { DEFAULT_LOCALE, SUPPORT_LOCALE } from '@/consonant';
import type { ServerLoad } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const load: ServerLoad = async ({ url, request }) => {
	const acceptLang = request.headers.get('accept-language');
	const currentLocale = acceptLang?.split(',')[0].slice(0, 2) ?? DEFAULT_LOCALE;

	// 이미 언어 코드가 붙어 있을 경우, 아무 동작 없이 함수 종료
	if (SUPPORT_LOCALE.includes(url.pathname.split('/')[1])) return;

	// 정적 파일일 경우, 언어태그 무시
	if (url.pathname.match(/\.[a-zA-Z0-9]+$/)) return;
	const path = url.pathname === '/' ? '' : url.pathname.replace(/\/$/, '');
	throw redirect(303, '/' + currentLocale + path);
};
*/
