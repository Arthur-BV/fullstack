import { useEffect, useState } from "react";
import axios from "../../axios";
import "../../assets/GlobalStyles.css"
import Modal from "react-modal";

const APIAddr = process.env.REACT_APP_API;

interface classroomItem {
  _id: string;
  classroomname: string;
  classroomtype: string;
  seatcount: number;
}

const ClassRooms = () => {
  const [ classroomData, setClassRoomData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("NoNe");

  const [formData, setFormData] = useState<classroomItem>({
    _id: "",
    classroomname: "",
    classroomtype: "",
    seatcount: 0
  });

  const response = async (params: String) => {
    const data = await axios.get<classroomItem[]>(APIAddr+"/classroom/"+params);

    return data;
  }

  useEffect(() => {
    response("").then((res) => {
      setClassRoomData(res.data);    
    }).catch((err) => {
      console.log("ERROR (GetAll):", err);
    });
  }, [setClassRoomData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`ID: ${formData._id} \nName: ${formData.classroomname} \nUser Type: ${formData.classroomtype}\nSeats Count: ${formData.seatcount}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addHandler = () => {
    setModalTitle("Adding ClassRoom Data:")
    setIsModalOpen(true);
    console.log("Add")
  };

  const editHandler = async (params: string) => {
    console.log("Edit, ItemID is: ", params);

    setModalTitle("Editing ClassRoom Data:");
    setIsModalOpen(true);

    response(params).then((res) => {
      console.log("res.data is: ", res.data);

      setFormData({
        _id: res.data[0]._id,
        classroomname: res.data[0].classroomname,
        classroomtype: res.data[0].classroomtype,
        seatcount: res.data[0].seatcount,
      });
    }).catch((err) => {
      console.log("ERROR (GetOne):", err);
    });
  };
  
  const deleteHandler = (params: string) => {
    console.log("Delete, ItemID is: ", params)
  };

  const ObjList: classroomItem[] = Object.values(classroomData);

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="ModalWindow"
        className="custom-modal"
        overlayClassName="custom-overlay"
        shouldCloseOnOverlayClick={false}
        ariaHideApp={false}
      >
        {/* Content of the popup goes here */}
        <h2>{modalTitle}</h2>
        <p>You can add/edit any content you like here.</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="_id">Field ID:</label>
            <input
              type="text"
              id="_id"
              name="_id"
              value={formData._id}
              onChange={handleChange}
              required
              disabled={true}
            />
          </div>
          <div>
            <label htmlFor="classRoomName">Full Name:</label>
            <input
              type="text"
              id="classRoomName"
              name="classRoomName"
              value={formData.classroomname}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="classRoomType">E-Mail:</label>
            <input
              type="text"
              id="classRoomType"
              name="classRoomType"
              value={formData.classroomtype}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="seatsCount">Type:</label>
            <input
              type="text"
              id="seatsCount"
              name="seatsCount"
              value={formData.seatcount}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>&nbsp;<button onClick={closeModal}>Close</button>
        </form>
      </Modal>

      <div className="header-style">
        &nbsp;--::&nbsp;<h2>ClassRoom List</h2>&nbsp;::--&nbsp;<button onClick={() => addHandler()}>add</button>
      </div>
      <div>
        { 
          ObjList.map((value, key) => (
            <div key={key}>
              <pre className="pre-style">
                <button onClick={() => deleteHandler(value._id)}>delete</button>&nbsp;:&nbsp;
                <button onClick={() => editHandler(value._id)}>edit</button>&nbsp;-&nbsp;
                <span className="span-style">{value.classroomname}/{value.classroomtype} (Seats count: {value.seatcount})</span>
              </pre>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ClassRooms