class Preloader{
    constructor(){
        this.preloaderTimer = null;
        this.start()
    }

    start(){
        let preloaderBlock = document.createElement('div');
        let height = document.documentElement.clientHeight;
        console.log(height)
        preloaderBlock.id = 'preloader';
        preloaderBlock.classList.add('preloader');
        preloaderBlock.style.height = `${height}px`;
        preloaderBlock.innerHTML = `
            <div class="preloader-line">
            
            </div>
            <div class="preloader-bg">

            </div>
        `;
        document.body.prepend(preloaderBlock);
        this.moved()
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