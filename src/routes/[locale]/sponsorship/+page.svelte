<script lang="ts">
	import { _ } from 'svelte-i18n';
	import MainBackground from '@/components/mainBackground.svelte';
</script>

<svelte:head>
	<title>{$_('pages.sponsorship.title')} | Furfect! Studio</title>
</svelte:head>

<main class="relative flex min-h-[calc(100vh-7rem)] w-full flex-col items-center justify-center">
	<MainBackground />
	
	<div class="z-10 max-w-6xl mx-auto px-4 py-8">
		<div class="text-center mb-12">
			<h1 class="text-5xl font-bold mb-6">{$_('pages.sponsorship.title')}</h1>
			<p class="text-xl text-gray-300 max-w-3xl mx-auto">{$_('pages.sponsorship.description')}</p>
		</div>
		
		<!-- Support Options -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
			<div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/15 transition-all">
				<div class="text-4xl mb-4">☕</div>
				<h3 class="text-2xl font-semibold mb-4">{$_('pages.sponsorship.coffee.title')}</h3>
				<p class="text-gray-300 mb-6">{$_('pages.sponsorship.coffee.description')}</p>
				<div class="text-3xl font-bold text-yellow-400 mb-4">$3</div>
				<button class="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold w-full transition-colors">
					{$_('pages.sponsorship.coffee.button')}
				</button>
			</div>
			
			<div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/15 transition-all border-2 border-blue-400">
				<div class="text-4xl mb-4">🎮</div>
				<h3 class="text-2xl font-semibold mb-4">{$_('pages.sponsorship.supporter.title')}</h3>
				<p class="text-gray-300 mb-6">{$_('pages.sponsorship.supporter.description')}</p>
				<div class="text-3xl font-bold text-blue-400 mb-4">$10</div>
				<button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold w-full transition-colors">
					{$_('pages.sponsorship.supporter.button')}
				</button>
				<div class="mt-4 text-sm text-blue-300">{$_('pages.sponsorship.popular')}</div>
			</div>
			
			<div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/15 transition-all">
				<div class="text-4xl mb-4">⭐</div>
				<h3 class="text-2xl font-semibold mb-4">{$_('pages.sponsorship.premium.title')}</h3>
				<p class="text-gray-300 mb-6">{$_('pages.sponsorship.premium.description')}</p>
				<div class="text-3xl font-bold text-purple-400 mb-4">$25</div>
				<button class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold w-full transition-colors">
					{$_('pages.sponsorship.premium.button')}
				</button>
			</div>
		</div>
		
		<!-- Benefits Section -->
		<div class="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8">
			<h2 class="text-3xl font-semibold mb-6 text-center">{$_('pages.sponsorship.benefits.title')}</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="flex items-start space-x-3">
					<div class="text-green-400 text-xl">✓</div>
					<div>
						<h4 class="font-semibold mb-2">{$_('pages.sponsorship.benefits.early_access')}</h4>
						<p class="text-gray-300 text-sm">{$_('pages.sponsorship.benefits.early_access_desc')}</p>
					</div>
				</div>
				<div class="flex items-start space-x-3">
					<div class="text-green-400 text-xl">✓</div>
					<div>
						<h4 class="font-semibold mb-2">{$_('pages.sponsorship.benefits.discord')}</h4>
						<p class="text-gray-300 text-sm">{$_('pages.sponsorship.benefits.discord_desc')}</p>
					</div>
				</div>
				<div class="flex items-start space-x-3">
					<div class="text-green-400 text-xl">✓</div>
					<div>
						<h4 class="font-semibold mb-2">{$_('pages.sponsorship.benefits.updates')}</h4>
						<p class="text-gray-300 text-sm">{$_('pages.sponsorship.benefits.updates_desc')}</p>
					</div>
				</div>
				<div class="flex items-start space-x-3">
					<div class="text-green-400 text-xl">✓</div>
					<div>
						<h4 class="font-semibold mb-2">{$_('pages.sponsorship.benefits.credits')}</h4>
						<p class="text-gray-300 text-sm">{$_('pages.sponsorship.benefits.credits_desc')}</p>
					</div>
				</div>
			</div>
		</div>
		
		<!-- FAQ Section -->
		<div class="text-center">
			<h2 class="text-3xl font-semibold mb-6">{$_('pages.sponsorship.faq.title')}</h2>
			<p class="text-gray-300 mb-4">{$_('pages.sponsorship.faq.description')}</p>
			<p class="text-sm text-gray-400">{$_('pages.sponsorship.faq.note')}</p>
		</div>
	</div>
</main> 