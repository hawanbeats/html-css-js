let select = s => document.querySelector(s),
  selectAll = s =>  document.querySelectorAll(s),
		mainSVG = select('#mainSVG')

gsap.set('svg', {
	visibility: 'visible'
})
gsap.set('#mic', {
	transformOrigin: '50% 100%'
})
let state = true;
let doClick = () => {
	
	let tl = gsap.timeline({
		defaults: {
			ease: 'elastic(0.2, 0.48)',
			duration: 0.4
		}
	});		
	if(state) {
		tl.to('line', {
			drawSVG: '0% 100%',
			y: -0
		})
		.to('#mic', {
			scale: 1,
			fill: '#44484D',
		}, 0)
	} else {
		
		tl.to('line', {
			drawSVG: '50% 50%',
			y: -14
		})
		.to('#mic', {
			scale: 1.3,
			fill: '#555b60'
		}, 0)
	}
	
}
mainSVG.onclick = () => {
	
	gsap.killTweensOf(mainSVG.onclick);
	state = !state;
	doClick();
}

gsap.delayedCall(2, mainSVG.onclick)