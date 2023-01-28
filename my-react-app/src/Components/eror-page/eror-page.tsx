import React from "react";
import { useRouteError } from "react-router-dom"


 function ErorPage() {
    const error:any = useRouteError();
  return (
    <h1>
      упс, произошла ошибка, извините. попробуйте перезагрузить страницу или
      подождать, {error.message}
    </h1>
    
  );
}

export {ErorPage}