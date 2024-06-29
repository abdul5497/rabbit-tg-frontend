import { TonConnectButton } from "@tonconnect/ui-react";
import { useEffect, useState } from "react";

const Header=()=>{
  const [user, setUser] = useState<string | null>("");
  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user)
    setUser(user);
  }, []);
  return (
    <div className="px-5 py-3 flex items-center relative z-[1]">
      <img
        src="/images/hamster.png"
        alt="AvatarImg"
        className="w-10 h-10"
      ></img>
      <div className=" text-sm font-medium text-white ml-3">@{user}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          fontSize: "12px",
          marginLeft: "auto",
          textTransform: "none",
        }}
      >
        <TonConnectButton />
      </div>
    </div>
  )
}

export default Header