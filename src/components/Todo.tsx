const Todo = () => {
  return (
    <>
      <div className="flex bg-primary-white h-119 rounded-md">
        <div className="w-125 border-r-4 border-r-light-brown px-8 py-5">
          left side todo
            <div>
              <h3>ADD TODO</h3>
              <input placeholder="Your Todo" className="border"/>
            </div>
            






        </div>
        <div className="w-125  px-8 py-5">
          right side
            <div>
              <h3>DONE TODOS</h3>
            </div>









        </div>
      </div>
      



      
    </>
  )
}

export default Todo