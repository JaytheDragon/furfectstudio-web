# Furfect! Studio 공식 웹사이트

`Furfect! Studio`의 공식 웹사이트입니다.

[웹사이트 확인하기](furfectstudio.com)

## 사용된 기술 스택

- svelte

  - svelte-kit
  - svelte-i18n
  - adapter-static

- tailwindcss
- typescript
- vite

## 프로젝트 실행법 (개발 환경용)

1. `node.js` 설치 (`22.14.10` 사용)
2. `yarn` 설치 (`1.22.22` 사용)
3. 명령어 `yarn` 실행으로 의존성 설치
4. 명령어 `yarn dev` 실행으로 개발서버 시작
5. `https://localhost:3000/` 접속 (컴퓨터 환경에 따라 주소가 다를 수도 있음)

## 해당 프로젝트의 커밋 템플릿

[`.gitmessage.txt` 참고](/.gitmessage.txt)

커밋 스타일 통일을 위해 커밋 탬플릿을 만들어 뒀습니다!

프로젝트 클론 후 최초 한번은 커밋 템플릿 적용 해주세요.

```bash
# 해당 깃 저장소에 커밋 템플릿 적용
git config commit.template .gitmessage.txt
```

## 작업 순서 (협업 플로우)

1. `develop` 브랜치로 변경
2. `develop` 브랜치에서 `태그/설명` 작명으로 새 브랜치 생성<br/>
   브랜치 태그는 아래 소제목 참고
3. 작업 중, 커밋은 커밋 템플릿 사용해서 업로드
4. 작업 후, **`merge`가 아닌** `develop` 브랜치에 PR 올리기
5. PR 수락 후 `develop` 브랜치에 병합

## 브랜치 및 커밋 태그

- `feat` : 새 기능 추가
- `fix` : 버그 수정
- `docs` : 문서 추가 및 수정
- `refact` : 코드 리팩토링
- `style` : 코드 의미에 영향을 주지 않는 변경
- `design` : html, css 등의 화면 레이아웃 수정
- `chore` : 빌드 혹은 패키지 매니저 수정

## 언어 추가하기

1. `src/lib/i18n/locale` 폴더 들어가기
2. `ko.json` 복사 후, 해당 언어 코드에 맞게 이름 변경<br/>
   이때, 언어 코드는 [`ISO 639-3`](https://iso639-3.sil.org/code_tables/download_tables)을 권장
3. `json` 파일의 값을 해당 언어에 맞게 변경
4. `src/lib/i18n/index.ts` 수정

```typescript
// 추가 하려는 언어가 프랑스어(fr)로 가정
register('ko', () => import('./locale/ko.json'));
register('ja', () => import('./locale/ja.json'));
register('en', () => import('./locale/en.json'));
register('zh', () => import('./locale/zh.json'));
// 해당 줄 추가 / fr은 언어 코드에 맞게 수정하기
register('fr', () => import('./locale/fr.json'));
```

5. `src/consonant.ts` 수정

```typescript
// 마찬가지로 추가 하려는 언어가 프랑스어(fr)로 가정
export const SUPPORT_LOCALE_LANGCODE: Record<string, string> = {
	ko: 'ko-KR',
	en: 'en-US',
	ja: 'ja-JP',
	zh: 'zh-CN', // 쉼표 추가 잊기 말기 / 잊으면 오류남
	// 해당 줄 추가 / fr은 언어 코드에 맞게 수정하기
	fr: 'fr-FR'
};
```

6. `app.html` 수정

```html
<script>
	var l = window.navigator.language.slice(0, 2),
		s = ['ko', 'ja', 'en', 'zh', 'fr'], // 여기에 언어 코드 추가
		p = window.location.pathname.split('/')[1];

	if (!p) window.location.replace('/' + (s.indexOf(l) !== -1 ? l : 'ko'));
	else if (s.indexOf(p) === -1) window.location.replace('/' + l + window.location.pathname);
</script>
```
