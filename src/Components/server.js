

export const getData = async () => {
    const usersData = [];
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const userData = await res.json();
  
     userData.map(d => {
      return  usersData.push({
            id: d.id,
            name: d.name,
            username: d.username,
            email: d.email
        })
  
    })
      return usersData;
    
}


