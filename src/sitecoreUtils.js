function isSitecoreEditMode(editModeClass = 'sc--edit-mode', el = document.body) {
	return el.classList.contains(editModeClass);
};

export {
	isSitecoreEditMode
};