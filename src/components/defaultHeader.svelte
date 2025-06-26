<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import Line from '@/components/line.svelte';

	export let paramLocale: string;
</script>

<header class="z-30 flex h-28 w-full items-center justify-between px-8 py-5">
	<a href="{base}/{paramLocale}/" class="cursor-pointer hover:opacity-80 transition-opacity">
		<img src="{base}/Header_Logo.png" alt={$_('img_alt.header_logo')} />
	</a>

	<ul class="font-koho flex items-center text-xl font-normal">
		<li><a href="{base}/{paramLocale}/game" class="hover:text-blue-300 transition-colors">GAME</a></li>
		<Line></Line>
		<li><a href="{base}/{paramLocale}/aboutus" class="hover:text-blue-300 transition-colors">ABOUT US</a></li>
		<Line></Line>
		<li><a href="{base}/{paramLocale}/contact" class="hover:text-blue-300 transition-colors">CONTACT</a></li>
		<Line></Line>
		<li><a href="{base}/{paramLocale}/sponsorship" class="hover:text-blue-300 transition-colors">SUPPORT</a></li>
		<Line></Line>
		<li><a href="{base}/{paramLocale}/recruitment" class="hover:text-blue-300 transition-colors">RECRUIT</a></li>
	</ul>
</header>
