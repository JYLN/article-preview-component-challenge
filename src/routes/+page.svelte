<script lang="ts">
	import '@fontsource-variable/manrope';
	import '../app.css';
</script>

<svelte:head>
	<title>Frontend Mentor | Article preview component</title>
</svelte:head>

<main>
	<!-- Article Preview Card -->
	<article>
		<!-- Article Preview Image -->
		<figure>
			<img
				src="/images/drawers.jpg"
				alt="A green chest of drawers with framed photos and a brown vase on top, against a white brick wall."
			/>
		</figure>
		<!-- Article Preview Content -->
		<div>
			<!-- Content Text -->
			<div>
				<h1>
					Shift the overall look and feel by adding these wonderful touches to furniture in your
					home
				</h1>
				<p>
					Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and
					uninviting. I&apos;ve got some simple tips to help you make any room feel complete.
				</p>
			</div>

			<!-- Content Footer -->
			<div>
				<!-- Author -->
				<div>
					<figure>
						<img src="/images/avatar-michelle.jpg" alt="Headshot of Michelle Appleton" />
					</figure>
					<div>
						<p>Michelle Appleton</p>
						<p>28 Jun 2020</p>
					</div>
				</div>

				<!-- Share Button and Overlay -->
				<div>
					<!-- Button -->
					<button aria-label="Share article">
						<svg viewBox="0 0 15 15">
							<path
								fill="#6E8098"
								d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
							/>
						</svg>
					</button>
					<!-- Overlay -->
					<div>
						<p>SHARE</p>
						<ul>
							<li>
								<a href="/" aria-label="Share on Facebook">
									<img src="/images/icon-facebook.svg" alt="" />
								</a>
							</li>
							<li>
								<a href="/" aria-label="Share on Twitter">
									<img src="/images/icon-twitter.svg" alt="" />
								</a>
							</li>
							<li>
								<a href="/" aria-label="Share on Pinterest">
									<img src="/images/icon-pinterest.svg" alt="" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</article>
</main>
