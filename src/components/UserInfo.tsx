import React from "react";

// interface BaseUser {
//     name?: string;
//     age?: number;
// }

// interface UserProps extends BaseUser {
//     location?: string;
// }

interface UserProps {
    name?: string;
    age?: number;
    onAgeUp: () => void;
}

const UserInfo: React.FC<UserProps> = ({
    name,
    age,
    onAgeUp,
    // location = "Unknown",
}) => {
    return (
        <div>
            <p>
                Name: {name}, Age: {age}
            </p>
            <button onClick={onAgeUp}>+1</button>
        </div>
    );
};

export default UserInfo;
