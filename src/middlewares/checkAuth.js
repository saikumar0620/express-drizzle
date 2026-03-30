
import jwt from "jsonwebtoken";

const checkAuth = (request, response, next) => {
  try {
    // TODO why we should use bearer token in header and how to send the token from frontend
    const accessToken = request.headers.authorization.split(" ")[1]
    console.log("access token from header", accessToken)
    const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    console.log("decoded token", decodedToken);

    // TODO verify the access token and allow the user to access the protected route if the token is valid
    next()
  } catch (error) {
    response.status(401).json({
      success: false,
      error: error?.message ,
      message: error?.message ?? "Unauthorized access",
    });         
  }
  
}

export default checkAuth