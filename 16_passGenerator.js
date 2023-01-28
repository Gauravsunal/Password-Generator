class Password{
    weakPassword(){
        let str_small="abcdefghijklmnopqrstuvwxyz";
        let str_large="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let j=0;
        let password="";

        while(j<4){
            let pass1=Math.floor(Math.random()*str_small.length);
            let pass2=Math.floor(Math.random()*str_large.length);
            password+=str_small[pass1]+str_large[pass2];
            j++;
        }
        let btn=document.getElementById("weakPassword");
        let para=document.getElementById("paragraph");
        btn.addEventListener("click",()=>{
            para.innerHTML=password;
        })
    }

    strongPassword(){
        let str_small="abcdefghijklmnopqrstuvwxyz";
        let str_large="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let numbers="0123456789"
        let j=0;
        let password="";

        while(j<4){
            let pass1=Math.floor(Math.random()*str_small.length);
            let pass2=Math.floor(Math.random()*str_large.length);
            let pass3=Math.floor(Math.random()*numbers.length);
            password+=str_small[pass1]+str_large[pass2]+numbers[pass3];
            j++;
        }
        let btn=document.getElementById("strongPassword");
        let para=document.getElementById("paragraph");
        btn.addEventListener("click",()=>{
            para.innerHTML=password;
        })
    }

    superstrongPassword(){
        let str_small="abcdefghijklmnopqrstuvwxyz";
        let str_large="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let numbers="0123456789"
        let special="!@#$%^*";
        let j=0;
        let password="";

        while(j<4){
            let pass1=Math.floor(Math.random()*str_small.length);
            let pass2=Math.floor(Math.random()*str_large.length);
            let pass3=Math.floor(Math.random()*numbers.length);
            let pass4=Math.floor(Math.random()*special.length);
            password+=str_small[pass1]+str_large[pass2]+numbers[pass3]+special[pass4];
            j++;
        }
        let btn=document.getElementById("superStrongPassword");
        let para=document.getElementById("paragraph");
        btn.addEventListener("click",()=>{
            para.innerHTML=password;
        })
    }

    funnyPassword(){
        let str=["hello biddu","Kya bolte","7 Crore","Paisa he Paisa hoga","greeb ho?", "abe ja!!"];
        let j=0;
        let password="";

        while(j<1){
            let pass1=Math.floor(Math.random()*str.length);
            password+=str[pass1];
            j++;
        }
        let btn=document.getElementById("funnyPassword");
        let para=document.getElementById("paragraph");
        btn.addEventListener("click",()=>{
            para.innerHTML=password;
        })
    }
}

let pass=new Password();
pass.weakPassword();
pass.strongPassword();
pass.superstrongPassword();
pass.funnyPassword();