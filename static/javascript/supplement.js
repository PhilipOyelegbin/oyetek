function clicked() {
    document.getElementById("content").classList.toggle("show")
}

document.querySelector('.popup').addEventListener('click', function() {
	document.querySelector('.form-card').classList.add('view');
});

document.querySelector('.close-btn').addEventListener('click', function() {
	document.querySelector('.form-card').classList.remove('view');
});