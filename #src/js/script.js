const store = [
    {
        id: 1,
        title: 'Кот полосатый',
        like: true,
        inStock: true,
        sale: 40,
        description: 'Коричневый окрас',
        old: 2,
        paw: 4,
        price: 35000,
        img: '../img/item-img.png'
    },
    {
        id: 2,
        title: 'Кот полосатый',
        like: true,
        inStock: false,
        sale: null,
        description: 'Коричневый окрас',
        old: 2,
        paw: 4,
        price: 40000,
        img: '../img/item-img_2.png'
    },
    {
        id: 3,
        title: 'Кот полосатый',
        like: false,
        inStock: true,
        sale: 30,
        description: 'Коричневый окрас',
        old: 2,
        paw: 4,
        price: 20000,
        img: '../img/item-img_3.png'
    },
    {
        id: 4,
        title: 'Кот полосатый',
        like: false,
        inStock: true,
        sale: null,
        description: 'Коричневый окрас',
        old: 2,
        paw: 4,
        price: 25000,
        img: '../img/item-img.png'
    },
    {
        id: 5,
        title: 'Кот полосатый',
        like: false,
        inStock: true,
        sale: 50,
        description: 'Коричневый окрас',
        old: 2,
        paw: 4,
        price: 30000,
        img: '../img/item-img_3.png'
    },
    {
        id: 6,
        title: 'Кот полосатый',
        like: true,
        inStock: false,
        sale: null,
        description: 'Коричневый окрас',
        old: 2,
        paw: 4,
        price: 10000,
        img: '../img/item-img_2.png'
    },
];
function sortUp() {
    const elements = document.querySelectorAll('.article-item');
    const sorted = [...elements].sort((a, b) => {
        const priceElA = a.querySelector(".article-item__price");
        const priceElB = b.querySelector(".article-item__price");
        const getPrice = (el) => parseInt(el.innerHTML.replace(/ /g, ""));
        return getPrice(priceElA) - getPrice(priceElB);
    });
    const resultEl = document.querySelector("#article-wrap");
    resultEl.innerHTML = null;
    sorted.forEach(el => resultEl.appendChild(el));
}

// sortUp();
function sortDown() {
    const elements = document.querySelectorAll('.article-item');
    const sorted = [...elements].sort((a, b) => {
        const priceElA = a.querySelector(".article-item__price");
        const priceElB = b.querySelector(".article-item__price");
        const getPrice = (el) => parseInt(el.innerHTML.replace(/ /g, ""));
        return getPrice(priceElB) - getPrice(priceElA);
    });
    const resultEl = document.querySelector("#article-wrap");
    resultEl.innerHTML = null;
    sorted.forEach(el => resultEl.appendChild(el));
}

///// <---------------------- filter ---------------->
let sort = document.getElementById('select-filter__price');
sort.addEventListener('click', () => {
    if (sort.value === 'toUp') {
        sortUp()
    }
    if (sort.value === 'toDown') {
        sortDown()
    }
});


///// <----------------------------------------------start section Content ------------------------->
function item(element) {
    let place = document.getElementById('article-wrap');

    let contentItem = document.createElement('div');
    contentItem.classList.add('article-item');

//////   Image Banner /////////////////
    let itemBanner = document.createElement('div');
    itemBanner.classList.add('article-item-img__wrap');
    let sale = document.createElement('div');

    if (element.sale) {
        sale.classList.add('sale');
        sale.textContent = `-${element.sale}%`;
    }
    itemBanner.appendChild(sale);

    let like = document.createElement('img');
    like.classList.add('like');
    like.addEventListener('click', () => {
        element.like = !element.like;
        changeLike()
    });

    function changeLike() {
        if (element.like) {
            like.src = '../img/like-active.png';
        } else {
            like.src = '../img/like-default.png';
        }
    }

    if (element.like) {
        like.src = '../img/like-active.png';
    } else {
        like.src = '../img/like-default.png';
    }

    itemBanner.appendChild(like);

    let img = document.createElement('img');
    img.classList.add('article-item-img');
    img.src = element.img;

    itemBanner.appendChild(img);

////// Content //////////////////////////
    let itemContent = document.createElement('div');
    itemContent.classList.add('article-item-content__wrap');

    ////  <------Title 1 section in content ----->
    let contentTitle = document.createElement('div');
    contentTitle.classList.add('article-content-title');
    contentTitle.textContent = element.title;
    itemContent.appendChild(contentTitle);
    ////  <------ Description 2 section in content ----->
    let contentDescription = document.createElement('div');
    contentDescription.classList.add('article-content');
    let descrip = document.createElement('p');
    descrip.textContent = element.description;
    contentDescription.appendChild(descrip);

    let contentItemDescriptionOld = document.createElement('div');
    contentItemDescriptionOld.classList.add('article-content__direct');
    let old = document.createElement('span');
    old.classList.add('bold');
    old.textContent = element.old;
    let oldText = document.createElement('span');
    oldText.textContent = 'Возраст';


    contentItemDescriptionOld.appendChild(old);
    contentItemDescriptionOld.appendChild(oldText);
    contentDescription.appendChild(contentItemDescriptionOld);


    let contentItemDescriptionPaw = document.createElement('div');
    contentItemDescriptionPaw.classList.add('article-content__direct');
    let paw = document.createElement('span');
    paw.classList.add('bold');
    paw.textContent = element.paw;
    let pawText = document.createElement('span');
    pawText.textContent = 'Кол-во лап';
    contentItemDescriptionPaw.appendChild(paw);
    contentItemDescriptionPaw.appendChild(pawText);

    itemContent.appendChild(contentDescription);
    contentDescription.appendChild(contentItemDescriptionOld);
    contentDescription.appendChild(contentItemDescriptionPaw);

    ////  <------Price 3 section in content ----->
    let priceFloat = document.createElement('div');
    priceFloat.classList.add('article-item__price');

    function priceWithSpaces(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    priceFloat.textContent = `${priceWithSpaces(element.price)} руб.`;
    itemContent.appendChild(priceFloat);

////// Button //////////////////////////
    let itemBtn = document.createElement('div');
    itemBtn.classList.add('article-item__buy');
    let btn = document.createElement('button');

    function changeBtn(element) {
        btn.textContent = element.inStock ? 'Купить' : 'Продан';
        if (!element.inStock) {
            btn.classList.add('backgroundColorBlue');
            btn.disabled
        }
    }

    changeBtn(element);
    itemBtn.appendChild(btn);

    contentItem.appendChild(itemBanner);
    contentItem.appendChild(itemContent);
    contentItem.appendChild(itemBtn);
    place.appendChild(contentItem);

}

function content(element, index) {
    item(element);
}
store.forEach(content);


///// <----------------------------------------------end section Content ------------------------->

let resultSeach = document.getElementById('result-seach');
resultSeach.textContent = `Найдено ${store.length} котов`;

let scrollToTop = document.querySelector('.top-button');
let scrollPos = 0;
function checkPosition() {
    let windowY = window.scrollY;
    if (windowY < scrollPos) {
        scrollToTop.style.display = 'none'
    } else {
        scrollToTop.style.display = 'flex'
    }
    scrollPos = windowY;
}
window.addEventListener('scroll', checkPosition);

scrollToTop.addEventListener('click', ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}


let input = document.getElementById('email');
const submit = document.querySelector('.subscribe-btn');
submit.addEventListener('click',(event)=>{
    event.preventDefault();
    if(!emailIsValid(input.value)){
        alert('Ошибка! не корректный email')
    }
});






