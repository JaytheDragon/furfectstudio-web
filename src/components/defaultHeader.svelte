<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import Line from '@/components/line.svelte';

	export let paramLocale: string;
</script>

<header class="z-30 flex h-28 w-full items-center justify-between px-8 py-5">
	<img src="{base}/Header_Logo.png" alt={$_('img_alt.header_logo')} />

	<ul class="font-koho flex items-center text-2xl font-normal">
		<li><a href="{base}/{paramLocale}/game">GAME</a></li>
		<Line></Line>
		<li><a href="{base}/{paramLocale}/aboutus">ABOUT US</a></li>
		<Line></Line>
		<li><a href="{base}/{paramLocale}/contact">CONTACT</a></li>
		<Line></Line>
		<li><a href="{base}/{paramLocale}/support">SUPPORT</a></li>
	</ul>
</header>
