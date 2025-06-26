<script lang="ts">
	import { _ } from 'svelte-i18n';
	import MainBackground from '@/components/mainBackground.svelte';
</script>

<svelte:head>
	<title>{$_('pages.support.title')} | Furfect! Studio</title>
</svelte:head>

<main class="relative flex min-h-[calc(100vh-7rem)] w-full flex-col items-center justify-center">
	<MainBackground />
	
	<div class="z-10 max-w-4xl text-center">
		<h1 class="text-6xl font-bold mb-8">{$_('pages.support.title')}</h1>
		<p class="text-xl mb-8">{$_('pages.support.description')}</p>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
			<div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
				<h3 class="text-2xl font-semibold mb-4">📚 FAQ</h3>
				<p class="text-gray-300">Find answers to common questions</p>
				<button class="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">View FAQ</button>
			</div>
			<div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
				<h3 class="text-2xl font-semibold mb-4">🎮 Game Help</h3>
				<p class="text-gray-300">Get help with our games</p>
				<button class="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">Game Support</button>
			</div>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
			<div class="bg-white/5 backdrop-blur-sm rounded-lg p-4">
				<h4 class="text-lg font-semibold mb-2">🔧 Technical Issues</h4>
				<p class="text-sm text-gray-300">Report bugs and technical problems</p>
			</div>
			<div class="bg-white/5 backdrop-blur-sm rounded-lg p-4">
				<h4 class="text-lg font-semibold mb-2">💰 Billing Support</h4>
				<p class="text-sm text-gray-300">Questions about payments and subscriptions</p>
			</div>
			<div class="bg-white/5 backdrop-blur-sm rounded-lg p-4">
				<h4 class="text-lg font-semibold mb-2">🎯 Feature Requests</h4>
				<p class="text-sm text-gray-300">Suggest new features and improvements</p>
			</div>
		</div>
	</div>
</main> 