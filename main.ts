//datatypes
type studenttype = {
    Name1 : string;
    fName: string;
    email_id : string;
    age : number;
    rollNo : number;
    isStudent :boolean,
    acadamicRecord: recordtype;
    acadamicGrade :gradetype,
}
  

//interface 
interface recordtype  {
   
        matric : string;
        inter :  string;
        graduation :string;
    
}  

interface gradetype 
     {
        matric : string;
        inter : string;
        garduation : string;
    }

//student information

var studentInfo = {
    Name1 : "Asfaa",
    fName: "Naeem",
    email_id : "akhan@gmail.com",
    age : 20,
    rollNo : 1234,
    isStudent :true,
    acadamicRecord: {
        matric : "I have been Completed my matriculation in computer science group From Karachi board in 2019 .",
        inter :  "I have been Completed my intermediate in computer science group From Intermediate Board in 2021,",
        graduation : " I studied BSc From Karachi University & still continue."
    },
    acadamicGrade :{
        matric : 'A+ grade',
        inter : 'A grade',
        garduation : "3.5 CGPA in 6 semester"
    },
    
}

console.log(studentInfo);
