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
  saveTheRefreshToken(userId,refreshToken){
    const userIndex=this.Users.findIndex((user)=>user.id===userId)
    if(userIndex!==-1){
      this.Users[userIndex].refreshToken=refreshToken;
      return this.Users[userIndex]
    }
    return null;
  }
}

export default Users;