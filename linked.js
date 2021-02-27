import {allUsers,linked} from './users.js'



const sort = (A,B) =>{

    const Aid = []
    const Bid = []
    const Diff = []
    A.forEach(n => {
        Aid.push(n.id);
    });
    
    B.forEach(n => {
        Bid.push(n.id);
    })
    let diffid = Aid.filter(x => !Bid.includes(x))

    for(let i = 0 ;i<A.length;i++){
        if(A[i].id == diffid[i]){
            Diff.push(A[i])
        }
    }

    console.log(Diff);
}

sort(allUsers,linked);