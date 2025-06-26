<script lang="ts">
	import { _ } from 'svelte-i18n';
	import MainBackground from '@/components/mainBackground.svelte';
</script>

<svelte:head>
	<title>{$_('pages.contact.title')} | Furfect! Studio</title>
</svelte:head>

<main class="relative flex min-h-[calc(100vh-7rem)] w-full flex-col items-center justify-center">
	<MainBackground />
	
	<div class="z-10 max-w-4xl text-center">
		<h1 class="text-6xl font-bold mb-8">{$_('pages.contact.title')}</h1>
		<p class="text-xl mb-8">{$_('pages.contact.description')}</p>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
			<div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
				<h3 class="text-2xl font-semibold mb-4">📧 Email</h3>
				<p class="text-gray-300">contact@furfectstudio.com</p>
			</div>
			<div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
				<h3 class="text-2xl font-semibold mb-4">🐦 Social</h3>
				<p class="text-gray-300">@FurfectStudio</p>
			</div>
		</div>
		
		<div class="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-8">
			<h3 class="text-2xl font-semibold mb-6">Send us a message</h3>
			<form class="space-y-4">
				<input type="text" placeholder="Your Name" class="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300" />
				<input type="email" placeholder="Your Email" class="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300" />
				<textarea placeholder="Your Message" rows="4" class="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300"></textarea>
				<button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold">Send Message</button>
			</form>
		</div>
	</div>
</main> 