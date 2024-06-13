function updateStyles() {
	const targetHref = 'styles.css';

	for (let i = 0; i < document.styleSheets.length; i++) {
		let sheet = document.styleSheets[i];
		if (sheet.href && sheet.href.includes(targetHref)) {
			try {
				let rules = sheet.cssRules || sheet.rules;
				if (rules) {
					for (let j = 0; j < rules.length; j++) {
						let rule = rules[j];
						if (rule.type === CSSRule.STYLE_RULE) {
							if (window.innerWidth <= 800 && rule.selectorText.includes(':hover')) {
								let newSelector = rule.selectorText.replace(':hover', ':active');
								let newRule = `${newSelector} { ${rule.style.cssText} }`;
								sheet.insertRule(newRule, sheet.cssRules.length);
								sheet.deleteRule(j);
							} 
                            else if (window.innerWidth > 800 && rule.selectorText.includes(':active')) {
								let newSelector = rule.selectorText.replace(':active', ':hover');
								let newRule = `${newSelector} { ${rule.style.cssText} }`;
								sheet.insertRule(newRule, sheet.cssRules.length);
								sheet.deleteRule(j);
							}
						}
					}
				}
			} catch (e) {
				console.warn("Cannot access stylesheet: " + sheet.href);
			}
		}
	}
}

function initActiveHoverReplace() {
	window.addEventListener('load', updateStyles);
	window.addEventListener('resize', updateStyles);
}

export { initActiveHoverReplace };
