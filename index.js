let TMT=document.getElementsByClassName('accordion');

let i;
for(i=0;i< TMT.length;i++){
    TMT[i].onclick=function(){
        this.classList.toggle('active');

        this.nextElementSibling.classList.toggle('show');

    }

}
