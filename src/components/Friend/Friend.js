import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend;

    const navigate = useNavigate();

    const showFriendDetail = () => {
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <Link to={'/friend/' + id}></Link>
            <button onClick={showFriendDetail}>{username}, id: {id}</button>
        </div>
    );
};

export default Friend;