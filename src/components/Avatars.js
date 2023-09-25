import React from 'react';

const Avatars = ({x, i, setSelectAvatar, selectAvatar}) => {
    return (
        <div className="avatar" onClick={()=>setSelectAvatar(i)} style={{borderColor: selectAvatar===i ? "green" : "black"}}>
            <img src={x.url} alt=""/>
        </div>
    );
};

export default Avatars;