<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import LogoAnimationPlayer from '@/components/logoAnimationPlayer.svelte';
	import MainBackground from '@/components/mainBackground.svelte';
</script>

<main class="relative flex min-h-[calc(100vh-7rem)] w-full flex-col items-center justify-center">
	<MainBackground />

	<LogoAnimationPlayer
		HEVCAlphaSrc="{base}/logo_animation.mov"
		WebmSrc="{base}/logo_animation.webm"
		className="z-10 mb-[7rem] w-1/3"
	/>
</main>
