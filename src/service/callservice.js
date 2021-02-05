import axios from 'axios';


export const callService = () =>{
    axios.get(`/users`) //https://jsonplaceholder.typicode.com/users
    .then(res => {
      const persons = res.data;
     console.log(persons);
    })

};