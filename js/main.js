
const logocart=document.querySelector(".logoCart")
const message=document.querySelector(".message")
const number=document.querySelector(".number")
const miness=document.querySelector(".miness")
const pellas=document.querySelector(".plus")
const buynumebr=document.querySelector(".buyNumber")
const addtocart=document.querySelector(".addToCart")
const pricereview=document.querySelector(".priceReview")
const numberbuy=document.querySelector(".Numbers")
const total=document.querySelector(".total")
const priceproduct=document.querySelector("#priceProduct")
const buyInfo=document.querySelector(".buyInformationContainer")
const text=document.querySelector(".text")
const close =document.querySelector(".iconClose")
const modal=document.querySelector(".modalContainer")
const Fullbody=document.querySelector(".fullbody")
const image=document.querySelector(".imageModal")
const imageMain=document.querySelector(".image")
const hambergurMenu=document.querySelector(".hambergurMenu")
const closeMenu =document.querySelector(".close")
const navigatinMenu=document.querySelector(".navigatinMenu")
const  responsiveRight=document.querySelector(".responsiveRight")
const responsiveLeft=document.querySelector(".responsiveLeft")
const imageResponsive =document.querySelector(".imageResponsive")
// arrwo
const arrwoNext=document.querySelector(".arrowRight")
const arrowPrev=document.querySelector(".arrowLeft")

logocart.addEventListener("click", ()=>{
    message.classList.toggle("active")
})
document.addEventListener("DOMContentLoaded",()=>{
    counterPlus()
    counterMinsess()
    showCart()
    calPrice()
    showPerson()
    showModal()
    closeModel()
    Showmenu()
    closemenu()
//    close Modal


})
const Showmenu=()=>{
    hambergurMenu.addEventListener("click", ()=>{
        navigatinMenu.classList.toggle("deactive")
        Fullbody.classList.toggle("deactive")
    })
}
const closemenu=()=>{
    closeMenu.addEventListener("click", ()=>{
        navigatinMenu.classList.toggle("active")
        Fullbody.classList.toggle("active")
    })
}
const closeModel=()=>{
    close.addEventListener("click",()=>{
        modal.classList.toggle("active")
        Fullbody.classList.toggle("active")
    })}
// showModal
const showModal=()=>{
   
    imageMain.addEventListener("click",()=>{
        modal.classList.toggle("deactive")
        Fullbody.classList.toggle("deactive")
    })
}
// calc price

let counter=0;
// mines
 const counterPlus=()=>{
     pellas.addEventListener("click" ,()=>{
        number.innerText=counter+1;
        counter++
} )
 }
// pelass
 const counterMinsess =()=>{
    miness.addEventListener("click", ()=>{
        if(counter === 0 ){
            number.innerText=0;
        }
        else{
            number.innerText=counter-1;
            counter--
        }   
    })
 }
  const showCart=()=>{
    addtocart.addEventListener("click", ()=>{
        if(counter>0){
            buynumebr.innerText=number.innerText;
            buynumebr.classList.add("active")
            text.classList.toggle("active")
            buyInfo.classList.toggle("active")
        } 
})
}
// problem
const calPrice=()=>{
    // give innerText
    const price=Number(priceproduct.innerText)
    const countBuy=counter
    // const numbers=number.innerText
    // set InnerText
         pricereview.innerText=price + " " +  "0.0";
         numberbuy.innerText=countBuy;
        total.innerText=price*countBuy ; 
        console.log(number.innerText)
}
  // carouselImage
  const array=[
    {
      img:"images/image-product-1.jpg"
      }
      
    ,
    {

        img:"images/image-product-2.jpg"
    },
    {

        img:"images/image-product-3.jpg"
    },
    {

        img:"images/image-product-4.jpg"
    }
    
]
// counter
let counters=0;
// show person
const showPerson=()=>{
    const Slide=array[counters]
    image.src=Slide.img
}

// nextSlide
const nextSlide=()=>{
    counters++
    if(counters>array.length-1){
        counters=0;
    }}
// priveSlide
const prevSlide=()=>{
    counters--
    if(counters<0){
        counters=Array.length
    }
}
// eventNextSlide
arrwoNext.addEventListener("click",()=>{
    nextSlide()
    showPerson()
})

//eventPrevSlide
arrowPrev.addEventListener("click",()=>{
    prevSlide()
    showPerson()
})
// Responsive
const showPersonResponsive=()=>{
    const Slide=array[counters]
    imageResponsive.src=Slide.img
}
responsiveRight.addEventListener("click",()=>{
    nextSlide()
    showPersonResponsive()
})
responsiveLeft.addEventListener("click", ()=>{
    prevSlide()
    showPersonResponsive()
})


    