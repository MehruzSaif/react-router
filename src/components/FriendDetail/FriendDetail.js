import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    return (
        <div>
            <h2>This is a detail of friend: {friendId}</h2>
            <h3>Name: {friend.name}</h3>
            <h4>Emil: {friend.email}</h4>
            <h6>Website: {friend.website}</h6>
            <p><small>city: {friend.address?.city}</small></p>
            <p><small>lat: {friend.address?.geo?.lat}</small></p>
        </div>
    );
};

export default FriendDetail;