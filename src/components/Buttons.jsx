const Buttons = (props) => {
  return (
    <>
      <button 
        onClick={() => props.setSelectedButton(props.index)}  
        className={`${
          props.index === props.Selected 
            ? "bg-white text-black" 
            : "text-white bg-[#272727] hover:bg-zinc-700"
          } rounded-lg p-2 cursor-pointer whitespace-nowrap`}>
        {props.Category}
      </button>
    </>
  );
};

export default Buttons;