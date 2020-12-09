import { blogImage } from "./components/blogImage.js";
import { blogContent } from "./components/blogContent.js";
import { relatedLinks } from "./components/relatedLinks.js";

document.addEventListener("DOMContentLoaded", async () => {
	try {
		let blogs = await axios("./src/data.json");

		const firstBlog = blogs.data[2];

		const { imageUrl, title, content, links } = firstBlog;

		const blogDiv = document.getElementById("root");

		const blogImageDiv = blogImage(imageUrl);
		const blogContentDiv = blogContent(title, content);

		blogDiv.appendChild(blogImageDiv);
		blogDiv.appendChild(blogContentDiv);

		const asideDiv = document.getElementById("related-links");

		asideDiv.appendChild(relatedLinks(links));
	} catch (err) {
		console.log(err);
	}
});

// clear the content from the root div and the aside div
