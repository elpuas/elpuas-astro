document.addEventListener('DOMContentLoaded', () => {
	const bwToggle = document.getElementById('bw-toggle')
	const html = document.documentElement

	// Load saved theme from localStorage
	const savedTheme = localStorage.getItem('epdc-theme')
	if (savedTheme && ['light', 'bw'].includes(savedTheme)) {
		html.setAttribute('data-theme', savedTheme)
		
		// Update button aria-label based on current theme
		if (bwToggle) {
			bwToggle.setAttribute(
				'aria-label',
				savedTheme === 'bw' ? 'Switch to color mode' : 'Toggle black and white mode'
			)
		}
	}

	// Add click event listener to toggle button
	if (bwToggle) {
		bwToggle.addEventListener('click', () => {
			const current = html.getAttribute('data-theme') || 'light'
			const newTheme = current === 'light' ? 'bw' : 'light'
			
			// Apply new theme
			html.setAttribute('data-theme', newTheme)
			
			// Save to localStorage
			localStorage.setItem('epdc-theme', newTheme)
			
			// Update button aria-label
			bwToggle.setAttribute(
				'aria-label',
				newTheme === 'bw' ? 'Switch to color mode' : 'Toggle black and white mode'
			)
		})
	}
}) 