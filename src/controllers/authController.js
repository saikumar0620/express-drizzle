import Users from "../db/Users.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt-token.js";

const usersInstances= new Users();

const registerNewUser=(request,response)=>{
  try {
    const newUserData=request.body;
    //save the newUserdata in database
     const savedUser=usersInstances.createNewuser(newUserData);
     console.log(newUserData)
     console.log(usersInstances)


     response.status(201).json({
      success:true,
      data:savedUser,
      message:"newuser saved successfully"
     })

  } catch (error) {
    response.status(400).json({
      success: false,
      error: error,
      message: error.message
    });
  }

}
const logInUser=(request,response)=>{
    try {
      const userToLogin=request.body;
      //get the existing user email
      const userLoginEmailData=usersInstances.getUserByEmail(userToLogin.email)
      // console.log("EMAIL DATA",userLoginEmailData.email)
      // save the data inside the gibbarish text for user auth
      const accessTokens=generateAccessToken(userLoginEmailData.id)
      const refreshTokens=generateRefreshToken(userLoginEmailData.id)
      console.log("access",accessTokens)
      console.log("refresh",refreshTokens)

      response.status(200).json({
        success:true,
       data:{
        loggedInUser:userToLogin,
        accessTokens,
        refreshTokens


       },
        message:"user login success"
      })
    
  } catch (error) {
    response.status(400).json({
      me:"sa",
      success: false,
      error: error,
      message: error.message,
    });
  }

}
export {registerNewUser,logInUser}