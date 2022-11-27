import { useState } from "react";





  const usersData = [];
export const getData = async () => {
  
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const userData = await res.json();
  
    userData.map(d => {
        usersData.push({
            id: d.id,
            name: d.name,
            username: d.username,
            email: d.email
        })
    })

    return userData;
}


export const Data = () => {
    const users=[]
const userData = getData()
userData.then(d => { d.map(user => users.push(user))});
console.log(users)
  
}

Data()