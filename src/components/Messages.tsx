import { useContext, useEffect, useState } from "react";
import Message from "./Message"
import { ChatContext } from "../context/UserContext";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

function Messages() {

  interface messageData {
    id: string;
    img?: string;
    senderId:string;
    date: dateData;
    text?: string;
  }

  interface dateData {
    any;
  }


  const [messages,setMessages] = useState<messageData[]>([]);
  const {data} = useContext(ChatContext)
  

  useEffect(()=>{
    const unSub = onSnapshot(doc(db,"chats",data.chatId),(doc)=>{
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      doc.exists() && setMessages(doc.data().messages)
    })
    return ()=>{
      unSub()
    }
  },[data.chatId])

  console.log(messages);
  

  return (
    <div className="messages">
      {messages.map((message)=>{
        return <Message message={message} key={message.id}/>
      })}
    </div>
 
  )
}
export default Messages
