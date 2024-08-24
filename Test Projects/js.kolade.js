let phonearr=[{name:'Infinix Zero 30 5G 6.78" 256GB ROM/12GB RAM Android 13-Gold',
price:'423,000',pricen:4230000,
desc:'',
img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYNxGBtl71mr5EAPYeJyLapptUMYmfYpuDw&usqp=CAU' },

{
  name:' Infinix Hot 30i (X669) 6.6, 128GB, UP TO 8GB RAM,5000mAh, 13MP, 4G ',price:'215,000',pricen:215000,img:'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/7191732/1.jpg?0385"'
},
{
  name:'Infinix Zero Ultra 6.8 FHD+,13GB+256GB 5G ANDROID 12-Noir',
price:'215,000' ,pricen:215000,img:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/7941862/1.jpg?5537'
},
{
  name:'Infinix Note 11 Pro - 6.95" FHD+ (8GB RAM, 128GB ROM) Android 11 (64/13/2)MP + 16MP ',
price:'215,000',pricen:215000, img:'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/657079/1.jpg?3399'},
{
  name:'itel S23+ 6.6" 8GB RAM/256GB ROM Android 12 - Cyan',
price:'215,000',pricen:215000,img:'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/4046952/1.jpg?6367'
},

{
  name:'Samsung Galaxy A04s 6.5" 4GB RAM/128GB ROM Android 12 - Black',
price: '215,000',pricen: 215000, 
img:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/9035102/1.jpg?7464'
},

]
let acca=''
phonearr.forEach((phone)=>{

acca+=`

<button class="button buttons" data-name="${phone.name} data-price="${phone.price} data-img="${phone.img}  data-pricen="${phone.pricen} "><img src="${phone.img}" height="208" 
width="208" class="img"><br>
 <div class="desc">${phone.name}</div>
 
 <div class="price">${phone.price}</div></button>


`


})
document.querySelector('.grid').innerHTML=acca


document.querySelectorAll('.buttons').forEach((buttonss)=>{
buttonss.addEventListener('click',()=>{
let   buttonlists =buttonss.dataset
 let  imgb=buttonlists.img
 let  nameb=buttonlists.name
 let  priceb=buttonlists.price
 let  pricenb=buttonlists.pricen
  document.querySelector('.grandparents').innerHTML=`
  <div class="parents">
  <div class="centers">
  <i class="fa-solid fa-x cancel"></i>
  <div style="padding-top: 10px;"><img src="${imgb}" width="258" height="208" class="im"></div>
  <div class="names">${nameb}</div>
  <div class="descr">Infinix Hot 30i (X669) 6.6, 128GB, UP TO 8GB RAM, 5000mAh, 13MP, 4G  </div>
  
  <div><button class="add">Add to cart</button></div>
    </div></div>`
    document.querySelector('.q').classList.add('blur')
    document.querySelector('.cancel').addEventListener('click',()=>{
   document.querySelector('.grandparents').innerHTML=''
   document.querySelector('.q').classList.remove('blur')
   
    })
})
})

