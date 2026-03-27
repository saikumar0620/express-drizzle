import jwt from 'jsonwebtoken'
//

const generateAccessToken=(userId)=>{
  const accessToken= jwt.sign({userId},process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
  console.log("this is accstopk",accessToken)
  return accessToken;
 

}
const generateRefreshToken=(userId)=>{
  const refreshToken= jwt.sign({userId},process.env.ACCESS_REFRESH_SECRET,{expiresIn:process.env.ACCESS_REFRESH_EXPIRY})
return refreshToken;
}
export {generateAccessToken,generateRefreshToken}