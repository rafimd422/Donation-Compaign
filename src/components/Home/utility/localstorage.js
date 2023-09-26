const getDonation = () =>{
    const gettingDonate = localStorage.getItem("donate")
    if(gettingDonate){
     return JSON.parse(gettingDonate)
}
   return [];

}

const setDonation = id => {
    const setDonate = getDonation()
const match = setDonate.find(donation => donation === id)
if(!match){
    setDonate.push(id);
localStorage.setItem('donate', JSON.stringify(setDonate))
}

}

export {getDonation , setDonation}