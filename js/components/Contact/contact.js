class Form {
    constructor(){
        this.inputsList = [
            {
                placeholder: 'YOUR NAME'
            },
            {
                placeholder: 'YOUR EMAIL'
            },
            {
                placeholder: 'YOUR SUBJECT'
            }
        ];
        this.btnHandler = this.hideError.bind(this);
        
    }

    createForm(){
        let form = null;
        let content = this.inputsList.map(item => `
            <div class="input-block">
                <input type="text" placeholder="${item.placeholder}">
            </div>
        `);

        form = `
            <div class="contact-form-block">
                <form class="contact-form">
                    <div class="top-inputs">
                        ${content.join('')}
                    </div>
                    <div class="input-block">
                        <textarea type"text" placeholder="YOUR MESSAGE"></textarea>
                    </div>
                    <button class="send-message">
                        Send message
                        <div class="icon-block"><i class="fab fa-telegram-plane"></i></div>
                    </button>
                </form>
            </div>
        `;
        return form;
    };

    verefication(e){
        e.preventDefault();
        let isValid = true;
        let inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
        for(let i=0;i<inputs.length;i++){
            if(inputs[i].value === ''){
                isValid = false;
                this.showError(inputs[i]);
            };
        };

        if(isValid === true){
            this.createMessage()
        }
    };

    createMessage(){
        let formBlock = document.querySelector('.contact-form-block');
        let compliteMessage = document.querySelector('.complite-message');
        if(!compliteMessage){
            compliteMessage = document.createElement('div');
            compliteMessage.classList.add('complite-message');
            compliteMessage.innerHTML = `
                <i class="fas fa-check-square"></i>
                <span>Сообщение отправлено</span>
            `;
            formBlock.append(compliteMessage);
        }
    }

    showError(el){
        let parentEl = el.parentElement;
        let span = parentEl.querySelector('.error-message');
        if(!span){
            span = document.createElement('span');
            span.classList.add('error-message');
            span.innerHTML = 'Обязательное поле';
        }
        
        parentEl.prepend(span);
        el.addEventListener('input', this.btnHandler);
    };

    hideError(e){
        let parentEl = e.target.closest('.input-block');
        let errorMessage = parentEl.querySelector('.error-message');
        if(errorMessage){
            errorMessage.remove();
        }
        e.target.removeEventListener('input', this.btnHandler) 
    };
}

class Contact {
    constructor(block){
        this.block = document.querySelector(block);
        this.form = new Form();
        this.print();
    }


    print(){
        let contactSection = '';
        let contactInfo = this.createContactInfo();
        let contactForm = this.form.createForm();
        let btnSendMessage = null;

        contactSection = `
            <section>
                ${contactInfo}
                ${contactForm}
            </section>
        `;

        this.block.innerHTML = contactSection;
        btnSendMessage = document.querySelector('.send-message');
        btnSendMessage.addEventListener('click', this.form.verefication.bind(this.form));
    }

    createContactInfo(){
        let infoBlock = '';
        let socialList = [
            {
                title: 'vk',
                href: 'https://vk.com/barrakudabz',
                icon: 'fab fa-vk',
            },
            {
                title: 'instagram',
                href: 'https://www.instagram.com/power.__.shot/',
                icon: 'fab fa-instagram'
            }
        ];

        let content = socialList.map(item => `
            <a href="${item.href}" class="social-link" data-title="${item.title}">
                <i class="${item.icon}"></i>
            </a>
        `);

        infoBlock = `
            <div class="info">
                <h3>Жду ваших предложений</h3>
                <p class="description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non illum aut
                    molestiae maxime labore ratione debitis hic laudantium exercitationem
                    nesciunt cum odit ullam saepe consequuntur fugit aliquam optio,
                    veritatis pariatur.
                </p>
                <div class="contact-data">
                    <div class="icon-block">
                        <i class="fas fa-envelope-open icon"></i>
                    </div>
                    <p>
                        <span>Пишите</span>
                        powershot317@gmail.com
                    </p>
                </div>
                <div class="contact-data">
                    <div class="icon-block">
                        <i class="fas fa-phone-alt"></i>
                    </div>
                    <p>
                        <span>Звоните</span>
                        +75 641 214 42 01
                    </p>
                </div>
                <div class="social-block">
                    ${content.join('')}
                </div>
            </div>
        `;

        return infoBlock;
    }
};


let contact1 = new Contact('.me-contact')