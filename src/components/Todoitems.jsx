import images from '../../index'

// eslint-disable-next-line react/prop-types
const Todoitems = ({text, id, isComplete, deleteTodo, toggle}) => {

    return (<div className="flex items-center my-3 gap-2">

        <div onClick={() => {
            toggle(id);
        }} className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={isComplete ? images.checked : images.unchecked} alt="check"/>
            <p className={` pointer-events-none decoration-slate-500 text-slate-700 ml-4 text-[17px] ${isComplete ? 'line-through' : ''}`}>{text}</p>
        </div>
        <span onClick={() => {
            deleteTodo(id)
        }}
              className='text-[14px] bg-slate-200 rounded-full w-[25px] h-[25px] flex justify-center items-center cursor-pointer'>X</span>
    </div>);
}

export default Todoitems
