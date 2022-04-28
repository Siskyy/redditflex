import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

const Comments = (props) => {

    const Comment = props.comment.body;

    return (
        <>
            <div>
                <p>{Comment}</p>
            </div>
        </>
    )
};

export default Comments;