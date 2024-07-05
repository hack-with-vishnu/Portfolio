/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});



  //Form validation
  var nameError=document.getElementById('name-error');
  var emailError=document.getElementById('email-error');
  var subjectError=document.getElementById('subject-error');
  var messageError=document.getElementById('message-error');
  var submitError=document.getElementById('submit-error');
 
  function validateName(){
     var name = document.getElementById('name').value;
     
     if(name.length == 0){
       nameError.innerHTML='Enter valid Name';
       return false;
     }
     
     if(!name.match(/^[A-Za-z]+ [A-Za-z]+$/)){
       nameError.innerHTML = 'Enter Full Name';
       return false;
     }
     nameError.innerHTML = ''
     return true;
  }
 
 
  function validateEmail(){
   var email=document.getElementById('mail').value;
 
     if(email.length==0){
       emailError.innerHTML='Enter Valid Email';
       return false;
     }
 
     if(!email.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)){
       emailError.innerHTML='Email Invalid';
       return false;
     }
     emailError.innerHTML='';
     return true;
  }
 
 
 
   
 
   function validateMessage(){
     var message=document.getElementById('comment').value;
     var required=15;
     var left=required-message.length;
 
     if(left>0){
       messageError.innerHTML=left+ ' More Characters Required';
       return false;
     }
     messageError.innerHTML='';
     return true;
   }
 
   function validateForm(){

    if(!validateName() || !validateEmail() || !validateMessage()){
        submitError.style.display=`block`;
        submitError.innerHTML=`please fix error `;
        setTimeout(function(){submitError.style.display = `none`;}, 3000);
        return false;
   
 
   }
}