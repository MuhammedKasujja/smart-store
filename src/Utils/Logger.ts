interface Data{
    key?: string
    data: unknown 
}

class Logger{
  static message({key , data}: Data){
      if(key === undefined){
        console.log({ data });
      }else{
        console.log(key, { data });
      }
     
  }
}

export default Logger