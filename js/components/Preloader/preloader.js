class Preloader{
    constructor(){
        this.preloaderTimer = null;
        this.start()
    }

    start(){
        let preloaderBlock = document.createElement('div');
        preloaderBlock.id = 'preloader';
        preloaderBlock.classList.add('preloader');
        // preloaderBlock.setAttribute('height', '100')
        preloaderBlock.innerHTML = `
            <div class="preloader-line">
            
            </div>
            <div class="preloader-bg">

            </div>
        `;
        document.body.prepend(preloaderBlock);
        // window.addEventListener('load', this.moved.bind(this));
        this.moved()
        // this.preloaderTimer = setInterval(this.moved(), 1);
    }

    moved(){
        let preloaderBlock = document.querySelector('#preloader');

        this.preloaderTimer = setInterval(() => {
            let height = getComputedStyle(preloaderBlock).height;
            height = +height.replace(/\D+/g,"");
            preloaderBlock.style.height = height-4 + 'px';
            if(height <= 4){
               preloaderBlock.remove();
                clearInterval(this.preloaderTimer);
            }
            
        },1);
    }
}

let preloader1 = new Preloader();