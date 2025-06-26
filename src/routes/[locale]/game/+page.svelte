<script lang="ts">
	import { _ } from 'svelte-i18n';
	import MainBackground from '@/components/mainBackground.svelte';
</script>

<svelte:head>
	<title>{$_('pages.game.title')} | Furfect! Studio</title>
</svelte:head>

<main class="relative flex min-h-[calc(100vh-7rem)] w-full flex-col items-center justify-center">
	<MainBackground />
	
	<div class="z-10 max-w-6xl mx-auto px-4 py-8">
		<div class="text-center mb-12">
			<h1 class="text-5xl font-bold mb-6">{$_('pages.game.title')}</h1>
			<p class="text-xl text-gray-300 max-w-3xl mx-auto">{$_('pages.game.description')}</p>
		</div>
		
		<!-- Featured Game -->
		<div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
				<div>
					<h2 class="text-4xl font-bold mb-4">{$_('pages.game.featured.title')}</h2>
					<div class="flex flex-wrap gap-2 mb-4">
						<span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{$_('pages.game.featured.genre1')}</span>
						<span class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">{$_('pages.game.featured.genre2')}</span>
						<span class="bg-green-600 text-white px-3 py-1 rounded-full text-sm">{$_('pages.game.featured.genre3')}</span>
					</div>
					<p class="text-gray-300 mb-6 leading-relaxed">{$_('pages.game.featured.description')}</p>
					<div class="flex gap-4">
						<button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
							{$_('pages.game.featured.play_button')}
						</button>
						<button class="border border-gray-400 hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
							{$_('pages.game.featured.trailer_button')}
						</button>
					</div>
				</div>
				<div class="bg-gray-800 rounded-lg aspect-video flex items-center justify-center">
					<span class="text-gray-400">{$_('pages.game.featured.screenshot_placeholder')}</span>
				</div>
			</div>
		</div>
		
		<!-- Game Details -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
			<div class="bg-white/5 backdrop-blur-sm rounded-xl p-6">
				<h3 class="text-2xl font-semibold mb-4">{$_('pages.game.details.story_title')}</h3>
				<p class="text-gray-300 leading-relaxed mb-4">{$_('pages.game.details.story_part1')}</p>
				<p class="text-gray-300 leading-relaxed mb-4">{$_('pages.game.details.story_part2')}</p>
				<p class="text-gray-300 leading-relaxed">{$_('pages.game.details.story_part3')}</p>
			</div>
			
			<div class="bg-white/5 backdrop-blur-sm rounded-xl p-6">
				<h3 class="text-2xl font-semibold mb-4">{$_('pages.game.details.features_title')}</h3>
				<ul class="space-y-3">
					<li class="flex items-start space-x-3">
						<span class="text-blue-400 text-xl">✓</span>
						<span class="text-gray-300">{$_('pages.game.details.feature1')}</span>
					</li>
					<li class="flex items-start space-x-3">
						<span class="text-blue-400 text-xl">✓</span>
						<span class="text-gray-300">{$_('pages.game.details.feature2')}</span>
					</li>
					<li class="flex items-start space-x-3">
						<span class="text-blue-400 text-xl">✓</span>
						<span class="text-gray-300">{$_('pages.game.details.feature3')}</span>
					</li>
					<li class="flex items-start space-x-3">
						<span class="text-blue-400 text-xl">✓</span>
						<span class="text-gray-300">{$_('pages.game.details.feature4')}</span>
					</li>
					<li class="flex items-start space-x-3">
						<span class="text-blue-400 text-xl">✓</span>
						<span class="text-gray-300">{$_('pages.game.details.feature5')}</span>
					</li>
				</ul>
			</div>
		</div>
		
		<!-- Characters Section -->
		<div class="mb-12">
			<h2 class="text-4xl font-bold text-center mb-8">{$_('pages.game.characters.title')}</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<!-- Character 1 -->
				<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all">
					<div class="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
						<span class="text-4xl">🦊</span>
					</div>
					<h3 class="text-2xl font-semibold mb-2">{$_('pages.game.characters.char1.name')}</h3>
					<p class="text-blue-400 mb-3">{$_('pages.game.characters.char1.role')}</p>
					<p class="text-gray-300 text-sm leading-relaxed">{$_('pages.game.characters.char1.description')}</p>
				</div>
				
				<!-- Character 2 -->
				<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all">
					<div class="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
						<span class="text-4xl">🐺</span>
					</div>
					<h3 class="text-2xl font-semibold mb-2">{$_('pages.game.characters.char2.name')}</h3>
					<p class="text-purple-400 mb-3">{$_('pages.game.characters.char2.role')}</p>
					<p class="text-gray-300 text-sm leading-relaxed">{$_('pages.game.characters.char2.description')}</p>
				</div>
				
				<!-- Character 3 -->
				<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all">
					<div class="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
						<span class="text-4xl">🐱</span>
					</div>
					<h3 class="text-2xl font-semibold mb-2">{$_('pages.game.characters.char3.name')}</h3>
					<p class="text-green-400 mb-3">{$_('pages.game.characters.char3.role')}</p>
					<p class="text-gray-300 text-sm leading-relaxed">{$_('pages.game.characters.char3.description')}</p>
				</div>
			</div>
		</div>
		
		<!-- System Requirements -->
		<div class="bg-white/5 backdrop-blur-sm rounded-xl p-6">
			<h3 class="text-2xl font-semibold mb-6 text-center">{$_('pages.game.requirements.title')}</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<h4 class="text-lg font-semibold mb-3 text-green-400">{$_('pages.game.requirements.minimum')}</h4>
					<ul class="space-y-2 text-gray-300">
						<li><strong>OS:</strong> {$_('pages.game.requirements.min_os')}</li>
						<li><strong>CPU:</strong> {$_('pages.game.requirements.min_cpu')}</li>
						<li><strong>Memory:</strong> {$_('pages.game.requirements.min_memory')}</li>
						<li><strong>Graphics:</strong> {$_('pages.game.requirements.min_graphics')}</li>
						<li><strong>Storage:</strong> {$_('pages.game.requirements.min_storage')}</li>
					</ul>
				</div>
				<div>
					<h4 class="text-lg font-semibold mb-3 text-blue-400">{$_('pages.game.requirements.recommended')}</h4>
					<ul class="space-y-2 text-gray-300">
						<li><strong>OS:</strong> {$_('pages.game.requirements.rec_os')}</li>
						<li><strong>CPU:</strong> {$_('pages.game.requirements.rec_cpu')}</li>
						<li><strong>Memory:</strong> {$_('pages.game.requirements.rec_memory')}</li>
						<li><strong>Graphics:</strong> {$_('pages.game.requirements.rec_graphics')}</li>
						<li><strong>Storage:</strong> {$_('pages.game.requirements.rec_storage')}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</main> 