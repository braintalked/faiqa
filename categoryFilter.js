////////////////////////////////////////////////////////
//  Developed by: Ali Khalid Alyami                   //
//  Date: 10-Oct-2020                                 //
//  Email: braintalked@gmail.com                      //
//  Twitter:@ali_idev                                 //
////////////////////////////////////////////////////////

////////////////////////// START EVENT LISTENER /////////////////////////////////////
  document.addEventListener("click", function(){
    var categorySelectionsArray = [];
////////////////////////// END EVENT LISTENER /////////////////////////////////////

//////////////////// START Disabling and Enabling Category Checkboxes ////////////////
  function disableAllCategoryCheckboxes(){
    document.querySelector("#electrical").checked = false;
    document.querySelector("#mechanical").checked = false;
    document.querySelector("#finishing").checked = false;

    document.querySelector("#electrical").disabled = true;
    document.querySelector("#mechanical").disabled = true;
    document.querySelector("#finishing").disabled = true;
  }
  function enableAllCategoryCheckboxes(){
    document.querySelector("#electrical").disabled = false;
    document.querySelector("#mechanical").disabled = false;
    document.querySelector("#finishing").disabled = false;
  }
//////////////////// END Disabling and Enabling Category Checkboxes ////////////////

//////////////////////////// START CATEGORIES IF STATEMENTS/////////////////////////
if (document.querySelector("#allCategories").checked
||(!document.querySelector("#electrical").checked
&& !document.querySelector("#mechanical").checked
&& !document.querySelector("#finishing").checked)){

if (document.querySelector("#allCategories").checked){
      disableAllCategoryCheckboxes();
    }
    if (!document.querySelector("#allCategories").checked){
      enableAllCategoryCheckboxes();
    }

    document.querySelectorAll(".category").forEach(pushCategoryFunction);
    function pushCategoryFunction(item){
      categorySelectionsArray.push(item);
    }
  }
else{
    if(!document.querySelector("#allCategories").checked){
      categorySelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("category")){
            categorySelectionsArray.splice(categorySelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#electrical").checked){
        document.querySelectorAll(".electricalCategory").forEach(pushCategoryFunction);
        function pushCategoryFunction(item){
          categorySelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#electrical").checked){
      categorySelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("electricalCategory")){
            categorySelectionsArray.splice(categorySelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#mechanical").checked){
        document.querySelectorAll(".mechanicalCategory").forEach(pushCategoryFunction);
        function pushCategoryFunction(item){
          categorySelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#mechanical").checked){
      categorySelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("mechanicalCategory")){
            categorySelectionsArray.splice(categorySelectionsArray.indexOf(item),1);
        }
      }
    }
    if (document.querySelector("#finishing").checked){
        document.querySelectorAll(".finishingCategory").forEach(pushCategoryFunction);
        function pushCategoryFunction(item){
          categorySelectionsArray.push(item);
        }
      }
    if(!document.querySelector("#finishing").checked){
      categorySelectionsArray.forEach(myFunction);
      function myFunction(item){
        if(item.classList.contains("finishingCategory")){
            categorySelectionsArray.splice(categorySelectionsArray.indexOf(item),1);
        }
      }
    }
  }
//////////////////////////// END CATEGORIES IF STATEMENTS/////////////////////////

///////////////// START UPDATING FinalSelectionsArray ///////////////////////
  // categorySelectionsArray.forEach(pushCategory);
  // function pushLocation(locationItem){
  //   if(brandItem == materialItem && brandItem == locationItem){
  //     finalSelectionsArray.push(brandItem);
  //   }
  console.log("Final Selections "+categorySelectionsArray[0].classList);
  ///////////////// END UPDATING FinalSelectionsArray ///////////////////////

///////////////////// START SHOWING FINAL SELECTIONS ////////////////////////////
  document.querySelectorAll(".category").forEach(hideElement);
  function hideElement(elem){
      elem.classList.add("displayNone");
    }
  categorySelectionsArray.forEach(showElement);
  function showElement(elem){
      elem.classList.remove("displayNone");
    }
///////////////////// END SHOWING FINAL SELECTIONS ////////////////////////////

});
////////////////////////////// END OF CODE ///////////////////////////////////
