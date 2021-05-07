const { default: gsap } = require('gsap/gsap-core');

gsap.from('.nav__links--link', {
	duration: 10,
	x: 500,
	ease: 'back',
	opacity: 0
});

gsap.to('.values', {
	opacity: 0,
	duration: 2,
	x: -300,
	ease: 'back'
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
