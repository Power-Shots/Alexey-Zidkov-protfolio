class AboutMe {
    constructor(block){
        this.block = document.querySelector(block);
        this.init();
    }

    init(){
        this.printInfo();
    }

    printInfo(){
        let aboutInfo = document.createElement('section');
        aboutInfo.classList.add('about-info');
        let personalInfo = this.createPersonalInfo();
        let achievements = this.createAchievements();
        
        aboutInfo.innerHTML = `
            ${personalInfo.outerHTML}
            ${achievements.outerHTML}
        `;
        this.block.append(aboutInfo)
    }

    createPersonalInfo(){
        let blockInfo = document.createElement('div');
        blockInfo.classList.add('info');
        let myInfo = {
            'Имя': 'Алексей',
            'Фамилия': 'Жидков',
            'Возраст': '20 Лет',
            'Национальность': 'Украинец',        
            'Телефон': '+380660312518',
            'Telegram': '+380660312518',
            'E-mail': 'powershot317@gmail.com',
            'Занятость': 'Доступен',
            'Адресс': 'Славянск, Дон. обл.',
            'Языки': 'Украинcкий, Русский, Английский',
        }
        let content = '';


        for (const item in myInfo) {
            content += `
                <p>${item}: <span>${myInfo[item]}</span></p>
            `;
        }
        blockInfo.innerHTML = `
            <h3>Персональная информация</h3>
            <div class="presonal-info">
                ${content}
            </div>
            <div class="btn-block">
                <button class="open-modal-btn" onclick="aboutMe1.createModalWindow()">
                    <span>Скачать CV</span>
                    <div class="icon-block">
                        <i class="fas fa-file-download icon"></i>
                    </div>
                </button>
            </div> 
        `;
        return blockInfo;
    }

    createModalWindow(e){
        let modalDiv = document.createElement('div');
        modalDiv.id = 'modalWindow';
        modalDiv.innerHTML = `
            <div class="cover" onclick="aboutMe1.closeModalWindow()">
            </div>

            <div class="modal-block">
                <button class="close" onclick="aboutMe1.closeModalWindow()">
                    <i class="fas fa-times icon"></i>
                </button>
                <h3>Выберите язык</h3>
                    <div class="select-lang-block">
                        <a href="file/CV/CV_Alexey_Zhidkov_EN" class="download-link" download>
                            Английский
                        </a>
                        <a href="file/CV/CV_Alexsey_Zhidkov_RU.pdf" class="download-link" download>
                            Русский
                        </a>  
                    </div>
                
            </div>
        `;
        document.body.prepend(modalDiv);
        window.addEventListener('keydown', this.checkPressKey.bind(this))
    }
    

    closeModalWindow(){
        let modalDiv = document.querySelector('#modalWindow');
        if(modalDiv) modalDiv.remove();
    }

    checkPressKey(e){
        if(e.key === "Escape") this.closeModalWindow();
    }

    createAchievements(){
        let achievementsBlock = document.createElement('div');
        achievementsBlock.classList.add('achievements');
        let achievementsList = [
            {
                count : 1,
                title: 'Опыт разработки'
            },
            {
                count: 3,
                title: 'Завершённых проэктов',
            },
            {
                count: 2,
                title: 'Фреймворка',
            },
            {
                count: 2,
                title: 'Языка программированья'
            }
        ];

        let content = achievementsList.map(item => `
            <div class="item">
                <p class="count">
                    ${item.count}<span>+</span>
                </p>
                <p class="description">
                    ${item.title}
                </p>
            </div>
        `);

        achievementsBlock.innerHTML = content.join('');
        return achievementsBlock;

    }
};



class MeSkills {
    constructor(block){
        this.block = document.querySelector(block);
        this.print();
    }

    print(){
        let skillsSection = document.createElement('section');
        skillsSection.classList.add('me-skills');
        let skillsBlocks = this.createSkills(); 
        
        skillsSection.innerHTML = `
            <h2>my skills</h2>
            <div class="skills-block">
                ${skillsBlocks}
            </div>
        `;
        this.block.append(skillsSection)
    }

    createSkills(){
        let skillsList = [
            {
                persent: 90,
                title: 'html' 
            },
            {
                persent: 85,
                title: 'css' 
            },
            {
                persent: 85,
                title: 'Scss/Sass' 
            },
            {
                persent: 80,
                title: 'Bootstrap' 
            },
            {
                persent: 80,
                title: 'Materialize' 
            },
            {
                persent: 70,
                title: 'js' 
            },
            ,
            {
                persent: 70,
                title: 'jquery' 
            },
            {
                persent: 60,
                title: 'type script' 
            },
            {
                persent: 30,
                title: 'angular' 
            },
            {
                persent: 50,
                title: 'react' 
            },
            {
                persent: 80,
                title: 'git' 
            },
            {
                persent: 20,
                title: 'wordpress' 
            },
        ];

        let widthAndHeight = 150;
        let strokeWidth = 7;
        let radius = (widthAndHeight / 2) - (strokeWidth*2);
        let circumference = 2 * Math.PI * radius;
        let content = skillsList.map(item => `
            <div class="item">
                <div class="persent-circle-block">
                    <svg class="progress-ping" width="${widthAndHeight}" height="${widthAndHeight}">
                        <circle class="progress-ring-circle-bg" stroke-width="${strokeWidth}"
                        stroke-dasharray="${circumference} ${circumference}"
                        stroke-dashoffset="${this.setPersent(100, circumference)}"
                        cx="${widthAndHeight/2}" cy="${widthAndHeight/2}" r="${radius}"/>
                        <circle class="progress-ring-circle" stroke-width="${strokeWidth}"
                            stroke-dasharray="${circumference} ${circumference}"
                            stroke-dashoffset="${this.setPersent(item.persent, circumference)}"
                            cx="${widthAndHeight/2}" cy="${widthAndHeight/2}" r="${radius}"/>
                    </svg>
                    <span class="persent-count">${item.persent}%</span>
                </div>
                <p>${item.title}</p>
            </div>
        `);

        return content.join('');
    }

    setPersent(persent, circumference){
    
        let offset = circumference - persent / 100 * circumference;
        return offset;
    }
}

let aboutMe1 = new AboutMe('#aboutMeBlock');
let meSkills1 = new MeSkills('#aboutMeBlock');
