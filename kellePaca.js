let farmAnimals=["inek","inek","tavuk","domuz","inek"];
let legs=0;
let total_=0;
for(let index=0;index<farmAnimals.length;index++){
    if(farmAnimals[index]==="inek"){
        legs=4;
    }else if(farmAnimals[index]==="tavuk"){
        continue;
    }else if(farmAnimals[index]==="koyun"){
        legs=4;
    }else if(farmAnimals[index]==="domuz"){
        continue;
    }
    total_+=legs;
}
console.log(total_);
