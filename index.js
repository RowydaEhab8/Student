import express from 'express';

const app=express();

const students=[
    {
        id:1,
        name:"rowyda",
        city:"shbeen"
    },
    {
        id:2,
        name:"radwa",
        city:"tanta"
    },
    {
        id:3,
        name:"rania",
        city:"cairo"
    }
    ];


const studentsFunction = ( request,responce) =>{
    let output = "<ul>";
    
    for(let i = 0; i< students.length ; i++){
        const student = students[i];

        output += "<li>" + student.name + "</li>";
    }
    output += "</ul>";

    responce.send(output);
};

app.get('/students', studentsFunction)

app.listen(5000);