// const { default: gsap } = require('gsap/gsap-core');

gsap.from('.nav__links--link', {
	ease: 'ease',
	stagger: 0.4,
	opacity: 0,
	duration: 0.5
});
gsap.from('.whyNSI__left', {
	duration: 2,
	x: -800,
	ease: 'power4',
	scrollTrigger: {
		trigger: '.whyNSI',
		start: 'top center'
	}
});
gsap.from('.whyNSI__right', {
	duration: 1.5,
	x: 800,
	ease: 'power4',
	scrollTrigger: {
		trigger: '.whyNSI',
		start: 'top center'
	}
});
gsap.from('.mission', {
	duration: 2,
	opacity: 0,
	scrollTrigger: {
		trigger: '.mission',
		start: 'top center'
	}
});

gsap.from('.our-team__container--pic', {
	duration: 1,
	x: -1500,
	y: -500,
	stagger: 0.4,
	scrollTrigger: {
		trigger: '.our-team__container',
		start: 'top center'
	}
});
gsap.from('.careers__employee-container', {
	duration: 1,
	y: 200,
	x: -100,
	opacity: 0,
	stagger: 0.5,
	scrollTrigger: {
		trigger: '.careers__employee-container',
		start: 'top center'
	}
});
gsap.from('.careers__right', {
	duration: 3,
	opacity: 0,
	scrollTrigger: {
		trigger: '.careers__employee-container',
		start: 'top center',
		delay: 2.5
	}
});
gsap.from('.contact__form', {
	duration: 3,
	opacity: 0,
	scrollTrigger: {
		trigger: '.contact__form',
		start: 'top center'
	}
});

// if (navigator.serviceWorker) {
// 	navigator.serviceWorker
// 		.register('/sw.js')
// 		.then(function(registration) {
// 			// console.log(
// 			// 	'ServiceWorker registration successful with scope:',
// 			// 	registration.scope
// 			// );
// 		})
// 		.catch(function(error) {
// 			console.log('ServiceWorker registration failed:', error);
// 		});
// }
