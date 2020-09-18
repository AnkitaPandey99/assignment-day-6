window.onload = function(){
    let initialbus=[
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
    
    if (localStorage.getItem("bus") == null) {
        localStorage.setItem("bus", JSON.stringify(initialbus));
      }
};

    function display(freshtable = undefined){
        let tabledata="";   //tabledata is blank cpz everytime display is called it creates table from d beginning
        let bus;
        if (freshtable == undefined) {
            bus = JSON.parse(localStorage.getItem("bus"));
          } else {
            bus = freshtable;
          }
        // for loop
        let srno=1;
        bus.forEach(function(entry, index){
        
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
    display();  // display the pre-existing array

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
        
        entry.name = name;
        entry.source = source;
        entry.destination = destination;
        entry.number = Number(number);
        entry.capacity = Number(capacity);

        // bus.push(entry)
        

        // local storage
        let bus=JSON.parse(localStorage.getItem("bus"));
        bus.push(entry);
        localStorage.setItem("bus", JSON.stringify(bus));

      display();
    

    
         console.log(employees); //this will show newly added data with existing objects in console

        
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
        console.log(searchValue);
        // return the index of name if it not -1 that implies our searched input is atleast anywhere in the table
        //EXAMPLE: var ele="hello" <- ele.indexOf("e"); <-1 <- ele.indexOf("s");<- -1
       let bus = JSON.parse(localStorage.getItem("bus"));
       let newdata=bus.filter(function(entry){
            return (entry.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1) ||
                   (entry.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1);
        });

        // console.log(newdata);

       
        display(newdata);    // display newdata 
    }

