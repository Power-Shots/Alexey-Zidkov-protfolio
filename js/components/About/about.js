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
        let myInfo = {
            'Имя': 'Алексей',
            'Адресс': 'Славянск, Донецкая обл.',
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
                title: 'Законченных проэктов',
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
}


let aboutMe1 = new AboutMe('#aboutMeBlock');
