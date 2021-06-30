class Header{
    constructor(selector){
        this.headerBlock = document.querySelector(selector);
        this.selectPage = 'index.html';
        this.menuList = [
            {title: 'home', path: 'index.html', icon: 'fas fa-home'},
            {title: 'about', path: 'about.html', icon: 'fas fa-user'},
            {title: 'portfolio', path: 'portfolio.html', icon: 'fas fa-suitcase'},
            {title: 'contact', path: 'contact.html', icon: 'fas fa-envelope-open'},
        ]
        this.start();
    }

    start(){
        let page = location.href.split('/');
        this.selectPage = page[page.length-1];
        this.render();
        this.headerBlock.addEventListener('mouseover', this.showTitle.bind(this));
        this.headerBlock.addEventListener('click', this.checkTarget.bind(this));

    }

    render(){
        let header = document.createElement('header');
        let desktopMenu = this.createDesktopMenu();
        let mobileMenu = this.createMobileMenu();
        
        header.innerHTML = `
            ${desktopMenu.outerHTML}
            ${mobileMenu.outerHTML}
        `;
        this.headerBlock.innerHTML = header.outerHTML;
        
    }

    createDesktopMenu(){
        let nav = document.createElement('nav');
        
        nav.classList.add('desktop-menu');

        let html = this.createLinks();
        nav.innerHTML = `
            <ul>
                ${html}
            </ul>
        `;

        return nav;

    }

    createMobileMenu(){
        let mobileBlock = document.createElement('div');
        mobileBlock.classList.add('mobile-menu-block');
        let html = this.createLinks();

        mobileBlock.innerHTML = `
            <a href="#" class="switch-menu__btn" data-status="close">
                <i class="fas fa-bars"></i>
            </a>
            <nav class="mobile-menu">
                <ul>
                    ${html}
                </ul>
            </nav>
        `;

        return mobileBlock;
    }

    createLinks(){
        let content = this.menuList.map(item => {
            let activeEl = '';

            if(this.selectPage === item.path){
                activeEl = ' ' + 'header-link-active';
            }
            
            return `
                        <li>
                            <a href="${item.path}" class="header-link${activeEl}">
                                <i class="${item.icon} icon"></i>
                                <span class="nav-title">${item.title}</span>
                            </a>
                        </li>
                    `;

        });
        return content.join('');
    }

    checkTarget(e){        
        if(e.target.closest('.switch-menu__btn')){
            e.preventDefault()
            this.toggeleMobileMenu(e.target);
        }

    }

    // redirection(el){
    //     let myHref = el.getAttribute('href');
    //     localStorage.setItem('selectPage', myHref)
    //     // window.location.href = myHref;
    // }

    toggeleMobileMenu(el){
        let menuStatus = el.getAttribute('data-status');
        let mobileMenu = this.headerBlock.querySelector('.mobile-menu');
        if(menuStatus === 'close'){
            el.innerHTML = '<i class="fas fa-times"></i>';
            el.setAttribute('data-status', 'open');

        }
        else{
            el.innerHTML = '<i class="fas fa-bars"></i>';
            el.setAttribute('data-status', 'close');
        }
        mobileMenu.classList.toggle('mobile-menu-active');
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