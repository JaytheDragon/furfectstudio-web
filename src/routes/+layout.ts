import { browser } from '$app/environment';
import { SUPPORT_LOCALE } from '@/consonant';
import { redirect } from '@sveltejs/kit';

export const load = async ({ url }) => {
	// 서버 요청일 경우, ServerLoad에서 처리
	if (!browser) return;

	// 이미 언어 코드가 붙어 있을 경우, 아무 동작 없이 함수 종료
	if (SUPPORT_LOCALE.includes(url.pathname.split('/')[1])) return;

	const currentLocale = window.navigator.language.slice(0, 2);
	const path = url.pathname === '/' ? '' : url.pathname.replace(/\/$/, '');
	throw redirect(303, `/${currentLocale}${path.startsWith('/') ? '' : '/'}${path}`);
};
