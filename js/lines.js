// class app {
//     constructor(container) {
//         this.layer = new Layer (container);
//     }
// }

// class Layer {
//     constructor(container) {
//         this.canvas = document.createElement(`canvas`); 
//         this.context = this.canvas.getContext(`2d`);
//         container.appendChild(this.canvas);

//         this.fitToContainer(this.canvas);
//         addEventListener(`resize`, () => this.fitToContainer(this.canvas));
//     }

// fitToContainer(cnv) {
//     cnv.width = cnv.offSetWidth;
//     cnv.height = cnv.offSetHeight;
//     }
// }

// onload = () => {
//     new App(document.querySelector(`field`));
// }


                    var 
                    canv = document.getElementById('canvas'),
                    ctx = canv.getContext('2d'),
                    isOnClick = false;

                canv.width = window.innerWidth;
                canv.height = window.innerHeight;


                ctx.lineWidth = 10 * 2;

                // canv.addEvenListener('onclick', function(e) {
                //     isOnclick = true;
                //     canv.beginPath();
                // });

                // canv.addEvenListener('onclick', function() {
                //     isOnclick = false;
                //     // ctx.beginPath();
                //     ctx.closePath();
                // });

                // // ctx.beginPath();
                // ctx.moveTo(e.clientX, e.clientY);
                // ctx.lineTo(e.clientX, e.clientY);
                // ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2);
                // ctx.fill();
                // ctx.stroke();
                // ctx.closePath();

                
                canv.addEventListener('mousedown', function() {
                    isOnClick = true;
                });

                canv.addEventListener('mouseup', function() {
                    isOnClick = Event.stopPropagation;
                    ctx.beginPath();
                });
                
                ctx.lineWidth = 10 * 2;
                canv.addEventListener('mousemove', function(e) {

                    if( isOnClick) {
                    ctx.lineTo(e.clientX, e.clientY);
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.beginPath();
                    ctx.moveTo(e.clientX, e.clientY);
                    }
                });

                
