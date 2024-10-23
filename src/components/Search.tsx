import { useContext, useState } from "react";
import { db } from "../firebase";
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<T>(null);
  const [err, setErr] = useState(false);

  const {currentUser} = useContext(AuthContext)

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setErr(true);
    }
  };


  const handleSelect =async () => {
    // check whether the group(chats in firestore) exists
    const combinedId = 
    currentUser.uid > user.uid 
      ? currentUser.uid + user.uid 
      : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db,"chats",combinedId));
      if(!res.exists()){
        await setDoc(doc(db,"chats",combinedId),{messages:[]})
        
        await updateDoc(doc(db,"userChats",currentUser.uid),{
          [combinedId+".userInfo"] :{
            uid:currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId+".date"] :serverTimestamp()
        })
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setErr(true)
    }
    setUser(null)
    setUsername("")
  }


  const handleKey = (e: { code: string }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChartInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
