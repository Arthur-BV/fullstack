import { useEffect, useState } from "react";
import axios from "../../axios";
import "../../assets/GlobalStyles.css"

const APIAddr = process.env.REACT_APP_API;

interface groupItem {
  _id: string;
  name: string;
  starttime: string;
}

const Groups = () => {
  const [ groupData, setGroupData] = useState({});

  const response = async () => {
    const data = await axios.get<groupItem[]>(APIAddr+"/group");

    return data;
  }

  useEffect(() => {
    response().then((res) => {
      setGroupData(res.data);    
    }).catch((err) => {
      console.log("ERROR:", err);
    });
  }, [setGroupData]);

  const addHandler = () => {
    console.log("Add")
  };
  const editHandler = (params: string) => {
    console.log("Edit, ItemID is: ", params)
  };
  const deleteHandler = (params: string) => {
    console.log("Delete, ItemID is: ", params)
  };

  const ObjList: groupItem[] = Object.values(groupData);

  return (
    <div>
      <div className="header-style">
        &nbsp;--::&nbsp;<h2>Group List</h2>&nbsp;::--&nbsp;<button onClick={() => addHandler()}>add</button>
      </div>
      <div>
        { 
          ObjList.map((value, key) => (
            <div key={key}>
              <pre className="pre-style">
                <button onClick={() => deleteHandler(value._id)}>delete</button>&nbsp;:&nbsp;
                <button onClick={() => editHandler(value._id)}>edit</button>&nbsp;-&nbsp;
                <span className="span-style">{value.name}</span>
              </pre>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Groups;