import { blogs } from "../data.js";

export const findBlogById = (blogId) => {
	return blogs.filter((blog) => {
		return blog.id == blogId;
	});
};
