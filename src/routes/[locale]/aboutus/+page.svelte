<script lang="ts">
	import { _ } from 'svelte-i18n';
	import MainBackground from '@/components/mainBackground.svelte';
</script>

<svelte:head>
	<title>{$_('pages.aboutus.title')} | Furfect! Studio</title>
</svelte:head>

<main class="relative flex min-h-[calc(100vh-7rem)] w-full flex-col items-center justify-center">
	<MainBackground />
	
	<div class="z-10 max-w-4xl text-center">
		<h1 class="text-6xl font-bold mb-8">{$_('pages.aboutus.title')}</h1>
		<p class="text-xl mb-8">{$_('pages.aboutus.description')}</p>
		
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
			<div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
				<h3 class="text-2xl font-semibold mb-4">🎨 Creative</h3>
				<p class="text-gray-300">We create amazing experiences</p>
			</div>
			<div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
				<h3 class="text-2xl font-semibold mb-4">🚀 Innovative</h3>
				<p class="text-gray-300">Pushing boundaries in gaming</p>
			</div>
			<div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
				<h3 class="text-2xl font-semibold mb-4">🌟 Quality</h3>
				<p class="text-gray-300">Excellence in every detail</p>
			</div>
		</div>
	</div>
</main> 