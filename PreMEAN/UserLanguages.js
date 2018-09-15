users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]

//   function UserLanguages(users){
//       for(i = 0; i < users.length; i++){
//           var string = users[i]["fname"] + " " + users[i]["lname"] + " knows ";
//           for(j=0; j<users[i]["languages"].length; j++){
//               string += users[i]["languages"][j]
//               if(j < users[i]["languages"].length-2){
//                   string += ", "
//                 }
//               if(j == users[i]["languages"].length-2){
//                 string += ", and "
//                 }
//               if(j == users[i]["languages"].length-1){
//                 string += "."
//                 }
//           }
//           console.log(string)
//       }
//   }
//   UserLanguages(users)

function LanguagesAndInterest(users){
    for(i = 0; i < users.length; i++){
        var string1 = users[i]["fname"] + " " + users[i]["lname"] + " knows ";
        var string2 = users[i]["fname"] + " is also interested in "
        for(j=0; j<users[i].languages.length; j++){
            string1 += users[i].languages[j]
            if(j < users[i].languages.length-2){
                string1 += ", "
              }
            if(j == users[i].languages.length-2){
              string1 += ", and "
              }
            if(j == users[i].languages.length-1){
              string1 += "."
              }
        }
        for(let hobby in users[i].interests){
            string2 += users[i].interests[hobby] + " - "
        }
        console.log(string1)
        console.log(string2)
    }
}

LanguagesAndInterest(users)