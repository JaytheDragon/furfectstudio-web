<script lang="ts">
	import { _ } from 'svelte-i18n';
	import MainBackground from '@/components/mainBackground.svelte';
</script>

<svelte:head>
	<title>{$_('pages.recruitment.title')} | Furfect! Studio</title>
</svelte:head>

<main class="relative flex min-h-[calc(100vh-7rem)] w-full flex-col items-center justify-center">
	<MainBackground />
	
	<div class="z-10 max-w-6xl mx-auto px-4 py-8">
		<div class="text-center mb-12">
			<h1 class="text-5xl font-bold mb-6">{$_('pages.recruitment.title')}</h1>
			<p class="text-xl text-gray-300 max-w-3xl mx-auto">{$_('pages.recruitment.description')}</p>
		</div>
		
		<!-- Open Positions -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
			<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all">
				<div class="text-4xl mb-4">🎨</div>
				<h3 class="text-2xl font-semibold mb-4">{$_('pages.recruitment.positions.artist.title')}</h3>
				<p class="text-gray-300 mb-4">{$_('pages.recruitment.positions.artist.description')}</p>
				<ul class="text-sm text-gray-400 space-y-1">
					<li>• {$_('pages.recruitment.positions.artist.req1')}</li>
					<li>• {$_('pages.recruitment.positions.artist.req2')}</li>
					<li>• {$_('pages.recruitment.positions.artist.req3')}</li>
				</ul>
			</div>
			
			<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all">
				<div class="text-4xl mb-4">💻</div>
				<h3 class="text-2xl font-semibold mb-4">{$_('pages.recruitment.positions.programmer.title')}</h3>
				<p class="text-gray-300 mb-4">{$_('pages.recruitment.positions.programmer.description')}</p>
				<ul class="text-sm text-gray-400 space-y-1">
					<li>• {$_('pages.recruitment.positions.programmer.req1')}</li>
					<li>• {$_('pages.recruitment.positions.programmer.req2')}</li>
					<li>• {$_('pages.recruitment.positions.programmer.req3')}</li>
				</ul>
			</div>
			
			<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all">
				<div class="text-4xl mb-4">🎵</div>
				<h3 class="text-2xl font-semibold mb-4">{$_('pages.recruitment.positions.sound.title')}</h3>
				<p class="text-gray-300 mb-4">{$_('pages.recruitment.positions.sound.description')}</p>
				<ul class="text-sm text-gray-400 space-y-1">
					<li>• {$_('pages.recruitment.positions.sound.req1')}</li>
					<li>• {$_('pages.recruitment.positions.sound.req2')}</li>
					<li>• {$_('pages.recruitment.positions.sound.req3')}</li>
				</ul>
			</div>
			
			<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all">
				<div class="text-4xl mb-4">✍️</div>
				<h3 class="text-2xl font-semibold mb-4">{$_('pages.recruitment.positions.writer.title')}</h3>
				<p class="text-gray-300 mb-4">{$_('pages.recruitment.positions.writer.description')}</p>
				<ul class="text-sm text-gray-400 space-y-1">
					<li>• {$_('pages.recruitment.positions.writer.req1')}</li>
					<li>• {$_('pages.recruitment.positions.writer.req2')}</li>
					<li>• {$_('pages.recruitment.positions.writer.req3')}</li>
				</ul>
			</div>
			
			<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all">
				<div class="text-4xl mb-4">📢</div>
				<h3 class="text-2xl font-semibold mb-4">{$_('pages.recruitment.positions.marketing.title')}</h3>
				<p class="text-gray-300 mb-4">{$_('pages.recruitment.positions.marketing.description')}</p>
				<ul class="text-sm text-gray-400 space-y-1">
					<li>• {$_('pages.recruitment.positions.marketing.req1')}</li>
					<li>• {$_('pages.recruitment.positions.marketing.req2')}</li>
					<li>• {$_('pages.recruitment.positions.marketing.req3')}</li>
				</ul>
			</div>
			
			<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all">
				<div class="text-4xl mb-4">🌟</div>
				<h3 class="text-2xl font-semibold mb-4">{$_('pages.recruitment.positions.other.title')}</h3>
				<p class="text-gray-300 mb-4">{$_('pages.recruitment.positions.other.description')}</p>
				<ul class="text-sm text-gray-400 space-y-1">
					<li>• {$_('pages.recruitment.positions.other.req1')}</li>
					<li>• {$_('pages.recruitment.positions.other.req2')}</li>
					<li>• {$_('pages.recruitment.positions.other.req3')}</li>
				</ul>
			</div>
		</div>
		
		<!-- Important Information -->
		<div class="bg-yellow-900/20 border border-yellow-600/50 rounded-xl p-6 mb-8">
			<h2 class="text-2xl font-semibold mb-4 text-yellow-300">{$_('pages.recruitment.important.title')}</h2>
			<div class="space-y-3 text-gray-300">
				<p>• {$_('pages.recruitment.important.volunteer')}</p>
				<p>• {$_('pages.recruitment.important.commitment')}</p>
				<p>• {$_('pages.recruitment.important.communication')}</p>
				<p>• {$_('pages.recruitment.important.passion')}</p>
			</div>
		</div>
		
		<!-- Application Form -->
		<div class="bg-white/5 backdrop-blur-sm rounded-xl p-8">
			<h2 class="text-3xl font-semibold mb-6 text-center">{$_('pages.recruitment.application.title')}</h2>
			<form class="space-y-6">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label for="applicant-name" class="block text-sm font-medium mb-2">{$_('pages.recruitment.application.name')}</label>
						<input id="applicant-name" type="text" class="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-400 focus:outline-none" placeholder={$_('pages.recruitment.application.name_placeholder')} />
					</div>
					<div>
						<label for="applicant-email" class="block text-sm font-medium mb-2">{$_('pages.recruitment.application.email')}</label>
						<input id="applicant-email" type="email" class="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-400 focus:outline-none" placeholder={$_('pages.recruitment.application.email_placeholder')} />
					</div>
				</div>
				
				<div>
					<label for="applicant-position" class="block text-sm font-medium mb-2">{$_('pages.recruitment.application.position')}</label>
					<select id="applicant-position" class="w-full p-3 rounded bg-white/10 text-white border border-gray-600 focus:border-blue-400 focus:outline-none">
						<option value="">{$_('pages.recruitment.application.position_select')}</option>
						<option value="artist">{$_('pages.recruitment.positions.artist.title')}</option>
						<option value="programmer">{$_('pages.recruitment.positions.programmer.title')}</option>
						<option value="sound">{$_('pages.recruitment.positions.sound.title')}</option>
						<option value="writer">{$_('pages.recruitment.positions.writer.title')}</option>
						<option value="marketing">{$_('pages.recruitment.positions.marketing.title')}</option>
						<option value="other">{$_('pages.recruitment.positions.other.title')}</option>
					</select>
				</div>
				
				<div>
					<label for="applicant-experience" class="block text-sm font-medium mb-2">{$_('pages.recruitment.application.experience')}</label>
					<textarea id="applicant-experience" rows="4" class="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-400 focus:outline-none" placeholder={$_('pages.recruitment.application.experience_placeholder')}></textarea>
				</div>
				
				<div>
					<label for="applicant-motivation" class="block text-sm font-medium mb-2">{$_('pages.recruitment.application.motivation')}</label>
					<textarea id="applicant-motivation" rows="4" class="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-400 focus:outline-none" placeholder={$_('pages.recruitment.application.motivation_placeholder')}></textarea>
				</div>
				
				<div>
					<label for="applicant-portfolio" class="block text-sm font-medium mb-2">{$_('pages.recruitment.application.portfolio')}</label>
					<input id="applicant-portfolio" type="url" class="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-400 focus:outline-none" placeholder={$_('pages.recruitment.application.portfolio_placeholder')} />
				</div>
				
				<button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors">
					{$_('pages.recruitment.application.submit')}
				</button>
			</form>
		</div>
	</div>
</main> 