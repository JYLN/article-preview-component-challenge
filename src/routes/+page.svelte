<script lang="ts">
	import Tooltip from '$lib/components/Tooltip.svelte';
	import { cn } from '$lib/utils';
	import '@fontsource-variable/manrope';
	import { melt } from '@melt-ui/svelte';
	import { quadInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import '../app.css';

	let mobileOverlayOpen = $state(false);
	const handleMobileOverlayOpen = () => (mobileOverlayOpen = !mobileOverlayOpen);

	const socialIcons = [
		{
			name: 'Facebook',
			src: '/images/icon-facebook.svg'
		},
		{
			name: 'Twitter',
			src: '/images/icon-twitter.svg'
		},
		{
			name: 'Pinterest',
			src: '/images/icon-pinterest.svg'
		}
	];
</script>

<svelte:head>
	<title>Frontend Mentor | Article preview component</title>
</svelte:head>

<main>
	<!-- Article Preview Card -->
	<article
		class="flex max-w-[45.625rem] flex-col overflow-hidden rounded-[0.625rem] bg-white text-[0.8125rem]/[1.25rem] font-medium tracking-[0.0075rem] text-desaturatedblue shadow-card shadow-columbiablue lg:flex-row"
	>
		<!-- Article Preview Image -->
		<figure>
			<img
				class="size-full max-h-[12.5rem] object-cover lg:max-h-none"
				src="/images/drawers.jpg"
				alt="A green chest of drawers with framed photos and a brown vase on top, against a white brick wall."
			/>
		</figure>
		<!-- Article Preview Content -->
		<div>
			<!-- Content Text -->
			<div class="px-8 pb-4 pt-9 lg:px-10 lg:pb-5 lg:pt-8">
				<h1
					class="mb-3 text-base font-bold tracking-[0.0125rem] text-darkgrayishblue lg:text-xl lg:tracking-[0.015625rem]"
				>
					Shift the overall look and feel by adding these wonderful touches to furniture in your
					home
				</h1>
				<p>
					Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and
					uninviting. I&apos;ve got some simple tips to help you make any room feel complete.
				</p>
			</div>

			<!-- Content Footer -->
			<div
				class="relative flex items-center justify-between px-8 pb-5 pt-5 lg:px-10 lg:pb-8 lg:pt-0"
			>
				<!-- Author -->
				<div class="flex flex-wrap gap-4">
					<figure>
						<img
							class="aspect-[1] w-10 rounded-full"
							src="/images/avatar-michelle.jpg"
							alt="Headshot of Michelle Appleton"
						/>
					</figure>
					<div>
						<p class="font-bold text-darkgrayishblue">Michelle Appleton</p>
						<p class="text-grayishblue">28 Jun 2020</p>
					</div>
				</div>

				<!-- Share Button and Overlay (Mobile) -->
				<div class="grid place-content-center lg:hidden">
					<!-- Button -->
					<button
						onclick={handleMobileOverlayOpen}
						class={cn(
							'z-10 grid aspect-square size-8 place-content-center rounded-full transition-colors delay-150 duration-150 ease-in-out',
							mobileOverlayOpen
								? 'bg-desaturatedblue fill-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:outline active:outline-2 active:outline-offset-2 active:outline-white'
								: 'bg-lightgrayishblue fill-desaturatedblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-desaturatedblue active:outline active:outline-2 active:outline-offset-2 active:outline-desaturatedblue'
						)}
						aria-label="Share article"
					>
						<svg class="h-[0.8125rem] w-[0.9375rem]" viewBox="0 0 15 13">
							<path
								d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
							/>
						</svg>
					</button>
					<!-- Overlay -->
					{#if mobileOverlayOpen}
						<div
							transition:fly={{ x: 768, duration: 300, easing: quadInOut, delay: 0 }}
							class="absolute bottom-0 right-0 z-[1] flex size-full flex-wrap content-center items-center gap-[1.3125rem] bg-darkgrayishblue ps-8"
						>
							<p class="tracking-[0.3125rem] text-grayishblue">SHARE</p>
							<ul class="flex items-center gap-4">
								{@render socialIconsList()}
							</ul>
						</div>
					{/if}
				</div>

				<!-- Share Button and Overlay (Desktop) -->
				<div class="hidden lg:block">
					<Tooltip
						positioning={{ placement: 'top', gutter: 15 }}
						openDelay={0}
						arrowSize={20}
						closeOnPointerDown={false}
					>
						{#snippet triggerElement({ $trigger, $open })}
							<button
								use:melt={$trigger}
								class={cn(
									'grid aspect-square size-8 place-content-center rounded-full transition-colors duration-150 ease-in-out hover:bg-desaturatedblue hover:fill-white',
									$open
										? 'bg-desaturatedblue fill-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:outline active:outline-2 active:outline-offset-2 active:outline-white'
										: 'bg-lightgrayishblue fill-desaturatedblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-desaturatedblue active:outline active:outline-2 active:outline-offset-2 active:outline-desaturatedblue'
								)}
								aria-label="Share article"
							>
								<svg class="h-[0.8125rem] w-[0.9375rem]" viewBox="0 0 15 13">
									<path
										d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
									/>
								</svg>
							</button>
						{/snippet}

						{#snippet tooltipContent()}
							<div
								class="flex size-full items-center justify-center gap-[1.3125rem] px-9 py-[1.125rem]"
							>
								<p class="tracking-[0.3125rem] text-grayishblue">SHARE</p>
								<ul class="flex items-center gap-4">
									{@render socialIconsList()}
								</ul>
							</div>
						{/snippet}
					</Tooltip>
				</div>
			</div>
		</div>
	</article>
</main>

{#snippet socialIconsList()}
	{#each socialIcons as { name, src }}
		<li class="h-5">
			<a
				href="/"
				class="inline-block rounded-sm focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white"
				aria-label="Share on {name}"
			>
				<img class="h-5 w-auto" {src} alt="" />
			</a>
		</li>
	{/each}
{/snippet}
