
document.addEventListener("astro:page-loaded", () => {
	document
		.querySelector(".hamburger")
		?.addEventListener("click", () => {
			document
				.querySelector(".nav-links")
				?.classList.toggle("expanded");
		});
})