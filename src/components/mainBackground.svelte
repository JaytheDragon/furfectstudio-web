<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { base } from '$app/paths';
</script>

<div class="relative z-0 h-full w-full">
	<img
		src="{base}/Background_Pattern.png"
		alt={$_('img_alt.main_background')}
		class="fixed bottom-0 left-1/2 h-full -translate-x-1/2 transform object-cover object-bottom"
	/>
	<div
		class="fixed right-0 bottom-0 left-0 h-1/3
         bg-[linear-gradient(to_top,rgba(255,255,255,0.2),rgba(255,255,255,0))] opacity-20"
	></div>
</div>
