<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import LogoAnimationPlayer from '@/components/logoAnimationPlayer.svelte';
	import MainBackground from '@/components/mainBackground.svelte';

	let showSlogan = false;

	onMount(() => {
		// Show slogan after logo animation (approximately 3 seconds)
		setTimeout(() => {
			showSlogan = true;
		}, 3000);
	});
</script>

<main class="relative flex min-h-[calc(100vh-7rem)] w-full flex-col items-center justify-center">
	<MainBackground />

	<div class="z-10 flex flex-col items-center">
		<LogoAnimationPlayer
			HEVCAlphaSrc="{base}/logo_animation.mov"
			WebmSrc="{base}/logo_animation.webm"
			className="mb-8 w-1/3 min-w-[300px]"
		/>
		
		{#if showSlogan}
			<div class="text-center animate-fade-in">
				<h1 class="text-4xl md:text-6xl font-bold mb-4 text-white">
					{$_('home.title')}
				</h1>
				<p class="text-xl md:text-2xl text-gray-300 mb-8">
					{$_('home.slogan')}
				</p>
				<div class="flex flex-wrap justify-center gap-4">
					<a 
						href="{base}/{$_('locale')}/game" 
						class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
					>
						{$_('nav.game')}
					</a>
					<a 
						href="{base}/{$_('locale')}/aboutus" 
						class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
					>
						{$_('nav.aboutus')}
					</a>
				</div>
			</div>
		{/if}
	</div>
</main>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 1s ease-out;
	}
</style>
