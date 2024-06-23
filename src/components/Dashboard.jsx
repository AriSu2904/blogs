import {getCookie} from "../storages/cookieStorage.js";
import {useState} from "react";
import {getData} from "../storages/localStorage.js";

export const Dashboard = () => {
    const [token, setToken] = useState(null);

    return (
        <div>
            Welcome to the Dashboard!
           <div className="bg-violet-900 w-fit">
               <button onClick={() => {
                   const currentToken = getData('token');
                   setToken(currentToken);
               }}>Check Token</button>
           </div>
            {
                token && (<div>Welcome {getData('username')}</div>)
            }
        </div>
    )
}