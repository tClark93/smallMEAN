// let students = [
//     {name: 'Remy', cohort: 'Jan'},
//     {name: 'Genevieve', cohort: 'March'},
//     {name: 'Chuck', cohort: 'Jan'},
//     {name: 'Osmund', cohort: 'June'},
//     {name: 'Nikki', cohort: 'June'},
//     {name: 'Boris', cohort: 'June'}
// ];

// function studentInfo(arr){
//     for(i=0; i<arr.length; i++){
//         console.log("Name: "+ arr[i].name+ ", Cohort: "+arr[i].cohort);
//     }
// }

// studentInfo(students);

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function getInfo(dict){
    console.log("EMPLOYEES")
     count1 = 0
     for(i = 0; i < dict.employees.length; i++){
         count1++
         console.log(count1+" - "+dict.employees[i].last_name+", "+dict.employees[i].first_name)
     }
     console.log("")
     console.log("MANAGERS")
     count2 = 0
     for(j = 0; j < dict.managers.length; j++){
        count2++
        console.log(count2+" - "+dict.managers[j].last_name+", "+dict.managers[j].first_name)
    }
 }

 getInfo(users)