const store = [
    {
        id:1,
        title: 'Кот полосатыйvffv',
        like: true,
        inStock: true,
        sale: 40,
        description: 'Коричневый окрас',
        old: 20,
        paw: 40,
        price: 33333,
        img: '../img/item-img.png'
    },
    {
        id:2,
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
        id:3,
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
        id:4,
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
        id:5,
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
        id:6,
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

function item(element){
    let place = document.getElementById('article-wrap');

    let contentItem = document.createElement('div');
    contentItem.classList.add('article-item');




//////   Image Banner /////////////////
    let itemBanner = document.createElement('div');
    itemBanner.classList.add('article-item-img__wrap');
    let sale = document.createElement('div');

    if(element.sale){
        sale.classList.add('sale');
        sale.textContent = `-${element.sale}%`;
    }
    itemBanner.appendChild(sale);

    let like = document.createElement('img');
    like.classList.add('like')
    if(element.like){
        like.src = '../img/like-active.png';
    } else{
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







////// Button //////////////////////////
    let itemBtn = document.createElement('div');
    itemBtn.classList.add('article-item__buy');
    let btn = document.createElement('button');

    function changeBtn(element){
        btn.textContent= element.inStock ? 'Купить' : 'Продан';
        if(!element.inStock){
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




function content(element, index){
    item(element)

    console.log(element.id);




    // contentItem.getElementsByClassName('article-content-title')[0].textContent =element.title;
    // contentItem.getElementsByClassName('article-content')[0].getElementsByTagName('p')[0].textContent = element.description;
    // contentItem.getElementsByClassName('article-item__price')[0].textContent = element.price;
    // console.log(element.title)
    //
    // place.
}



function priceWithSpaces(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

let price = priceWithSpaces(store[0].price);

// contentPrice.textContent = `${price} руб.`;



store.forEach(content);





