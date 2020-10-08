////////////////////////////////////////////////////////
//  Developed by: Ali Khalid Alyami                   //
//  Date: 08-Oct-2020                                 //
//  Email: braintalked@gmail.com                      //
//  Twitter:@ali_idev                                 //
////////////////////////////////////////////////////////

////////////////////////// START EVENT LISTENER /////////////////////////////////////
  document.addEventListener("click", function(){
    var brandSelectionsArray = [];
    var materialSelectionsArray = [];
    var finalSelectionsArray = [];
////////////////////////// END EVENT LISTENER /////////////////////////////////////

//////////////////// START Disabling and Enabling Brands Checkboxes ////////////////
  function disableAllBrandCheckboxes(){
    document.querySelector("#geBrandsCheckbox").checked = false;
    document.querySelector("#philipsBrandsCheckbox").checked = false;
    document.querySelector("#geBrandsCheckbox").disabled = true;
    document.querySelector("#philipsBrandsCheckbox").disabled = true;
  }
  function enableAllBrandCheckboxes(){
    document.querySelector("#geBrandsCheckbox").disabled = false;
    document.querySelector("#philipsBrandsCheckbox").disabled = false;
  }
//////////////////// END Disabling and Enabling Brands Checkboxes //////////////////

/////////////////// START Disabling and Enabling Materials Checkboxes /////////////
function disableAllMaterialCheckboxes(){
  document.querySelector("#lampsMaterialsCheckbox").checked = false;
  document.querySelector("#switchesMaterialsCheckbox").checked = false;
  document.querySelector("#lampsMaterialsCheckbox").disabled = true;
  document.querySelector("#switchesMaterialsCheckbox").disabled = true;
}
function enableAllMaterialCheckboxes(){
  document.querySelector("#lampsMaterialsCheckbox").disabled = false;
  document.querySelector("#switchesMaterialsCheckbox").disabled = false;
}
/////////////////// END Disabling and Enabling Materials Checkboxes ////////////////

//////////////////////////// START MATERIALS IF STATEMENTS/////////////////////////
if (document.querySelector("#allElectricalMaterialsCheckbox").checked
|| (!document.querySelector("#lampsMaterialsCheckbox").checked
&& !document.querySelector("#switchesMaterialsCheckbox").checked)){

if (document.querySelector("#allElectricalMaterialsCheckbox").checked){
      disableAllMaterialCheckboxes();
    }
    if (!document.querySelector("#allElectricalMaterialsCheckbox").checked){
      enableAllMaterialCheckboxes();
    }

    document.querySelectorAll(".material").forEach(pushMaterialFuntion);
    function pushMaterialFuntion(item){
      materialSelectionsArray.push(item);
    }
  }

else{
    if(!document.querySelector("#allElectricalMaterialsCheckbox").checked){
      materialSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("material")){
            materialSelectionsArray.splice(materialSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#lampsMaterialsCheckbox").checked){
        document.querySelectorAll(".lamp").forEach(pushMaterialFuntion);
        function pushMaterialFuntion(item){
          materialSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#lampsMaterialsCheckbox").checked){
      materialSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("lamp")){
            materialSelectionsArray.splice(materialSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#switchesMaterialsCheckbox").checked){
        document.querySelectorAll(".switch").forEach(pushMaterialFuntion);
        function pushMaterialFuntion(item){
          materialSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#switchesMaterialsCheckbox").checked){
      materialSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("switch")){
            materialSelectionsArray.splice(materialSelectionsArray.indexOf(item),1);
        }
      }
    }
}
//////////////////////////// END MATERIALS IF STATEMENTS/////////////////////////

//////////////////////////// START BRANDS IF STATEMENTS/////////////////////////
if (document.querySelector("#allBrandsCheckbox").checked
|| (!document.querySelector("#geBrandsCheckbox").checked
&& !document.querySelector("#philipsBrandsCheckbox").checked)){

  if (document.querySelector("#allBrandsCheckbox").checked){
      disableAllBrandCheckboxes();
    }
  if (!document.querySelector("#allBrandsCheckbox").checked){
      enableAllBrandCheckboxes();
    }

  document.querySelectorAll(".material").forEach(pushBrandFuntion);
  function pushBrandFuntion(item){
    brandSelectionsArray.push(item);
    }
}
else{
    if(!document.querySelector("#allBrandsCheckbox").checked){
      brandSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("material")){
            brandSelectionsArray.splice(brandSelectionsArray.indexOf(item),1);
        }
      }
    }
    enableAllBrandCheckboxes();
      if (document.querySelector("#geBrandsCheckbox").checked){
          document.querySelectorAll(".ge").forEach(pushBrandFuntion);
          function pushBrandFuntion(item){
            brandSelectionsArray.push(item);
          }
        }
      if(!document.querySelector("#geBrandsCheckbox").checked){
        brandSelectionsArray.forEach(myFunction);
        function myFunction(item){
          if(item.classList.contains("ge")){
              brandSelectionsArray.splice(brandSelectionsArray.indexOf(item),1);
          }
        }
      }
      if (document.querySelector("#philipsBrandsCheckbox").checked){
          document.querySelectorAll(".philips").forEach(pushBrandFuntion);
          function pushBrandFuntion(item){
            brandSelectionsArray.push(item);
          }
      }
      if(!document.querySelector("#philipsBrandsCheckbox").checked){
        brandSelectionsArray.forEach(myFunction);
        function myFunction(item){
          if(item.classList.contains("philips")){
              brandSelectionsArray.splice(brandSelectionsArray.indexOf(item),1);
          }
        }
      }
    }
//////////////////////////// END BRANDS IF STATEMENTS/////////////////////////

///////////////// START UPDATING FinalSelectionsArray ///////////////////////
  materialSelectionsArray.forEach(pushMaterial);
  function pushMaterial(materialItem){
    brandSelectionsArray.forEach(pushBrand);
    function pushBrand(brandItem){
        if(brandItem == materialItem){
          finalSelectionsArray.push(brandItem);
        }
      }
    }
  console.log("materials "+materialSelectionsArray);
  console.log("brands "+brandSelectionsArray);
  console.log("final "+finalSelectionsArray);
  ///////////////// END UPDATING FinalSelectionsArray ///////////////////////

///////////////////// START SHOWING FINAL SELECTIONS ////////////////////////////
  document.querySelectorAll(".material").forEach(hideElement);
  function hideElement(elem){
      elem.classList.add("hide");
    }
  finalSelectionsArray.forEach(showElement);
  function showElement(elem){
      elem.classList.remove("hide");
    }
///////////////////// END SHOWING FINAL SELECTIONS ////////////////////////////

});
////////////////////////////// END OF CODE ///////////////////////////////////
