<script lang="ts">
	import { createTooltip, melt, type CreateTooltipProps } from '@melt-ui/svelte';
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	interface Props extends CreateTooltipProps {
		triggerElement: Snippet<[any]>;
		tooltipContent: Snippet;
	}

	let { triggerElement, tooltipContent, ...tooltipProps }: Props = $props();

	const {
		elements: { trigger, arrow, content },
		states: { open }
	} = createTooltip(tooltipProps);
</script>

{@render triggerElement({ $trigger, $open })}

{#if $open}
	<div
		use:melt={$content}
		transition:fade={{ duration: 250, delay: 100 }}
		class="bg-darkgrayishblue shadow-tooltip shadow-columbiablue rounded-[0.625rem]"
	>
		<div use:melt={$arrow}></div>
		{@render tooltipContent()}
	</div>
{/if}
