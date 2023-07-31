import { useEffect } from "react";
import { useDispatch } from "react-redux";  
import { fetchGroup } from "../../app/slices/groupSlice";
// import axios from "../../axios";

const Groups = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // axios.get("/group")
  }, []);

  return (
    <div>Groups</div>
  )
}

export default Groups;