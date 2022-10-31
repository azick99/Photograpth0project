          // Modal image Gallery
          function openImg(element) {
            document.getElementById('img01').src = element.src;
            document.getElementById('modal01').style.display = 'block';
            let captionText = document.getElementById('caption')
            captionText.innerHTML = element.alt;
        }

        //Change the style of navigation

        window.onscroll = function () { myFunction() };
        function myFunction() {
            var navbar = document.getElementById("myNavbar");
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
            } else {
                navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
            }
        }

        //Open navbar 
        function openNav() {
            let x = document.getElementById('navDemo');
            if (x.className.indexOf('w3-show') == -1) {
                x.className += ' w3-show';
            } else {
                x.className = x.className.replace(' w3-show', '')
            }
        }