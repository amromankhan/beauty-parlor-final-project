firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("indexo.html")
        location.pathname("indexo.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})


function logout(){
    firebase.auth().signOut()
}