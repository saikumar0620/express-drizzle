


import {v4 as uuidv4} from 'uuid'

class Courses{
  constructor(){
    this.courses=[]
  }

  createCourse=(newCourse)=>{
    const existingCourse=this.courses.find(course=>course.name === newCourse.name);



    if(existingCourse !== undefined){
        throw new Error("course with same name already exists")
    }

    newCourse.id=uuidv4();
    this.courses.push(newCourse);
    return newCourse;
  }

  getAllTheCourses(){
        return this.courses;
  }
  getCourseById(courseById){

    const courseWithId=this.courses.find((course)=>course.id === courseById);
    return courseWithId

  }


}

export default Courses