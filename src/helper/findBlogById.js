import { blogs } from "../data-copy.js";

export const findBlogById = (blogId) => {
	return blogs.filter((blog) => {
		return blog.id == blogId;
	});
};
