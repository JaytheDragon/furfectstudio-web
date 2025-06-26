<script lang="ts">
	import { _ } from 'svelte-i18n';
	import LogoAnimationPlayer from '@/components/logoAnimationPlayer.svelte';
	import MainBackground from '@/components/mainBackground.svelte';
</script>

<main class="relative flex min-h-[calc(100vh-7rem)] w-full flex-col items-center justify-center">
	<MainBackground />

	<LogoAnimationPlayer
		HEVCAlphaSrc="/logo_animation.mov"
		WebmSrc="/logo_animation.webm"
		className="z-10 mb-[7rem] w-1/3"
	/>
</main>
