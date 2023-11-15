gsap.to('#loader h1',{
    scale:1,
    delay:.5,
    duration:1
})


function time(){
    var a = 0;
    setInterval(function(){
        a += Math.floor(Math.random()*15);
        if(a<100){
            document.querySelector('#loader h1').innerHTML = a + '%';
        }
        else{
            a = 100
            document.querySelector('#loader h1').innerHTML = a + '%'
        }
    },150)

    setInterval(() => {
        if(a == 100){
            var tl = gsap.timeline()
            tl.to('#loader',{
                top:'-100%',
                duration:1,
                backgroundColor:'black'

            })
        }
    },500)

}

time();