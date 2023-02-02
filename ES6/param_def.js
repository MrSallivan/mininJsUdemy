const creatPost = (title = 'Date default', text = 'Text default', date = new Date().toLocaleString()) => {
	return {
		title,
		text,
		date
	}
}

const post = creatPost()
console.log(post);