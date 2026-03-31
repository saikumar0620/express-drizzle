import Users from "../db/Users.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/jwt-token.js";

const usersInstances = new Users();

const registerNewUser = (request, response) => {
  try {
    const newUserData = request.body;
    console.log(newUserData);
    //save the newUserdata in database
    const savedUser = usersInstances.createNewuser(newUserData);
    console.log(usersInstances);

    response.status(201).json({
      success: true,
      data: savedUser,
      message: "newuser saved successfully",
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error,
      message: error.message
    });
  }
};
const logInUser = (request, response) => {
  try {
    const userToLogin = request.body;
    //get the existing user email
    const userLoginEmailData = usersInstances.getUserByEmail(userToLogin.email);
    // console.log("EMAIL DATA",userLoginEmailData.email)
    // save the data inside the gibbarish text for user auth

    if (!userLoginEmailData) {
      throw new Error("user not found with this email");
    }

    const accessTokens = generateAccessToken(userLoginEmailData.id);
    const refreshTokens = generateRefreshToken(userLoginEmailData.id);
    //save the refresh token in database for future use

    const isProduction = process.env.NODE_ENV === "production" ? true : false;
    response.cookie("refreshToken", refreshTokens, {
      httpOnly: true,
      secure: isProduction ? true : false, // Set to true if using HTTPS only
      // sameSite: "strict", // Adjust based on your needs
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    usersInstances.saveTheRefreshToken(userLoginEmailData.id, refreshTokens);

    response.status(200).json({
      success: true,
      data: {
        loggedInUser: userToLogin,
        accessTokens,
        // refreshTokens,
      },
      message: "user login success",
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error,
      message: error.message,
      
    });
  }
};

const refreshAccessToken = (request, response) => {
  try {
    const refreshToken = request.headers["authorization"].split(" ")[1];
    console.log("refresh token", refreshToken);

    // TODO verify the refresh token and generate new access token
    response.status(200).json({
      success: true,
      data: {
        accessToken: "newAccessToken",
      },
      message: "new access token generated successfully",
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error,
      message: error?.message ?? "refresh Api error",
    });
  }
};
export { registerNewUser, logInUser, refreshAccessToken };


