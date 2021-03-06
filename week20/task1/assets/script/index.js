class SuperHero {
    constructor(name, universe, alterEgo, occupation, friends, superPower, details, photoSrc, id) {
        this.name = name;
        this.universe = universe;
        this.alterEgo = alterEgo;
        this.occupation = occupation;
        this.friends = friends;
        this.superPower = superPower;
        this.details = details;
        this.photoSrc = photoSrc;
        this.id = id;
    }

}

let batman = new SuperHero("Бэтмен", "DC Comics", "Брюс Уэйн", "борец с преступностью, филантроп, миллиардер", "Робин, Бэтгерл", "интеллект, обширные познания, знания боевых искусств, ловкость", `по популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. 
Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом.
Если подумать, это один из немногих героев, кто добился своего положения за счет ума и упорства, а не за счет мутаций.`, "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg", "batman");

let superman = new SuperHero("Супермен", "DC Comics", "Кларк Кент", "борец за справедливость", "собака Крипто",
    "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    `полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. 
Супермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты.`, "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg", "superman");

let ironman = new SuperHero("Железный человек", "Marvel Comics", "Тони Старк", "гений, миллиардер, плейбой, филантроп", "Мстители",
    "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    `пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, то Тони Старка — обожают :) То ли дело в шикарной актерской игре Роберта Дауни мл., который выбил роль у Николаса Кейджа и Тома Круза, то ли в хорошо прописанном персонаже.
Прототипом для героя послужили Илон Маск и изобретатель Говард Хьюз.
Железный Человек не всегда ходил в красном модном костюме: в своих первых версиях 1963 года он был скромного серого цвета. Увы, в киновоплощении бронекостюм даже не из металла — его делали из пластика и стекловолокна.`, "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg", "ironman");

let spiderman = new SuperHero("Спайдер-мен/Человек-паук", "Marvel Comics", "Питер Паркер", "борец за справедливость, студент, фотограф", "Мстители, Фантастическая четверка, Люди Икс",
    "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
    `Человек-паук родился от потребности Marvel Comics создать героя-подростка. Другие супергерои вроде Бэтмена и Супермена — взрослые мужчины, и целевая аудитория не видела в них примеры для подражания. Пятнадцатилетний Питер Паркер дал понять всем тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Для этого даже не обязательно быть суперкрасавчиком! Всего лишь нужен укус паучка:)
Питер не сразу использовал свои силы во благо людей: изначально он хотел делать на них деньги, участвуя в нелегальных боях без правил. Затем его любимый дядя Бен умер от рук грабителя, и подросток поклялся, что очистит свой родной Нью-Йорк ото зла. Однако спустя время подросток понял, что одной клятвы недостаточно и что «с великой силой приходит великая ответственность».
Кстати, не все суперсилы у Питера появились за счет мутации: парень самостоятельно взломал технологию Тони Старка, после чего заслужил его признание. `, "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg", "spiderman");

let captainamerica = new SuperHero("Капитан Америка", "Marvel Comics", "Стивен Роджерс", "супер-солдат", "Мстители",
    "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
    `Капитан Америка — персонаж, целеноправленно созданный, чтобы воплощать идеалы патриотизма. Потому он был особенно популярный во время Второй мировой войны. В комиксах обращение «Капитан Америка» применяется к любому, кто выбран правительством США. Больше всего оно закрепилось именно за Стивом Роджерсом.
Стив родился в 1917 году в семье ирландских эмигрантов Сары и Джозефа Роджерсов. В детстве он был очень слабым юношей и постоянно подвергался насмешкам со стороны других ребят. Ирландские корни давали о себе знать, потому парень от драки не лез. В начале Второй мировой войны Стивен стремился попасть на фронт. Естественно, из-за здоровья ему отказывали.
По воле судьбы ему предложили принять участие в секретном оборонном проекте, целью которого было создание суперсолдат. Несмотря на сложности во время эксперимента, результат был успешным. Роджерс превратился из хилого юноши в настоящего Аполлона. Актер Крис Эванс с этой ролью вполне справился:)`, "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg", "captainamerica");

let thor = new SuperHero("Тор", "Marvel Comics", "нет; полное имя — Тор Одинсон", "борец за справедливость, скандинавский бог", "Мстители",
    "все, что может бог, плюс молот Мьелнир",
    `персонаж Тора основан на образе одноименного скандинавского бога. Тор во вселенной Marvel — родной сын Одина и древнейшей богини Геи. После рождения сына Один забрал его в Асгард, где растил вместе со своей женой, богиней Фригг. Последнюю Тор всегда считал своей настоящей матерью и лишь много позже узнал правду о своем рождении.
