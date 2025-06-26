<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';

	onMount(() => {
		if (browser) {
			// Get browser language
			const browserLang = navigator.language.slice(0, 2);
			const supportedLangs = ['ko', 'en', 'ja', 'zh'];
			const defaultLang = supportedLangs.includes(browserLang) ? browserLang : 'ko';
			
			// Redirect to language-specific page with proper base path
			goto(`${base}/${defaultLang}/`, { replaceState: true });
		}
	});
</script>

<svelte:head>
	<title>Redirecting... | Furfect! Studio</title>
</svelte:head>

<div class="flex items-center justify-center min-h-screen bg-gray-900 text-white">
	<div class="text-center">
		<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
		<p class="text-lg">Redirecting to your language...</p>
		<p class="text-sm text-gray-400 mt-2">Please wait a moment</p>
	</div>
</div>
