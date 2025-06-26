<script lang="ts">
	let isSupportHEVCAlpha = supportsHEVCAlpha();

	export let className = '';
	export let HEVCAlphaSrc = '';
	export let WebmSrc = '';

	function supportsHEVCAlpha() {
		const navigator = window.navigator;
		const ua = navigator.userAgent.toLowerCase();
		const hasMediaCapabilities = !!(
			navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo
		);
		const isSafari =
			ua.indexOf('safari') != -1 && !(ua.indexOf('chrome') != -1) && ua.indexOf('version/') != -1;
		return isSafari && hasMediaCapabilities;
	}
</script>

<video autoplay playsinline muted class={className}>
	{#if isSupportHEVCAlpha}
		<source type="video/mp4" src={HEVCAlphaSrc} />
	{:else}
		<source type="video/webm" src={WebmSrc} />
	{/if}
	<track kind="captions" />
</video>
