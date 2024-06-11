document.addEventListener('DOMContentLoaded', function () {
            var bgm = document.getElementById('bgm');
            var playButton = document.getElementById('play_bgm');
            var pauseButton = document.getElementById('pause_bgm');
            var mantis = document.getElementById('mantis');
            var mouseX = -200; // Initial position
            var mouseY = window.innerHeight + 200; // Initial position
            var isPlaying = false;
            var restLeft = -200;
            var restBottom = window.innerHeight + 200;

            playButton.addEventListener('click', function () {
                bgm.play();
                playButton.style.display = 'none';
                pauseButton.style.display = 'inline';
                isPlaying = true;
            });

            pauseButton.addEventListener('click', function () {
                bgm.pause();
                playButton.style.display = 'inline';
                pauseButton.style.display = 'none';
                isPlaying = false;
            });

            document.addEventListener('mousemove', function (event) {
                mouseX = isPlaying ? event.clientX : restLeft;
                mouseY = isPlaying ? event.clientY : restBottom;
            });

            setInterval(function () {
                var currentX = parseFloat(mantis.style.left) || -200; // Updated  X postion
                var currentY = parseFloat(mantis.style.top) || window.innerHeight + 200; // Updated Y postion
                var dx = mouseX - currentX;
                var dy = mouseY - currentY;
                var distance = Math.sqrt(dx * dx + dy * dy);
                var speed = 0.003;

                if (distance > 1) {
                    mantis.style.left = currentX + dx * speed + 'px';
                    mantis.style.top = currentY + dy * speed + 'px';
                }

                var angle = Math.atan2(dy, dx) * (180 / Math.PI);
                angle += 90;
                mantis.style.transform = 'translate(-50%, -50%) rotate(' + angle + 'deg)';
            }, 10);
        });
