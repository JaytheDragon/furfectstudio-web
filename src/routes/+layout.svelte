<script lang="ts">
	import '$lib/i18n/i18n';
	import { onMount } from 'svelte';
	import '@/app.css';
	import { waitLocale } from 'svelte-i18n';
	import { base } from '$app/paths';

	import { _ } from 'svelte-i18n';

	let localeReady = $state(false);

	onMount(async () => {
		await waitLocale();
		localeReady = true;
	});

	let { children } = $props();
</script>

<svelte:head>
	<title>Furfect! Sudio</title>

	<link rel="apple-touch-icon" sizes="57x57" href="{base}/favicons/apple-icon-57x57.png" />
	<link rel="apple-touch-icon" sizes="60x60" href="{base}/favicons/apple-icon-60x60.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="{base}/favicons/apple-icon-72x72.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="{base}/favicons/apple-icon-76x76.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="{base}/favicons/apple-icon-114x114.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="{base}/favicons/apple-icon-120x120.png" />
	<link rel="apple-touch-icon" sizes="144x144" href="{base}/favicons/apple-icon-144x144.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="{base}/favicons/apple-icon-152x152.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="{base}/favicons/apple-icon-180x180.png" />
	<link rel="icon" type="image/png" sizes="192x192" href="{base}/favicons/android-icon-192x192.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="{base}/favicons/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="96x96" href="{base}/favicons/favicon-96x96.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="{base}/favicons/favicon-16x16.png" />
	<link rel="manifest" href="{base}/favicons/manifest.json" />
	<meta name="msapplication-TileColor" content="#ffffff" />
	<meta name="msapplication-TileImage" content="{base}/favicons/ms-icon-144x144.png" />
	<meta name="theme-color" content="#ffffff" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://furfectstudio.com" />
	<meta property="og:title" content="Content Title" />
	<meta property="og:image" content="{base}/og-cover.jpg" />
	<meta property="og:description" content={$_('helmet.description')} />
	<meta property="og:site_name" content="Furfect! Studio" />
	<meta property="og:locale" content="ko_KR" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="image" />
	<meta name="twitter:title" content="Furfect! Studio" />
	<meta name="twitter:description" content={$_('helmet.description')} />
	<meta name="twitter:image" content="{base}/og-cover.jpg" />
</svelte:head>

{#if localeReady}
	{@render children()}
{/if}
