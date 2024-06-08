document.addEventListener('DOMContentLoaded', function () {
    function addIntroContent() {
        var introSection = document.getElementById('intro');
        
		var h1 = document.createElement('h1');
        h1.textContent = 'Welcome to Team Grasshoppers!';
        introSection.appendChild(h1);
		
        var paragraphs = [
            "Welcome to Team Grasshoppers! Get ready to dive into the world of tech with a bunch of enthusiastic B.Tech students from IIIT Trichy. We're all about electronics, computers, and coding, and we're not afraid to show it! With our creative minds and a knack for collaboration, we're on a mission to conquer the realms of technology and innovation. From coding marathons to hardware hacks, we're here to make waves and leave our mark.",
			
            "Who Are We? We're a bunch of tech-savvy folks who found each other in the bustling corridors of IIIT Trichy. Some of us love to kick it on the sports field, while others are more at home in the world of art and culture. But when it comes to tech, we're all in sync, weaving our skills together to create magic.",
			
            "Our Journey? Picture this: a ragtag team of techies coming together, fueled by passion and a hunger for success. From our humble beginnings in 2023 to our current powerhouse status, it's been quite the ride. We've faced challenges, celebrated victories, and built a bond that's stronger than steel.",
			
            "What Have We Achieved? Oh, just a little bit of everything! We've cooked up some mind-blowing projects that'll make your jaw drop. And don't even get us started on the competitions – we've bagged more trophies than we can count! But hey, it's not all about the accolades. It's about the journey, the friendships, and the memories we've made along the way.",
			
            "So, What's Next? Whether you want to collaborate on the next big thing, pick our brains for some tech tips, or simply shoot the breeze, we're all ears! . push the boundaries of what's possible and pave the way for a brighter, tech-driven future. Let's make some waves – together!"
        ];

        paragraphs.forEach(function (text) {
            var p = document.createElement('p');
            p.textContent = text;
            introSection.appendChild(p);
        });
    }

    addIntroContent();
});
