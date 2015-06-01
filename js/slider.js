        

        function slide1(){
        document.getElementById('id').src="imagens/slide/1.jpg";
        setTimeout("slide2()", 6000)
        document.getElementById('aId').href="link1.html"
        }

        

        function slide2(){
        document.getElementById('id').src="imagens/slide/3.jpeg";
        setTimeout("slide1()", 6000)
        document.getElementById('aId').href="link3.html"
        }