class app {
    constructor(container) {
        this.layer = new Layer (container);
    }
}

class Layer {
    constructor(container) {
        this.canvas = document.createElement(`canvas`); 
        this.context = this.canvas.getContext(`2d`);
        container.appendChild(this.canvas);

        this.fitToContainer(this.canvas);
        addEventListener(`resize`, () => this.fitToContainer(this.canvas));
    }

fitToContainer(cnv) {
    cnv.width = cnv.offSetWidth;
    cnv.height = cnv.offSetHeight;
    }
}

onload = () => {
    new App(document.querySelector(`field`));
}