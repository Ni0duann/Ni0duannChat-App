import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Chats = () => {
  const [chats, setChats] = useState<T>([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    currentUser.uid && getChats();
  }, [currentUser.uid]);
  console.log((chats));

  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/28167732/pexels-photo-28167732.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
        <div className="userChartInfo">
          <span>Jane</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/28167732/pexels-photo-28167732.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
        <div className="userChartInfo">
          <span>Jane</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/28167732/pexels-photo-28167732.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
        <div className="userChartInfo">
          <span>Jane</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
