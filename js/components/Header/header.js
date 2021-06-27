class Header{
    constructor(selector){
        this.header = document.querySelector(selector);
        this.start();
    }

    start(){
        // this.render();
        this.header.addEventListener('mouseover', this.showTitle.bind(this));
        this.header.addEventListener('click', this.toggeleMobileMenu.bind(this));

    }

    render(){
        
    }

    toggeleMobileMenu(e){
        let myTarget = e.target.closest('.switch-menu__btn');
        if(myTarget){
            e.preventDefault();
            let menuStatus = myTarget.getAttribute('data-status');
            let mobileMenu = this.header.querySelector('.mobile-menu');
            if(menuStatus === 'close'){
                myTarget.innerHTML = '<i class="fas fa-times"></i>';
                myTarget.setAttribute('data-status', 'open');

            }
            else{
                myTarget.innerHTML = '<i class="fas fa-bars"></i>';
                myTarget.setAttribute('data-status', 'close');
            }
            mobileMenu.classList.toggle('mobile-menu-active')
        }
    }

    showTitle(e){    
        let myTarget = e.target.closest('.header-link');
        if(myTarget){
            myTarget.classList.add('header-link-hover');
            myTarget.addEventListener('mouseout', this.hideTitle);
        }
    }

    hideTitle(e){
        this.classList.remove('header-link-hover')
        this.removeEventListener('mouseout', this.hideTitle);
    }
}


let header = new Header('#header');