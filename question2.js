let bus=[
    {
        name:"bus1",
        source:"mumbai",
        destination:"delhi",
        number: 1000,
        capacity: 100

    },
    {
        name:"bus2",
        source:"pune",
        destination:"agra",
        number: 1001,
        capacity: 101   
    },
    {
        name:"bus3",
        source:"shimla",
        destination:"ladakh",
        number: 1002,
        capacity: 50
    }
    
    ];


    function display(superbus){
        let srno=1;
        let tabledata=""   //tabledata is blank cpz everytime display is called it creates table from d beginning
        // for loop
        superbus.forEach(function(entry,index){
        
        let currentrow=`<tr>
        <td>${srno}</td>
        <td>${entry.name}</td>
        <td>${entry.source}</td>
        <td>${entry.destination}</td>
        <td>${entry.number}</td>
        <td>${entry.capacity}</td>
        </tr>`;
        srno++;
       // for the next loop iteration
       tabledata+=currentrow;
       });
       
        document.getElementsByClassName('tdata')[0].innerHTML=tabledata;
    }
    display(bus);  // display the pre-existing array

    //  function to add bus
    function addEntry(event){
        event.preventDefault();  //to prevent all bydefault attributes the event(submit button) does.(here,'prevent refreshing')
        // create blank obj to add employee dynamically
        let entry= {};
        let name = document.getElementById("name").value;
        let source = document.getElementById("source").value;
        let destination = document.getElementById("destination").value;
        let number = document.getElementById("number").value;
        let capacity = document.getElementById("capacity").value;
        
        employee.name = name;
        employee.source = source;
        employee.destination = destination;
        employee.number = Number(number);
        employee.capacity = Number(capacity);
    

        // lets add the new-data into existing array by using push()
        bus.push(entry);
        // console.log(employees); this will show newly added data with existing objects in console

     display(bus);    //display fresh array

     // after display make the value in the form blank   
        document.getElementById("name").value="";
        document.getElementById("source").value="";
        document.getElementById("destination").value="";
        document.getElementById("number").value="";
        document.getElementById("capacity").value="";
    
    }





     //create search function
     function searchBySourceAndDestination() {
    
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
   