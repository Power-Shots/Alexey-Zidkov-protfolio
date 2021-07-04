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
            'Адресс': 'Славянск, Дон. обл.',
            'Фамилия': 'Жидков',
            'Телефон': '+3854452476',
            'Возрост': '20 Лет',
            'E-mail': 'powershot317@gmail.com',
            'Национальность': 'Украинец',
            'Telegram': '+3842442747',
            'Занятость': 'Доступен',
            'Языки': 'Украинкий, Русский, Английский',
        }
        let content = '';


        for (const item in myInfo) {
            content += `
                <p>${item}: <span>${myInfo[item]}</span></p>
            `;
            console.log(content)
        }
        blockInfo.innerHTML = `
            <h3>Персональная информация</h3>
            <div class="presonal-info">
                ${content}
            </div>
        `;
        return blockInfo;
    }

    createAchievements(){
        let achievementsBlock = document.createElement('div');
        achievementsBlock.classList.add('achievements')
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
                count: 23,
                title: 'Счастливых клиентов',
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

        console.log(this.block)
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
                persent: 70,
                title: 'js' 
            },
            {
                persent: 80,
                title: 'git' 
            },
            {
                persent: 50,
                title: 'jquery' 
            },
            {
                persent: 60,
                title: 'type script' 
            },
            {
                persent: 70,
                title: 'wordpress' 
            },
            {
                persent: 10,
                title: 'angular' 
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
        // console.log(persent, circumference);
        let offset = circumference - persent / 100 * circumference;
        return offset;
    }
}

let aboutMe1 = new AboutMe('#aboutMeBlock');
let meSkills1 = new MeSkills('#aboutMeBlock');
