// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

//contador de caracteres restantes
document.addEventListener("turbo:load", () => {
	const descriptionField = document.getElementById("tweet-body");
	const charCount = document.getElementById("char-count");

	function updateCharCount() {
		const remainingChars = 500 - descriptionField.value.length;
		charCount.innerText = remainingChars + " Characters left";
	}

	descriptionField.addEventListener("input", updateCharCount);
	updateCharCount();
});
