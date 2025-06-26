<script lang="ts">
	import { _ } from 'svelte-i18n';
	import MainBackground from '@/components/mainBackground.svelte';
</script>

<svelte:head>
	<title>{$_('pages.game.title')} | Furfect! Studio</title>
</svelte:head>

<main class="relative flex min-h-[calc(100vh-7rem)] w-full flex-col items-center justify-center">
	<MainBackground />
	
	<div class="z-10 max-w-4xl text-center">
		<h1 class="text-6xl font-bold mb-8">{$_('pages.game.title')}</h1>
		<p class="text-xl mb-8">{$_('pages.game.description')}</p>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
			<div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
				<h3 class="text-2xl font-semibold mb-4">🎮 Game 1</h3>
				<p class="text-gray-300">Coming soon...</p>
			</div>
			<div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
				<h3 class="text-2xl font-semibold mb-4">🎯 Game 2</h3>
				<p class="text-gray-300">Coming soon...</p>
			</div>
		</div>
	</div>
</main> 