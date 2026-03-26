
const lessons=[]

const getAllLessons=(request,response)=>{
      response.status(200).json({
        sucess:true,
        data:lessons,
        message:"lessons are fetched"
      })
}

export{getAllLessons}

