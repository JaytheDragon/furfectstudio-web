<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	onMount(() => {
		// Get browser language
		const browserLang = navigator.language.slice(0, 2);
		const supportedLangs = ['ko', 'en', 'ja', 'zh'];
		const defaultLang = supportedLangs.includes(browserLang) ? browserLang : 'ko';
		
		// Redirect to language-specific page
		goto(`${base}/${defaultLang}/`, { replaceState: true });
	});
</script>

<div>
	<p>Redirecting...</p>
</div>
