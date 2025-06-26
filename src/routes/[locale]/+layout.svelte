<script lang="ts">
	import { SUPPORT_LOCALE } from '@/consonant';
	import { applyAction } from '$app/forms';
	import DefaultHeader from '@/components/defaultHeader.svelte';

	export let data;
	const { locale: paramLocale } = data;

	if (!SUPPORT_LOCALE.includes(paramLocale)) {
		applyAction({ type: 'error', error: { message: 'unsupported language' } });
	}
</script>

<div class="bg-bg-main flex h-full w-full min-w-screen flex-col text-white">
	<DefaultHeader {paramLocale} />

	<main class="flex-1">
		<slot />
	</main>
</div>
