let btn= document.querySelector('#btn');

btn.addEventListener('click',function(){
       let r= Math.floor(Math.random() *256 );
       let g= Math.floor(Math.random() *256 );
       let b= Math.floor(Math.random() *256 );
       let color = `rgb(${r},${g},${b})`;
       let h3=document.querySelector("h2");
       h3.innerText=`Color rightnow is : ${color}`; 
       let box=document.querySelector('#box');
       box.style.backgroundColor = color;

});