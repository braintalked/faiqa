////////////////////////////////////////////////////////
//  Developed by: Ali Khalid Alyami                   //
//  Date: 09-Oct-2020                                 //
//  Email: braintalked@gmail.com                      //
//  Twitter:@ali_idev                                 //
////////////////////////////////////////////////////////

////////////////////////// START EVENT LISTENER /////////////////////////////////////
  document.addEventListener("click", function(){
    var categorySelectionsArray = [];
////////////////////////// END EVENT LISTENER /////////////////////////////////////

//////////////////// START Disabling and Enabling Locations Checkboxes ////////////////
  function disableAllLocationCheckboxes(){
    document.querySelector("#east").checked = false;
    document.querySelector("#north").checked = false;
    document.querySelector("#west").checked = false;
    document.querySelector("#south").checked = false;
    document.querySelector("#middle").checked = false;

    document.querySelector("#east").disabled = true;
    document.querySelector("#north").disabled = true;
    document.querySelector("#west").disabled = true;
    document.querySelector("#south").disabled = true;
    document.querySelector("#middle").disabled = true;
  }
  function enableAllLocationCheckboxes(){
  document.querySelector("#east").disabled = false;
  document.querySelector("#north").disabled = false;
  document.querySelector("#west").disabled = false;
  document.querySelector("#south").disabled = false;
  document.querySelector("#middle").disabled = false;
  }
//////////////////// END Disabling and Enabling Locations Checkboxes ////////////////

//////////////////// START Disabling and Enabling Brands Checkboxes ////////////////
  function disableAllBrandCheckboxes(){
    document.querySelector("#geBrandsCheckbox").checked = false;
    document.querySelector("#philipsBrandsCheckbox").checked = false;
    document.querySelector("#siemensBrandsCheckbox").checked = false;
    document.querySelector("#schneiderBrandsCheckbox").checked = false;
    document.querySelector("#saudiCablesBrandsCheckbox").checked = false;

    document.querySelector("#geBrandsCheckbox").disabled = true;
    document.querySelector("#philipsBrandsCheckbox").disabled = true;
    document.querySelector("#siemensBrandsCheckbox").disabled = true;
    document.querySelector("#schneiderBrandsCheckbox").disabled = true;
    document.querySelector("#saudiCablesBrandsCheckbox").disabled = true;
  }
  function enableAllBrandCheckboxes(){
    document.querySelector("#geBrandsCheckbox").disabled = false;
    document.querySelector("#philipsBrandsCheckbox").disabled = false;
    document.querySelector("#siemensBrandsCheckbox").disabled = false;
    document.querySelector("#schneiderBrandsCheckbox").disabled = false;
    document.querySelector("#saudiCablesBrandsCheckbox").disabled = false;
  }
//////////////////// END Disabling and Enabling Brands Checkboxes //////////////////

/////////////////// START Disabling and Enabling Materials Checkboxes /////////////
function disableAllMaterialCheckboxes(){
  document.querySelector("#lampsMaterialsCheckbox").checked = false;
  document.querySelector("#switchesMaterialsCheckbox").checked = false;
  document.querySelector("#breakersMaterialsCheckbox").checked = false;
  document.querySelector("#powerPanelsMaterialsCheckbox").checked = false;
  document.querySelector("#powerCablesMaterialsCheckbox").checked = false;

  document.querySelector("#lampsMaterialsCheckbox").disabled = true;
  document.querySelector("#switchesMaterialsCheckbox").disabled = true;
  document.querySelector("#breakersMaterialsCheckbox").disabled = true;
  document.querySelector("#powerPanelsMaterialsCheckbox").disabled = true;
  document.querySelector("#powerCablesMaterialsCheckbox").disabled = true;
}
function enableAllMaterialCheckboxes(){
  document.querySelector("#lampsMaterialsCheckbox").disabled = false;
  document.querySelector("#switchesMaterialsCheckbox").disabled = false;
  document.querySelector("#breakersMaterialsCheckbox").disabled = false;
  document.querySelector("#powerPanelsMaterialsCheckbox").disabled = false;
  document.querySelector("#powerCablesMaterialsCheckbox").disabled = false;
}
/////////////////// END Disabling and Enabling Materials Checkboxes ////////////////

//////////////////////////// START LOCATIONS IF STATEMENTS/////////////////////////
if (document.querySelector("#allLocations").checked
||(!document.querySelector("#east").checked
&& !document.querySelector("#north").checked
&& !document.querySelector("#west").checked
&& !document.querySelector("#south").checked
&& !document.querySelector("#middle").checked)){

if (document.querySelector("#allLocations").checked){
      disableAllLocationCheckboxes();
    }
    if (!document.querySelector("#allLocations").checked){
      enableAllLocationCheckboxes();
    }

    document.querySelectorAll(".material").forEach(pushLocationFuntion);
    function pushLocationFuntion(item){
      locationSelectionsArray.push(item);
    }
  }

else{
    if(!document.querySelector("#allLocations").checked){
      locationSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("material")){
            locationSelectionsArray.splice(locationSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#east").checked){
        document.querySelectorAll(".east").forEach(pushLocationFuntion);
        function pushLocationFuntion(item){
          locationSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#east").checked){
      locationSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("east")){
            locationSelectionsArray.splice(locationSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#north").checked){
        document.querySelectorAll(".north").forEach(pushLocationFuntion);
        function pushLocationFuntion(item){
          locationSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#north").checked){
      locationSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("north")){
            locationSelectionsArray.splice(locationSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#west").checked){
        document.querySelectorAll(".west").forEach(pushLocationFuntion);
        function pushLocationFuntion(item){
          locationSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#west").checked){
      locationSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("west")){
            locationSelectionsArray.splice(locationSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#south").checked){
        document.querySelectorAll(".south").forEach(pushLocationFuntion);
        function pushLocationFuntion(item){
          locationSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#south").checked){
      locationSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("south")){
            locationSelectionsArray.splice(locationSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#middle").checked){
        document.querySelectorAll(".middle").forEach(pushLocationFuntion);
        function pushLocationFuntion(item){
          locationSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#middle").checked){
      locationSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("middle")){
            locationSelectionsArray.splice(locationSelectionsArray.indexOf(item),1);
        }
      }
    }
  }
//////////////////////////// END LOCATIONS IF STATEMENTS/////////////////////////

//////////////////////////// START MATERIALS IF STATEMENTS/////////////////////////
if (document.querySelector("#allElectricalMaterialsCheckbox").checked
|| (!document.querySelector("#lampsMaterialsCheckbox").checked
&& !document.querySelector("#switchesMaterialsCheckbox").checked
&& !document.querySelector("#breakersMaterialsCheckbox").checked
&& !document.querySelector("#powerPanelsMaterialsCheckbox").checked
&& !document.querySelector("#powerCablesMaterialsCheckbox").checked)){

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
    if (document.querySelector("#breakersMaterialsCheckbox").checked){
        document.querySelectorAll(".breaker").forEach(pushMaterialFuntion);
        function pushMaterialFuntion(item){
          materialSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#breakersMaterialsCheckbox").checked){
      materialSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("breaker")){
            materialSelectionsArray.splice(materialSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#powerPanelsMaterialsCheckbox").checked){
        document.querySelectorAll(".powerPanel").forEach(pushMaterialFuntion);
        function pushMaterialFuntion(item){
          materialSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#powerPanelsMaterialsCheckbox").checked){
      materialSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("powerPanel")){
            materialSelectionsArray.splice(materialSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#powerCablesMaterialsCheckbox").checked){
        document.querySelectorAll(".powerCable").forEach(pushMaterialFuntion);
        function pushMaterialFuntion(item){
          materialSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#powerCablesMaterialsCheckbox").checked){
      materialSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("powerCable")){
            materialSelectionsArray.splice(materialSelectionsArray.indexOf(item),1);
        }
      }
    }

}
//////////////////////////// END MATERIALS IF STATEMENTS/////////////////////////

//////////////////////////// START BRANDS IF STATEMENTS/////////////////////////
if (document.querySelector("#allBrandsCheckbox").checked
|| (!document.querySelector("#geBrandsCheckbox").checked
&& !document.querySelector("#philipsBrandsCheckbox").checked
&& !document.querySelector("#siemensBrandsCheckbox").checked
&& !document.querySelector("#schneiderBrandsCheckbox").checked
&& !document.querySelector("#saudiCablesBrandsCheckbox").checked)){

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
      if (document.querySelector("#siemensBrandsCheckbox").checked){
          document.querySelectorAll(".siemens").forEach(pushBrandFuntion);
          function pushBrandFuntion(item){
            brandSelectionsArray.push(item);
          }
      }
      if(!document.querySelector("#siemensBrandsCheckbox").checked){
        brandSelectionsArray.forEach(myFunction);
        function myFunction(item){
          if(item.classList.contains("siemens")){
              brandSelectionsArray.splice(brandSelectionsArray.indexOf(item),1);
          }
        }
      }
      if (document.querySelector("#schneiderBrandsCheckbox").checked){
          document.querySelectorAll(".schneider").forEach(pushBrandFuntion);
          function pushBrandFuntion(item){
            brandSelectionsArray.push(item);
          }
      }
      if(!document.querySelector("#schneiderBrandsCheckbox").checked){
        brandSelectionsArray.forEach(myFunction);
        function myFunction(item){
          if(item.classList.contains("schneider")){
              brandSelectionsArray.splice(brandSelectionsArray.indexOf(item),1);
          }
        }
      }
      if (document.querySelector("#saudiCablesBrandsCheckbox").checked){
          document.querySelectorAll(".saudiCables").forEach(pushBrandFuntion);
          function pushBrandFuntion(item){
            brandSelectionsArray.push(item);
          }
      }
      if(!document.querySelector("#saudiCablesBrandsCheckbox").checked){
        brandSelectionsArray.forEach(myFunction);
        function myFunction(item){
          if(item.classList.contains("saudiCables")){
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
      locationSelectionsArray.forEach(pushLocation);
      function pushLocation(locationItem){
        if(brandItem == materialItem && brandItem == locationItem){
          finalSelectionsArray.push(brandItem);
        }
      }
    }
  }
  console.log("Locations "+locationSelectionsArray);
  console.log("Materials "+materialSelectionsArray);
  console.log("Brands "+brandSelectionsArray);
  console.log("Final Selections "+finalSelectionsArray);
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