Стоит сказать, что до нынешнего Тора в исполнении Криса Хемсворта у супергероя было несколько воплощений. В одном из них он погиб в схватке с мифическим змеем Мидгардом. Это привело к Рагнареку — некоему апокалипсису в скандинавской мифологии. `, "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg", "thor");

let hulk = new SuperHero("Халк", "Marvel Comics", "Брюс Беннер", "супергерой, борец за справедливость, ученый-биохимик", "Мстители",
    "сверхчеловеческая сила искорость, выносливость, полет",
    `идею создания Халка как персонажа можно отнести к фантастической новелле «Странная история доктора Джекила и мистера Хайда», в которой ученый не может примириться со своим демоническим альтер эго. Прошлое у Халка — хуже некуда: отец Брюса страдал от алкоголизма и приступов ярости, а мать пыталась всеми силами уберечь сына от гнева своего мужа. Она погибла, защищая своего единственного ребенка от его побоев.
Пронеся через все детство тяжелый психологический груз, Брюс вырос в чрезвычайно одаренного, но замкнутого юношу. Хотя Брюс не мог уважать отца, но пошел в науке по его стопам и выбрал ядерную физику. Во время эксперимента он ввел себе пробную сыворотку и подверг себя воздействию большого количества гамма-радиации. Беннер превратился в мускулистого неуправляемого гиганта, который крушил все вокруг и не понимал, что происходит. Так имя Халка стало нарицательным для людей, который не могут держать себя в руках.`, "https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg", "hulk");

let wonderwoman = new SuperHero("Чудо-женщина", "DC Comics", "Диана Принс", "супергероиня, секретарь-референт", "Лига Справедливости, Бэтмен, Супермен",
    "сверхчеловеческая сила искорость, выносливость, полет",
    `пора бы разбавить эту мужскую вечеринку по-настоящему крутой девчонкой :) Принцесса-амозонка родилась на мистическом острове Темескира, расположенном в центре Бермудского треугольника, где пропадают самолеты. Свое настоящее имя — Диана — она получила в честь древнегреческой богини охоты, а суперспособности — от богини любви Афродиты. Растили героиню в исключительно женском обществе, поэтому Чудо-женщина часто появляется в культуре как символ феминизма.
У Дианы есть супер-снаряжение: лассо истины и тиара. Первое было сковано богом огня Гефестом, и оно никогда не промахивается. Человек, попавший в его петлю, неизбежно расскажет свои секреты, вспомнит забытое и даже подчинится приказам. Тиара же работает как метательное оружие, способное рассечь что угодно. Корона со звездой в центре символизирует патриотизм американской героини и служит стильным аксессуаром :)`, "https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg", "wonderwoman");

let blackwidow = new SuperHero("Черная вдова", "Marvel Comics", "Наташа Романофф", "супергероиня, шпионка", "Мстители",
    "пик человеческого физического потенциала, замедленное старение, знание многих языков",
    `супергероиня российского происхождения родилась предположительно в 1928 году в Сталинграде. Во время Второй мировой войны она потеряла родителей и была спасена из горящего дома советским солдатом. Тот на некоторое время стал ее опекуном. Повзрослев, Наташа попала в организацию «Красная Комната», где прошла многочисленные тренировки, а именно — была частью шпионской программы.
