const users = [
  { 
    name:"John", 
    age: 33 
  }, 
  { 
    name:"Maxine", 
    age: 24 
  }, 
  { 
    name:"Ted", 
    age: 12 
  }, 
] 
    

function checkAge(user) {  
  return user.age >= 18; 
} 
 
checkAge(users[0]);
checkAge(users[1]); 
checkAge(users[2]); 