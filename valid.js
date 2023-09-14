 var result = document.getElementById("regulNum").value;



//  function letSee() {
//     // var regexNum = /^-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?$/; 
//     var regeNum = /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/;
// //     return regeNum.test();


// //     // return regeNum.test(number);
//      if( regeNum.test(result)){
//       return( document.querySelector(".output").innerHTML= "report1")
//     }
//     else{
//      return( document.querySelector(".output").innerHTML= "report2")
//     }
//   }

// //   // alert(validNumber("+-20"))

// //  function letSee() {
  
// // //  validNumber();
// //  } 


function letSee(){
  let  result = document.getElementById("regulNum").value;
  let regeNum = /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/;
  if( regeNum.test(result)){
     let input = `${result} found to be True`;
     
     document.querySelector(".output").innerHTML = input;
}
else{
  document.querySelector(".output").innerHTML = "False";
}

}