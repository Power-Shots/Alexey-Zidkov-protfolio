class Header{
    constructor(selector){
        this.headerBlock = document.querySelector(selector);
        this.selectPage = 'index.html';
        this.menuList = [
            {title: 'home', path: 'index.html', icon: 'fas fa-home'},
            {title: 'about', path: 'about.html', icon: 'fas fa-user'},
            // {title: 'portfolio', path: 'portfolio.html', icon: 'fas fa-suitcase'},
            {title: 'contact', path: 'contact.html', icon: 'fas fa-envelope-open'},
        ]
        this.start();
    }

    start(){
        let page = location.href.split('/');
        this.selectPage = page[page.length-1];
        this.render();
        this.headerBlock.addEventListener('mouseover', this.showTitle.bind(this));
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
            <button onclick="header.toggeleMobileMenu()" class="switch-menu__btn" data-status="close">
                <i class="fas fa-bars icon"></i>
            </button>
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

    toggeleMobileMenu(){
        let menuBtn = document.querySelector('.switch-menu__btn')
        let menuStatus = menuBtn.getAttribute('data-status');
        let mobileMenu = this.headerBlock.querySelector('.mobile-menu');
        if(menuStatus === 'close'){
            mobileMenu.classList.add('mobile-menu-active');
            document.body.style.overflow = 'hidden'
            menuBtn.innerHTML = '<i class="fas fa-times"></i>';
            menuBtn.setAttribute('data-status', 'open');

        }
        else if (menuStatus === 'open'){
            mobileMenu.classList.remove('mobile-menu-active');
            document.body.style.overflow = ''
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            menuBtn.setAttribute('data-status', 'close');
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