import { useEffect, useState } from "react";
import axios from "../../axios";
import "../../assets/GlobalStyles.css"

const APIAddr = process.env.REACT_APP_API;

interface lessonItem {
  _id: string;
  name: string;
  duration: number;
}

const spanStyle = {
  display: 'inline-block',
  fontWeight: 'bold',
  color: 'red',
  width: '325px',
};

const headerStyle = {
  display: "flex",
  placeItems: "center start",
};

const Lessons = () => {
  const [ lessonData, setGroupData] = useState({});

  const response = async () => {
    const data = await axios.get<lessonItem[]>(APIAddr+"/lesson");

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

  const ObjList: lessonItem[] = Object.values(lessonData);

  return (
    <div>
      <div style={headerStyle}>
      &nbsp;--::&nbsp;<h2>Lesson List</h2>&nbsp;::--&nbsp;<button onClick={() => addHandler()}>add</button>
      </div>
      <div>
        { 
          ObjList.map((value, key) => (
            <div key={key}>
              <pre className="pre-style">
                <button onClick={() => deleteHandler(value._id)}>delete</button>&nbsp;:&nbsp;
                <button onClick={() => editHandler(value._id)}>edit</button>&nbsp;-&nbsp;
                <span style={spanStyle}>{value.name} (Duration: {value.duration} hrs.)</span>
              </pre>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Lessons;