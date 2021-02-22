import {allUsers,linked} from './users.js'



const sort = () =>{

    // console.log(allUsers)
    // console.log(linked)
    let sorted = []
    for(let i=0;i<allUsers.length;i++){
        if(allUsers[i].id != linked[0].id && allUsers[i].id != linked[1].id)
        {
            sorted.push(allUsers[i])
        }
        
    }
    console.log(sorted)
}

sort();