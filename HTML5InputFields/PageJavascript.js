//UC1
const text=document.querySelector('#text');
const textError=document.querySelector('.text-error');
text.addEventListener('input',function()
{
     let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
     if(nameRegex.test(text.value))
     {  
         textError.textContent=" ";
     }
     else
     {
         textError.textContent="name is incorrect";

     }


});

//UC2
const text1=document.querySelector('#email');
const textError1=document.querySelector('.text-error1');
text1.addEventListener('input',function()
{
     let nameRegex1=RegExp('^[0-9a-zA-Z]+[.+-_]{0,1}[0-9a-zA-Z]+[@][0-9a-zA-Z]+[.][a-zA-Z]{2,4}([a-zA-Z]{2,3}){0,1}');
     if(nameRegex1.test(text1.value))
     {  
         textError1.textContent=" ";
     }
     else
     {
         textError1.textContent="incorrect email";

     }


});

//UC3
const text2=document.querySelector('#number');
const textError2=document.querySelector('.text-error2');
text2.addEventListener('input',function()
{
     let nameRegex2=RegExp('^[0-9]{10}$');
     if(nameRegex2.test(text2.value))
     {  
         textError2.textContent=" ";
     }
     else
     {
         textError2.textContent="incorrect number";

     }


});

//UC5
const text3=document.querySelector('#password');
const textError3=document.querySelector('.text-errorp');
text3.addEventListener('input',function()
{
     let nameRegex3=RegExp('^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8}$');
     if(nameRegex3.test(text3.value))
     {  
         textError3.textContent=" ";
     }
     else
     {
         textError3.textContent="incorrect psw";

     }


});


const salary=document.querySelector('#salary');
const output=document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function()
{
     output.textContent=salary.value;

});