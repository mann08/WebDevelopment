// JSON full form is JAVA SCRIPT OBJECT NOTATION
let fd = [
    ["Mann Verma","08-08-2005",8839486316,"Bhopal","Techer"],
    ["Mann Verma","08-08-2005",8839486316,"Bhopal","Techer"],
    ["Mann Verma","08-08-2005",8839486316,"Bhopal","Techer"],
    ["John Doe","15-12-1990",9876543210,"Indore","Engineer"]

];
fd.forEach((element) => {
    console.log(element[0]);
});

// Bracket Notation && Dot Notation(only on JSON Objects not on Array of Arrays)
let fy = [
    {
        name: "Mann Verma",
        dob: "08-08-2005",
        mobile: 8839486316,
        city: "Bhopal",
        profession: "Teacher"
    },
    {
        name: "Khushi Kumari",
        dob: "15-12-2002",
        mobile: 9876543210,
        city: "Indore",
        profession: "Engineer"
    },
    {
        name: "Aarav Sharma",
        dob: "21-03-1998",
        mobile: 9123456780,
        city: "Delhi",
        profession: "Doctor"
    },
    {
        name: "Priya Singh",
        dob: "10-11-2001",
        mobile: 9988776655,
        city: "Mumbai",
        profession: "Designer"
    },
    {
        name: "Rohan Patel",
        dob: "05-06-1995",
        mobile: 9012345678,
        city: "Ahmedabad",
        profession: "Developer"
    }
];

fy.forEach((element) => {
    console.log(element.name);
});
console.log(fy);
console.log(fy[0].name);

let mann = {
    name: "Mann Verma",
    dob: "08-08-2005",
    mobile: 8839486316,
    city: "Bhopal",
    profession: "Teacher"
}
console.log(Object.keys(mann));
console.log(Object.values(mann));