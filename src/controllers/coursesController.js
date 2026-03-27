import Courses from "../db/Courses.js";

const courseInstance = new Courses();

const createCourse = (request, response) => {
  const newCourse = request.body;
  try {
    if (!newCourse.name) {
      throw new Error(
        "there is no courses so you should create on  of the course",
      );
    }

    const createdNewCourse = courseInstance.createCourse(newCourse);
    if (!createdNewCourse.id) {
      throw new Error("course is not created");
    }
    response.status(200).json({
      success: true,
      data: createdNewCourse,
      message: "course created successfully",
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error,
      message: error.message,
    });
  }
};
const getAllCourses = (request, response) => {
  response.status(200).json({
    sucess: true,
    data: courseInstance.courses,
    message: "courses fetched successfully!",
  });
};


const getCourseById = (request, response) => {
    try {
        const courseId = request.params.courseId
        const courseWithCourseId = courseInstance.getCourseById(courseId);
        if(!courseWithCourseId){
            throw new Error("Course doesn't exist with this id!")
        }
        response.status(200).json({
            success:true,
            data: courseWithCourseId,
            message: "couse with id has been fetched successfully!"
        })
    } catch (error) {
        response.status(400).json({
            success: false,
            error: error,
            message: error.message
        })
    }
}

export { getAllCourses, createCourse, getCourseById };
