import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/UserContext";

const Chats = () => {

  interface ChatData {
    date : dateInterface
    userInfo : userInfoInterface
    lastMessage:{text:string};
  }

  interface dateInterface{
    // seconds: number;
    // nanosends: number;
    any;
  }

  interface userInfoInterface {
    uid: string;
    photoURL: string;
    displayName: string;
    
  }



  
  const [chats, setChats] = useState<ChatData[]>([]);
  const { currentUser } = useContext(AuthContext);
  const {dispatch} = useContext(ChatContext)

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc:any) => {     
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    currentUser.uid && getChats();
  }, [currentUser.uid]);


  const handleSlect = (u:any) =>{

    dispatch({type:"CHANGE_USER",payload: u })
  }

  console.log((chats));
  

  return (
    <div className="chats">
      {Object.entries(chats)?.sort((a:any,b:any)=>b[1].date - a[1].date).map((chat) => (
        
        <div className="userChat" key={chat[0]} onClick={()=>handleSlect(chat[1].userInfo)}>
          <img
            src={chat[1].userInfo.photoURL}
            alt=""
          />
          <div className="userChartInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
