// 1. fetch  a new blog object based on Id

// 2. inside the root div
//    render blog Image
//    render blog content

// 3. inside aside div
//    render links
import { findBlogById } from "./findBlogById.js";
import { blogImage } from "../components/blogImage.js";
import { blogContent } from "../components/blogContent.js";
import { relatedLinks } from "../components/relatedLinks.js";

export const renderNewBlog = (blogId) => {
	const blogObject = findBlogById(blogId)[0];

	// root
	const rootDiv = document.getElementById("root");
	rootDiv.innerHTML = "";

	rootDiv.appendChild(blogImage(blogObject.imageUrl));

	rootDiv.appendChild(blogContent(blogObject.title, blogObject.content));

	// related links
	const relatedDiv = document.getElementById("related-links");
	relatedDiv.innerHTML = "";

	relatedDiv.appendChild(relatedLinks(blogObject.links));
};
