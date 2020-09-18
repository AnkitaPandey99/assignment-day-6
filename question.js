let employees=[
    {
        name:"Jisoo Yamada",
        age:20,
        city:"Tokyo",
        salary:35000
    },
    {
        name:"Monica belluci",
        age:25,
        city:"Chicago",
        salary:30000
    },
    {
        name:"Tina Pandey",
        age:19,
        city:"Berlin",
        salary:52000
    },
    {
        name:"brigitte bardot",
        age:22,
        city:"Shenghai",
        salary:20000
    },
    {
        name:"yaami gurung",
        age:28,
        city:"Leh",
        salary:48000
    }
    ];
    
    // function to display array objects into table
    // superemployees is used to pass desired array inorder to get desired result making display() dynamic
    function display(superemployees){
        let srno=1;
        let tabledata=""   //tabledata is blank cpz everytime display is called it creates table from d beginning
        // for loop
        superemployees.forEach(function(employee,index){
        
        let currentrow=`<tr>
        <td>${srno}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.city}</td>
        <td>${employee.salary}</td>
        <td><button onclick="deleteEmployee(${index})">Delete</button></td>
        </tr>`;
        srno++;
       // for the next loop iteration
       tabledata+=currentrow;
       });
       
        document.getElementsByClassName('tdata')[0].innerHTML=tabledata;
    }
    display(employees);  // display the pre-existing array

    
    //create search function
    function searchByNameAndCity() {
    
        let searchValue=document.getElementById("search").value;
        // console.log(searchValue);
        // return the index of name if it not -1 that implies our searched input is atleast anywhere in the table
        //EXAMPLE: var ele="hello" <- ele.indexOf("e"); <-1 <- ele.indexOf("s");<- -1
       let newdata=employees.filter(function(employee){
            return (employee.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1) ||
                   (employee.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1);
        });

        // console.log(newdata);

       
        display(newdata);    // display newdata 
    }
        
    // create delete function
    function deleteEmployee(index){
         employees.splice(index, 1);
         display(employees);
    }