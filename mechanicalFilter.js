////////////////////////////////////////////////////////
//  Developed by: Ali Khalid Alyami                   //
//  Date: 08-Oct-2020                                 //
//  Email: braintalked@gmail.com                      //
//  Twitter:@ali_idev                                 //
////////////////////////////////////////////////////////

////////////////////////// START EVENT LISTENER /////////////////////////////////////
  document.addEventListener("click", function(){
    var locationSelectionsArray2 = [];
    var mechanicalBrandSelectionsArray = [];
    var mechanicalMaterialSelectionsArray = [];
    var finalMechanicalSelectionsArray = [];
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
  function disableAllMechanicalBrandCheckboxes(){
    document.querySelector("#duPontBrandsCheckbox").checked = false;
    document.querySelector("#colstonBrandsCheckbox").checked = false;
    document.querySelector("#kohlerBrandsCheckbox").checked = false;

    document.querySelector("#duPontBrandsCheckbox").disabled = true;
    document.querySelector("#colstonBrandsCheckbox").disabled = true;
    document.querySelector("#kohlerBrandsCheckbox").disabled = true;
  }
  function enableAllMechanicalBrandCheckboxes(){
    document.querySelector("#duPontBrandsCheckbox").disabled = false;
    document.querySelector("#colstonBrandsCheckbox").disabled = false;
    document.querySelector("#kohlerBrandsCheckbox").disabled = false;
  }
//////////////////// END Disabling and Enabling Brands Checkboxes //////////////////

/////////////////// START Disabling and Enabling Materials Checkboxes /////////////
function disableAllMechanicalMaterialCheckboxes(){
  document.querySelector("#pipesMaterialsCheckbox").checked = false;
  document.querySelector("#plumbingMaterialsCheckbox").checked = false;
  document.querySelector("#fittingsMaterialsCheckbox").checked = false;

  document.querySelector("#pipesMaterialsCheckbox").disabled = true;
  document.querySelector("#plumbingMaterialsCheckbox").disabled = true;
  document.querySelector("#fittingsMaterialsCheckbox").disabled = true;
}
function enableAllMechanicalMaterialCheckboxes(){
  document.querySelector("#pipesMaterialsCheckbox").disabled = false;
  document.querySelector("#plumbingMaterialsCheckbox").disabled = false;
  document.querySelector("#fittingsMaterialsCheckbox").disabled = false;
}
/////////////////// END Disabling and Enabling Materials Checkboxes ////////////

//////////////////////////// START LOCATIONS IF STATEMENTS//////////////////////
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

    document.querySelectorAll(".mechanicalMaterial").forEach(pushLocationFuntion);
    function pushLocationFuntion(item){
      locationSelectionsArray2.push(item);
    }
  }

else{
    if(!document.querySelector("#allLocations").checked){
      locationSelectionsArray2.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("mechanicalMaterial")){
            locationSelectionsArray2.splice(locationSelectionsArray2.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#east").checked){
        document.querySelectorAll(".east").forEach(pushLocationFuntion);
        function pushLocationFuntion(item){
          locationSelectionsArray2.push(item);
        }
      }
    if(!document.querySelector("#east").checked){
      locationSelectionsArray2.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("east")){
            locationSelectionsArray2.splice(locationSelectionsArray2.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#north").checked){
        document.querySelectorAll(".north").forEach(pushLocationFuntion);
        function pushLocationFuntion(item){
          locationSelectionsArray2.push(item);
        }
      }
    if(!document.querySelector("#north").checked){
      locationSelectionsArray2.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("north")){
            locationSelectionsArray2.splice(locationSelectionsArray2.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#west").checked){
        document.querySelectorAll(".west").forEach(pushLocationFuntion);
        function pushLocationFuntion(item){
          locationSelectionsArray2.push(item);
        }
      }
    if(!document.querySelector("#west").checked){
      locationSelectionsArray2.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("west")){
            locationSelectionsArray2.splice(locationSelectionsArray2.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#south").checked){
        document.querySelectorAll(".south").forEach(pushLocationFuntion);
        function pushLocationFuntion(item){
          locationSelectionsArray2.push(item);
        }
      }
    if(!document.querySelector("#south").checked){
      locationSelectionsArray2.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("south")){
            locationSelectionsArray2.splice(locationSelectionsArray2.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#middle").checked){
        document.querySelectorAll(".middle").forEach(pushLocationFuntion);
        function pushLocationFuntion(item){
          locationSelectionsArray2.push(item);
        }
      }
    if(!document.querySelector("#middle").checked){
      locationSelectionsArray2.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("middle")){
            locationSelectionsArray2.splice(locationSelectionsArray2.indexOf(item),1);
        }
      }
    }
  }
//////////////////////////// END LOCATIONS IF STATEMENTS/////////////////////////

//////////////////////////// START MATERIALS IF STATEMENTS/////////////////////////
if (document.querySelector("#allMechanicalMaterialsCheckbox").checked
|| (!document.querySelector("#pipesMaterialsCheckbox").checked
&& !document.querySelector("#plumbingMaterialsCheckbox").checked
&& !document.querySelector("#fittingsMaterialsCheckbox").checked)){

if (document.querySelector("#allMechanicalMaterialsCheckbox").checked){
      disableAllMechanicalMaterialCheckboxes();
    }
    if (!document.querySelector("#allMechanicalMaterialsCheckbox").checked){
      enableAllMechanicalMaterialCheckboxes();
    }

    document.querySelectorAll(".mechanicalMaterial").forEach(pushMaterialFunction);
    function pushMaterialFunction(item){
      mechanicalMaterialSelectionsArray.push(item);
    }
  }

else{
    if(!document.querySelector("#allMechanicalMaterialsCheckbox").checked){
      mechanicalMaterialSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("mechanicalMaterial")){
            mechanicalMaterialSelectionsArray.splice(mechanicalMaterialSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#pipesMaterialsCheckbox").checked){
        document.querySelectorAll(".pipe").forEach(pushMaterialFunction);
        function pushMaterialFunction(item){
          mechanicalMaterialSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#pipesMaterialsCheckbox").checked){
      mechanicalMaterialSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("pipe")){
            mechanicalMaterialSelectionsArray.splice(mechanicalMaterialSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#plumbingMaterialsCheckbox").checked){
        document.querySelectorAll(".plumbing").forEach(pushMaterialFuntion);
        function pushMaterialFuntion(item){
          mechanicalMaterialSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#plumbingMaterialsCheckbox").checked){
      mechanicalMaterialSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("plumbing")){
            mechanicalMaterialSelectionsArray.splice(mechanicalMaterialSelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#fittingsMaterialsCheckbox").checked){
        document.querySelectorAll(".fitting").forEach(pushMaterialFunction);
        function pushMaterialFunction(item){
          mechanicalMaterialSelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#fittingsMaterialsCheckbox").checked){
      mechanicalMaterialSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("fitting")){
            mechanicalMaterialSelectionsArray.splice(mechanicalMaterialSelectionsArray.indexOf(item),1);
        }
      }
    }
  }
//////////////////////////// END MATERIALS IF STATEMENTS/////////////////////////

//////////////////////////// START BRANDS IF STATEMENTS/////////////////////////
if (document.querySelector("#allMechanicalBrandsCheckbox").checked
|| (!document.querySelector("#duPontBrandsCheckbox").checked
&& !document.querySelector("#colstonBrandsCheckbox").checked
&& !document.querySelector("#kohlerBrandsCheckbox").checked)){

  if (document.querySelector("#allMechanicalBrandsCheckbox").checked){
      disableAllMechanicalBrandCheckboxes();
    }
  if (!document.querySelector("#allMechanicalBrandsCheckbox").checked){
      enableAllMechanicalBrandCheckboxes();
    }

  document.querySelectorAll(".mechanicalMaterial").forEach(pushMechanicalBrandFunction);
  function pushMechanicalBrandFunction(item){
    mechanicalBrandSelectionsArray.push(item);
    }
}
else{
    if(!document.querySelector("#allMechanicalBrandsCheckbox").checked){
      mechanicalBrandSelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("mechanicalMaterial")){
            mechanicalBrandSelectionsArray.splice(mechanicalBrandSelectionsArray.indexOf(item),1);
        }
      }
    }
    enableAllMechanicalBrandCheckboxes();
      if (document.querySelector("#duPontBrandsCheckbox").checked){
          document.querySelectorAll(".dupont").forEach(pushBrandFuntion);
          function pushBrandFuntion(item){
            mechanicalBrandSelectionsArray.push(item);
          }
        }
      if(!document.querySelector("#duPontBrandsCheckbox").checked){
        mechanicalBrandSelectionsArray.forEach(myFunction);
        function myFunction(item){
          if(item.classList.contains("dupont")){
              mechanicalBrandSelectionsArray.splice(mechanicalBrandSelectionsArray.indexOf(item),1);
          }
        }
      }
      if (document.querySelector("#colstonBrandsCheckbox").checked){
          document.querySelectorAll(".colston").forEach(pushBrandFunction);
          function pushBrandFunction(item){
            mechanicalBrandSelectionsArray.push(item);
          }
      }
      if(!document.querySelector("#colstonBrandsCheckbox").checked){
        mechanicalBrandSelectionsArray.forEach(myFunction);
        function myFunction(item){
          if(item.classList.contains("colston")){
              mechanicalBrandSelectionsArray.splice(mechanicalBrandSelectionsArray.indexOf(item),1);
          }
        }
      }
      if (document.querySelector("#kohlerBrandsCheckbox").checked){
          document.querySelectorAll(".kohler").forEach(pushBrandFuntion);
          function pushBrandFuntion(item){
            mechanicalBrandSelectionsArray.push(item);
          }
      }
      if(!document.querySelector("#kohlerBrandsCheckbox").checked){
        mechanicalBrandSelectionsArray.forEach(myFunction);
        function myFunction(item){
          if(item.classList.contains("kohler")){
              mechanicalBrandSelectionsArray.splice(mechanicalBrandSelectionsArray.indexOf(item),1);
          }
        }
      }
    }
//////////////////////////// END BRANDS IF STATEMENTS/////////////////////////

///////////////// START UPDATING finalMechanicalSelectionsArray ///////////////////////
  mechanicalMaterialSelectionsArray.forEach(pushMechanicalMaterial);
  function pushMechanicalMaterial(mechanicalMaterialItem){
    mechanicalBrandSelectionsArray.forEach(pushMechanicalBrand);
    function pushMechanicalBrand(mechanicalBrandItem){
      locationSelectionsArray2.forEach(pushLocation);
      function pushLocation(locationItem){
        if(mechanicalBrandItem == mechanicalMaterialItem && mechanicalBrandItem == locationItem){
          finalMechanicalSelectionsArray.push(mechanicalBrandItem);
        }
      }
    }
  }
  console.log("Locations "+locationSelectionsArray2);
  console.log("Materials "+mechanicalMaterialSelectionsArray);
  console.log("Brands "+mechanicalBrandSelectionsArray);
  console.log("Final Selections "+finalMechanicalSelectionsArray);
  ///////////////// END UPDATING finalMechanicalSelectionsArray ///////////////////////

///////////////////// START SHOWING FINAL SELECTIONS ////////////////////////////
  document.querySelectorAll(".mechanicalMaterial").forEach(hideElement);
  function hideElement(elem){
      elem.classList.add("hide");
    }
  finalMechanicalSelectionsArray.forEach(showElement);
  function showElement(elem){
      elem.classList.remove("hide");
    }
///////////////////// END SHOWING FINAL SELECTIONS ////////////////////////////

});
////////////////////////////// END OF CODE ///////////////////////////////////
