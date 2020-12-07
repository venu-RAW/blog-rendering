import { renderNewBlog } from "../helper/renderNewBlog.js";

export const relatedLinks = (links) => {
	// generate the markup for the related links
	const ul = document.createElement("ul");

	links.map((link) => {
		let li = document.createElement("li");
		li.innerText = link.title;
		li.id = link.id;

		li.addEventListener("click", () => {
			renderNewBlog(li.id);
		});

		ul.appendChild(li);
	});

	return ul;
};
