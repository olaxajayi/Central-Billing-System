// window.addEventListener("scroll", function() {
//   let sticky = document.querySelector('.sticky');
//   let smallLogo = document.querySelector('.smalllogo');
//   let searchLogo = document.querySelector('.searchlogo');

//   if (window.scrollY >= 150) {
//     sticky.style.position = "sticky";
//     sticky.style.top = "0";
//     smallLogo.style.display = "block";
//     searchLogo.style.display = "block";
//     aboutusDropdown.style.marginLeft = "-450px";
//     aboutTriangle.style.marginLeft = "450px";

//   }

//   else{
//     smallLogo.style.display = "none";
//     searchLogo.style.display = "none";
//   aboutusDropdown.style.marginLeft = "-250px";
//   aboutTriangle.style.marginLeft = "250px";
//   }
// });




var hamburger = document.querySelector('.hamburger');
var closeButton = document.querySelector('.close-button');

var navigation = document.querySelector('.navigation');
var boardBackground = document.querySelector('.board-background');

var expandMoreInvoice = document.querySelector('.expand-more-invoice');
var expandLessInvoice = document.querySelector('.expand-less-invoice');
var invoiceOptions = document.getElementById('#invoice-sub-options');

var generateModule= document.querySelector('.generate-module');
var paymentModule = document.querySelector('.payment-module');
var generateModuleBar = document.querySelector('.generate-module-bar');
var paymentModuleBar = document.querySelector('.payment-module-bar');


var searchInput = document.querySelector('.search-input');
var defaultMessage = document.querySelector('.default-message');
var errorMessage = document.querySelector('.error-message');
var searchInvoice = document.querySelector('.search-invoice');

var expandMoreTenant = document.querySelector('.expand-more-tenant');
var expandLessTenant = document.querySelector('.expand-less-tenant');
var tenantOptions = document.getElementById('#tenant-sub-options');


hamburger.addEventListener('click', function(){
  navigation.style.display = "block";
  boardBackground.style.width = 'auto';
  boardBackground.style.borderRadius = '17px 0px 0px 17px';
  hamburger.style.display = "none";
});

closeButton.addEventListener('click', function(){
  navigation.style.display = "none";
  boardBackground.style.width = '100%';
  boardBackground.style.borderRadius = '0px';
  hamburger.style.display = "block";
});



expandMoreInvoice.addEventListener('click', function(){
  expandMoreInvoice.style.display = "none";
  expandLessInvoice.style.display = "block";
  invoiceOptions.style.display = 'block';
});

expandLessInvoice.addEventListener('click', function(){
  expandLessInvoice.style.display = "none";
  expandMoreInvoice.style.display = "block";
  invoiceOptions.style.display = 'none';
});

expandMoreTenant.addEventListener('click', function(){
  expandMoreTenant.style.display = "none";
  expandLessTenant.style.display = "block";
  tenantOptions.style.display = 'block';
});

expandLessTenant.addEventListener('click', function(){
  expandLessTenant.style.display = "none";
  expandMoreTenant.style.display = "block";
  tenantOptions.style.display = 'none';
});

// tenantSettings.addEventListener('click', function(){
//   if (tenantOptions.style.display === 'none') {
//     tenantOptions.style.display = 'block';
//   }

//   else{
//     tenantOptions.style.display = 'none';
//   }
// });


searchInput.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
      if(searchInput.value !== "100027488596") {
        errorMessage.style.display = "flex";
        defaultMessage.style.display = "none";
      }

      else{
        console.log('general invoice');
      };
    }
});


searchInvoice.addEventListener('click', function(){
  if(searchInput.value !== "100027488596") {
    errorMessage.style.display = "flex";
    defaultMessage.style.display = "none";
  }

  else{
    console.log('general invoice');
  };
});


paymentModule.addEventListener('click', function(){
  generateModuleBar.style.visibility = "hidden";
  paymentModuleBar.style.visibility = "visible";
  defaultMessage.style.display = "flex";
  errorMessage.style.display = "none";
});

generateModule.addEventListener('click', function(){
  paymentModuleBar.style.visibility = "hidden";
  generateModuleBar.style.visibility = "visible";
  defaultMessage.style.display = "flex";
  errorMessage.style.display = "none";
});

// function tenant(){
//   if (tenantOptions.style.display === 'none') {
//     tenantOptions.style.display = 'block';
//   }
//   else{
//     tenantOptions.style.display = 'none';
//   }

//   removeEventListener('click', tenant);
// };

// tenantSettings.addEventListener('click', tenant);