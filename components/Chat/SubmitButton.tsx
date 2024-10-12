import { AiOutlineEnter } from "react-icons/ai";

const SubmitButton = () => {

  return (
    <button
      type="submit"
      className="px-2"
      aria-label="Send message"
    >
      <AiOutlineEnter color="white" size={24}/>
    </button>
  );
};

export default SubmitButton;
