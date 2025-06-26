<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import MainBackground from '@/components/mainBackground.svelte';
</script>

<svelte:head>
	<title>{$_('pages.aboutus.title')} | Furfect! Studio</title>
</svelte:head>

<main class="relative flex min-h-[calc(100vh-7rem)] w-full flex-col items-center justify-center">
	<MainBackground />
	
	<div class="z-10 max-w-6xl mx-auto px-4 py-8">
		<div class="text-center mb-12">
			<h1 class="text-5xl font-bold mb-6">{$_('pages.aboutus.title')}</h1>
			<p class="text-xl text-gray-300 max-w-3xl mx-auto">{$_('pages.aboutus.description')}</p>
		</div>
		
		<!-- Studio Story -->
		<div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12">
			<h2 class="text-4xl font-bold mb-6 text-center">{$_('pages.aboutus.story.title')}</h2>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
				<div>
					<p class="text-gray-300 leading-relaxed mb-4">{$_('pages.aboutus.story.part1')}</p>
					<p class="text-gray-300 leading-relaxed mb-4">{$_('pages.aboutus.story.part2')}</p>
					<p class="text-gray-300 leading-relaxed">{$_('pages.aboutus.story.part3')}</p>
				</div>
				<div class="bg-gray-800 rounded-lg aspect-video flex items-center justify-center">
					<span class="text-gray-400">{$_('pages.aboutus.story.image_placeholder')}</span>
				</div>
			</div>
		</div>
		
		<!-- Mission & Vision -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
			<div class="bg-white/5 backdrop-blur-sm rounded-xl p-6">
				<h3 class="text-2xl font-semibold mb-4 text-blue-400">{$_('pages.aboutus.mission.title')}</h3>
				<p class="text-gray-300 leading-relaxed">{$_('pages.aboutus.mission.description')}</p>
			</div>
			
			<div class="bg-white/5 backdrop-blur-sm rounded-xl p-6">
				<h3 class="text-2xl font-semibold mb-4 text-purple-400">{$_('pages.aboutus.vision.title')}</h3>
				<p class="text-gray-300 leading-relaxed">{$_('pages.aboutus.vision.description')}</p>
			</div>
		</div>
		
		<!-- Values -->
		<div class="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-12">
			<h2 class="text-3xl font-bold mb-8 text-center">{$_('pages.aboutus.values.title')}</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="text-center">
					<div class="text-4xl mb-4">🎨</div>
					<h3 class="text-xl font-semibold mb-3">{$_('pages.aboutus.values.creativity.title')}</h3>
					<p class="text-gray-300">{$_('pages.aboutus.values.creativity.description')}</p>
				</div>
				<div class="text-center">
					<div class="text-4xl mb-4">🤝</div>
					<h3 class="text-xl font-semibold mb-3">{$_('pages.aboutus.values.collaboration.title')}</h3>
					<p class="text-gray-300">{$_('pages.aboutus.values.collaboration.description')}</p>
				</div>
				<div class="text-center">
					<div class="text-4xl mb-4">⭐</div>
					<h3 class="text-xl font-semibold mb-3">{$_('pages.aboutus.values.quality.title')}</h3>
					<p class="text-gray-300">{$_('pages.aboutus.values.quality.description')}</p>
				</div>
			</div>
		</div>
		
		<!-- Team Members -->
		<div class="mb-12">
			<h2 class="text-4xl font-bold text-center mb-8">{$_('pages.aboutus.team.title')}</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<!-- Member 1 -->
				<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all">
					<div class="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
						<span class="text-4xl">👨‍💻</span>
					</div>
					<h3 class="text-2xl font-semibold mb-2">{$_('pages.aboutus.team.member1.name')}</h3>
					<p class="text-blue-400 mb-3">{$_('pages.aboutus.team.member1.role')}</p>
					<p class="text-gray-300 text-sm leading-relaxed mb-4">{$_('pages.aboutus.team.member1.description')}</p>
					<blockquote class="text-gray-400 italic text-xs">"{$_('pages.aboutus.team.member1.quote')}"</blockquote>
				</div>
				
				<!-- Member 2 -->
				<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all">
					<div class="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
						<span class="text-4xl">🎨</span>
					</div>
					<h3 class="text-2xl font-semibold mb-2">{$_('pages.aboutus.team.member2.name')}</h3>
					<p class="text-purple-400 mb-3">{$_('pages.aboutus.team.member2.role')}</p>
					<p class="text-gray-300 text-sm leading-relaxed mb-4">{$_('pages.aboutus.team.member2.description')}</p>
					<blockquote class="text-gray-400 italic text-xs">"{$_('pages.aboutus.team.member2.quote')}"</blockquote>
				</div>
				
				<!-- Member 3 -->
				<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all">
					<div class="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
						<span class="text-4xl">🎵</span>
					</div>
					<h3 class="text-2xl font-semibold mb-2">{$_('pages.aboutus.team.member3.name')}</h3>
					<p class="text-green-400 mb-3">{$_('pages.aboutus.team.member3.role')}</p>
					<p class="text-gray-300 text-sm leading-relaxed mb-4">{$_('pages.aboutus.team.member3.description')}</p>
					<blockquote class="text-gray-400 italic text-xs">"{$_('pages.aboutus.team.member3.quote')}"</blockquote>
				</div>
				
				<!-- Member 4 -->
				<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all">
					<div class="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
						<span class="text-4xl">✍️</span>
					</div>
					<h3 class="text-2xl font-semibold mb-2">{$_('pages.aboutus.team.member4.name')}</h3>
					<p class="text-yellow-400 mb-3">{$_('pages.aboutus.team.member4.role')}</p>
					<p class="text-gray-300 text-sm leading-relaxed mb-4">{$_('pages.aboutus.team.member4.description')}</p>
					<blockquote class="text-gray-400 italic text-xs">"{$_('pages.aboutus.team.member4.quote')}"</blockquote>
				</div>
			</div>
		</div>
		
		<!-- Contact CTA -->
		<div class="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 text-center">
			<h2 class="text-3xl font-bold mb-4">{$_('pages.aboutus.cta.title')}</h2>
			<p class="text-gray-300 mb-6 max-w-2xl mx-auto">{$_('pages.aboutus.cta.description')}</p>
			<div class="flex flex-wrap justify-center gap-4">
				<a href="{base}/{$_('locale')}/contact" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
					{$_('pages.aboutus.cta.contact_button')}
				</a>
				<a href="{base}/{$_('locale')}/recruitment" class="border border-purple-400 hover:bg-purple-600 text-purple-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
					{$_('pages.aboutus.cta.join_button')}
				</a>
			</div>
		</div>
	</div>
</main> 