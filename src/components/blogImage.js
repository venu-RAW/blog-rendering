export const blogImage = (imageURL) => {
	// generate the markup for the image
	const div = document.createElement("div");
	div.classList.add("blog-image");

	const img = document.createElement("img");
	img.src = imageURL;
	img.alt = "Some Desc";

	div.appendChild(img);

	return div;
};