Там же ей вживили сыворотку Суперсолдата — как у Капитана Америки, но в советском варианте. Благодаря ей Наташа может использовать максимальные возможности своего организма: силу, гибкость, скорость, ловкость и т. д. Также сыворотка дает эффект замедленного старения. По мнению фанатов, самое главное преимущество Черной Вдовы — то, что ее сыграла красотка Скарлетт Йоханссон :)`, "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg", "blackwidow");

let deadpool = new SuperHero("Дэдпул", "Marvel Comics", "Уэйд Уинстон Уилсон", "антигерой, наемник", "частично Мстители, Человек-паук, Росомаха",
    "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
    `как и Росомаха из Людей Икс, Дэдпул был подвергнут опытам по программе «Оружие Икс». Ученые попытались исцелить его рак, привив его клеткам способность к регенерации. Как и всегда в комиксах, что-то пошло не так, и Дэдпул остался изуродованным и психически нестабильным.
Это единственный супергерой из списка, который однозначно не на стороне добра. Дэдпул наслаждается насилием. Первоначально появившись в основной Вселенной Marvel, он получил альтернативные варианты в других реальностях Мультивселенной. Что оставалось неизменным — его циничное, черное чувство юмора: за него Дэдпула прозвали «Болтливым наемником».`, "https://n1s1.hsmedia.ru/34/93/39/3493392c94fc2ae0552ef9c7e87f2617/728x382_1_cc2a743fd686b7b2e256c062966bb465@1034x543_0xac120002_2692921231540468872.jpg", "deadpool");

let superHeroes = [batman, superman, ironman, spiderman, captainamerica, thor, hulk, wonderwoman, blackwidow, deadpool];

let superHeroesJson = JSON.stringify(superHeroes);

function showcards() {
    let cardsInner = JSON.parse(superHeroesJson);

    for (let i = 0; i < cardsInner.length; i++) {
        let cardInnerText = "";

        cardInnerText += `<div class="card__background"></div>
        <div class="card__text-container">
        <h2 class="card__title">${cardsInner[i].name}</h2>
        <p class="card__paragraph"><span class="card__subtitle">Вселенная: </span><span class="card__text">${cardsInner[i].universe}</span></p>
        <p class="card__paragraph"><span class="card__subtitle">Альтер Эго: </span><span class="card__text">${cardsInner[i].alterEgo}</span></p>
        <p class="card__paragraph"><span class="card__subtitle">Род деятельности: </span><span class="card__text">${cardsInner[i].occupation}</span></p>
        <p class="card__paragraph"><span class="card__subtitle">Друзья: </span><span class="card__text">${cardsInner[i].friends}</span></p>
        <p class="card__paragraph"><span class="card__subtitle">Суперсилы: </span><span class="card__text">${cardsInner[i].superPower}</span></p></div>
        `
        document.querySelectorAll(".main__card")[i].innerHTML = cardInnerText;
        document.querySelectorAll(".card__background")[i].style.backgroundImage = `URL(${cardsInner[i].photoSrc})`;
    }

}

document.addEventListener("DOMContentLoaded", showcards);

function showFullInformation(event) {
    let cardsInner = JSON.parse(superHeroesJson);
    let target = event.target;
    if (target.className === 'card__background') {
        let targetParent = target.closest(".main__card");
        let parentID = targetParent.id;

        for (let i = 0; i < cardsInner.length; i++) {
            let cardInnerText = "";

            if (cardsInner[i].id === parentID) {
                targetParent.style.cssText = `width: 93%;
                max-width: 93%;`;

                cardInnerText += `<div class="card__background"></div>
                <h2 class="card__title">${cardsInner[i].name}</h2>
        <img src="${cardsInner[i].photoSrc}" alt="${cardsInner[i].name}">
        <p class="card__paragraph"><span class="card__subtitle">Вселенная: </span><span class="card__text">${cardsInner[i].universe}</span></p>
        <p class="card__paragraph"><span class="card__subtitle">Альтер Эго: </span><span class="card__text">${cardsInner[i].alterEgo}</span></p>
        <p class="card__paragraph"><span class="card__subtitle">Род деятельности: </span><span class="card__text">${cardsInner[i].occupation}</span></p>
        <p class="card__paragraph"><span class="card__subtitle">Друзья: </span><span class="card__text">${cardsInner[i].friends}</span></p>
        <p class="card__paragraph"><span class="card__subtitle">Суперсилы: </span><span class="card__text">${cardsInner[i].superPower}</span></p>
        <p class="card__paragraph"><span class="card__subtitle">Подробнее: </span><p class="card__text">${cardsInner[i].details}</p></p>
        <div class="rating">
        <div class="rating__items">
            <input type="radio" name="rating" id="rating__5" class="rating__item" value="5"/>
            <label for="rating__5" class="rating__label"></label>
            <input type="radio" name="rating" id="rating__4" class="rating__item" value="4"/>
            <label for="rating__4" class="rating__label"></label>
            <input type="radio" name="rating" id="rating__3" class="rating__item" value="3"/>
            <label for="rating__3" class="rating__label"></label>
            <input type="radio" name="rating" id="rating__2" class="rating__item" value="2"/>
            <label for="rating__2" class="rating__label"></label>
            <input type="radio" name="rating" id="rating__1" class="rating__item" value="1"/>
            <label for="rating__1" class="rating__label"></label>
        </div>
    </div>
        `
                targetParent.innerHTML = cardInnerText;
                document.querySelectorAll(".card__background")[i].style.backgroundImage = `none`;
                document.querySelectorAll(".card__background")[i].style.minHeight = `0px`;


                function getRating() {
                    for (let index = 0; index < 5; index++) {
                        if (document.querySelectorAll(".rating__item")[index].checked) {
                            console.log(document.querySelectorAll(".rating__item")[index].value);
                            let rateForStorage;

                            switch (document.querySelectorAll(".rating__item")[index].value) {
                                case "5":
                                    rateForStorage = 1;
                                    break;
                                    case "4":
                                    rateForStorage = 2;
                                    break;
                                    case "3":
                                    rateForStorage = 3;
                                    break;
                                    case "2":
                                    rateForStorage = 4;
                                    break;
                                    case "1":
                                    rateForStorage = 5;
                                    break;
                            }
                            // document.querySelectorAll(".rating__item")[index].value
                            if (localStorage.getItem(cardsInner[i].name) != cardsInner[i].name) {
                                localStorage.setItem(cardsInner[i].name, cardsInner[i].name);
                                localStorage.setItem(`${cardsInner[i].name} rate`, rateForStorage);

                                console.log(localStorage);
                            }
                            if (localStorage.getItem(cardsInner[i].name) === cardsInner[i].name) {
                                localStorage.setItem(`${cardsInner[i].name} rate`, rateForStorage);
                            }
                        } else {
                            continue;
                        }

                    }
                }
                document.querySelector(".rating__items").addEventListener("click", getRating);

                if (localStorage.length != 0 && cardsInner[i].name === localStorage.getItem(cardsInner[i].name)) {
                    document.querySelectorAll(".rating__item")[localStorage.getItem(`${cardsInner[i].name} rate`) - 1].setAttribute('checked', 'checked');
                }
            }

            if (cardsInner[i].id != parentID) {
                cardInnerText = "";

                cardInnerText += `<div class="card__background"></div>
        <div class="card__text-container">
        <h2 class="card__title">${cardsInner[i].name}</h2>
        <p class="card__paragraph"><span class="card__subtitle">Вселенная: </span><span class="card__text">${cardsInner[i].universe}</span></p>
        <p class="card__paragraph"><span class="card__subtitle">Альтер Эго: </span><span class="card__text">${cardsInner[i].alterEgo}</span></p>
        <p class="card__paragraph"><span class="card__subtitle">Род деятельности: </span><span class="card__text">${cardsInner[i].occupation}</span></p>
        <p class="card__paragraph"><span class="card__subtitle">Друзья: </span><span class="card__text">${cardsInner[i].friends}</span></p>
        <p class="card__paragraph"><span class="card__subtitle">Суперсилы: </span><span class="card__text">${cardsInner[i].superPower}</span></p></div>
        `
                document.querySelectorAll(".main__card")[i].innerHTML = cardInnerText;
                document.querySelectorAll(".main__card")[i].style.cssText = `width: 41%;
                max-width: 41%;`
                document.querySelectorAll(".card__background")[i].style.backgroundImage = `URL(${cardsInner[i].photoSrc})`;
            }
        }
    }

}


document.querySelector(".main__container").addEventListener("click", showFullInformation)