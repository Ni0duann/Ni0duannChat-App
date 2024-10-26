import Cam from "../img/cam.svg"
import Add from "../img/add.svg"
import More from "../img/more.svg"
import Messages from "./Messages"
import Input from "./Input"
import { useContext } from "react"
import { ChatContext } from "../context/UserContext"
const Chat = () => {
  const {data} = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
