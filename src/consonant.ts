// i18n

export const SUPPORT_LOCALE_LANGCODE: Record<string, string> = {
	ko: 'ko-KR',
	en: 'en-US',
	ja: 'ja-JP',
	zh: 'zh-CN'
};

export const SUPPORT_LOCALE = Object.keys(SUPPORT_LOCALE_LANGCODE);
export const DEFAULT_LOCALE = SUPPORT_LOCALE[0];
