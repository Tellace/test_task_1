    var 
    canv = document.getElementById('canvas'),
    ctx = canv.getContext('2d'),
    isOnClick = false;

    canv.width = window.innerWidth;
    canv.height = window.innerHeight;

    ctx.lineWidth = 5 * 2;
    canv.addEventListener('mousemove', function(e) {

        if( isOnClick ) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
        }
    });
    
    canv.addEventListener('mousedown', function() {
        isOnClick = true;
    });

    canv.addEventListener('mouseup', function() {
        isOnClick = Event.stopPropagation;
        ctx.beginPath();
    });

    const clearCanvas = () => {
        ctx.clearRect(0, 0, canv.width, canv.height);
    };

    const clearbtn = document.querySelector("#clearbtn");
    clearbtn.addEventListener("click", clearCanvas);

    