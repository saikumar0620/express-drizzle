import {v4 as uuidv4} from 'uuid'

class Users{
  constructor(){
    this.Users=[]
  }
  createNewuser(newUserData){
    const newUserId=uuidv4()
    newUserData.id=newUserId;
    this.Users.push(newUserData)
    return this.Users.find((user)=>user.id===newUserId)
  }
  getUserByEmail(userEmail){
      return this.Users.find((user)=>user.email === userEmail);
  }
  
}

export default Users