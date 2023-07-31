import { useEffect, useState } from "react";
import axios from "../../axios";
import Modal from "react-modal";
import "../../assets/GlobalStyles.css"

const APIAddr = process.env.REACT_APP_API;

interface userItem {
  _id: string;
  fullName: string;
  email: string;
  userType: string;
  avatarUrl: string;
}

const Users = () => {
  const [ userData, setUserData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("NoNe");

  const [formData, setFormData] = useState<userItem>({
    _id: "",
    fullName: "",
    email: "",
    userType: "",
    avatarUrl: "",
  });

  const response = async (params: String) => {
    const data = await axios.get<userItem[]>(APIAddr+"/user/"+params);

    return data;
  }

  useEffect(() => {
    response("").then((res) => {
      setUserData(res.data);    
    }).catch((err) => {
      console.log("ERROR (GetAll):", err);
    });
  }, [setUserData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`ID: ${formData._id} \nName: ${formData.fullName} \nUser Type: ${formData.userType}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addHandler = () => {
    setModalTitle("Adding User Data:")
    setIsModalOpen(true);
    console.log("Add")
  };

  const editHandler = async (params: string) => {
    console.log("Edit, ItemID is: ", params);

    setModalTitle("Editing User Data:");
    setIsModalOpen(true);

    response(params).then((res) => {
      console.log("res.data is: ", res.data);

      setFormData({
        _id: res.data[0]._id,
        fullName: res.data[0].fullName,
        email: res.data[0].email,
        userType: res.data[0].userType,
        avatarUrl: res.data[0].avatarUrl,
      });
    }).catch((err) => {
      console.log("ERROR (GetOne):", err);
    });
  };

  const deleteHandler = (params: string) => {
    console.log("Delete, ItemID is: ", params)
  };

  const ObjList: userItem[] = Object.values(userData);

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
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-Mail:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="userType">Type:</label>
            <input
              type="text"
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="avatarUrl">Avatar (URL):</label>
            <input
              type="text"
              id="avatarUrl"
              name="avatarUrl"
              value={formData.avatarUrl}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>&nbsp;<button onClick={closeModal}>Close</button>
        </form>
      </Modal>

      <div className="header-style">
        &nbsp;--::&nbsp;<h2>User List</h2>&nbsp;::--&nbsp;<button onClick={() => addHandler()}>add</button>
      </div>
      <div>
        { 
          ObjList.map((value, key) => (
            <div key={key}>
              <pre className="pre-style">
                <button onClick={() => deleteHandler(value._id)}>delete</button>&nbsp;:&nbsp;
                <button onClick={() => editHandler(value._id)}>edit</button>&nbsp;-&nbsp;
                <span className="span-style">{value.fullName}/{value.userType} ({value.email})</span>
              </pre>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Users