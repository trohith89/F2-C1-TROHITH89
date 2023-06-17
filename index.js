/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let arrMap = arr.map((value) => {
      if(value.profession === "developer"){
        console.log(value);
      }
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    let arrForEach = arr.forEach((value) => {
      if(value.profession === "developer"){
        console.log(value);
      }
    });
  }
  
  function addData() {
    //Write your code here, just console.log

    // {id:4,name:"susan",age:"20",profession:"intern"}

    let obj4 = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(obj4);

    console.log(arr);

    // let arrAddData = arr.map((value) => { 
    //   if(value.id === 4){
    //     console.log(value);
    //   }
    // });

  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let arrRemove = arr.filter((value) => {
      if(value.profession !== "admin"){
        console.log(value);
      }
    });
  }
  
  function concatenateArray() {
    //Write your code here, just console.log

    let newArr = [
      { id: 5, name: "Ashutosh Sharma", age: "28", profession: "CEO" },
      { id: 6, name: "mike sinha", age: "21", profession: "developer" },
      { id: 7, name: "kiara malhotra", age: "25", profession: "HR" },
    ];
    

    let ans = arr.concat(newArr);
    console.log(ans);
  }