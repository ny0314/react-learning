import React, { useState, useEffect } from "react";
import UserInfo from "./UserInfo";

type User = {
    name: string;
    age: number;
};

const UserForm: React.FC = () => {
    const [user, setUser] = useState<User>(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : { name: "", age: 0 };
    });

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    const onAgeUp = () => {
        setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
    };

    return (
        <div>
            <h2>User Form</h2>
            <input
                type="text"
                placeholder="Name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Age"
                value={user.age}
                onChange={(e) =>
                    setUser({ ...user, age: Number(e.target.value) })
                }
            />
            {/* <UserInfo name={user.name} age={user.age} /> */}
            {/* <UserInfo /> */}
            {/* <UserInfo name="Alice" age={25} location="Tokyo" /> */}
            <UserInfo name={user.name} age={user.age} onAgeUp={onAgeUp} />
        </div>
    );
};

export default UserForm;
