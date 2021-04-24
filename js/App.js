window.onload = () => {
            let content = document.getElementsByClassName("content")[0];
            let home = document.getElementsByClassName("home")[0];
            let opacity = 0;
            let intervalID = setInterval(function() {

                if (opacity < 1) {
                    opacity = opacity + 0.15
                    if (content !== undefined) {
                      content.style.opacity = opacity;
                    }

                    if (home !== undefined) {
                      home.style.opacity = opacity;
                    }
                } else {
                    clearInterval(intervalID);
                }
            }, 85);

            let still = document.getElementsByClassName('float-on-hover');
            console.log(still);

            for (let i = 0; i < still.length; i++) {

              still[i].addEventListener('mouseover', () => {
                still[i].animate(
                  // keyframe
                  [
                    { transform: 'translateY(0)' },
                    { transform: 'translateY(-6px)' },
                    { transform: 'translateY(0)' }
                  ], {
                    // timing options
                    duration: 700,
                    iterations: 1
                  }
                )
              })
            }

            let underline = document.getElementsByClassName('underline');

            for (let i = 0; i < underline.length; i++) {
              underline[i].addEventListener('mouseover', () => {
                underline[i].animate(
                  // keyframe
                  [
                    { transform: 'translateY(0)' },
                    { transform: 'translateY(-3px)' },
                    { transform: 'translateY(0)' }
                  ], {
                    // timing options
                    duration: 600,
                    iterations: 1
                  }
                )
              });

            }
}
