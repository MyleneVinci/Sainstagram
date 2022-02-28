import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Post from './Post';
import './PostList.css';
// import getClassName from '../tools/getClassName'
import posts from '../assets/posts'


const PostList = (props) => {

    //nacapi shut down looking for a solution to replace it

    // const [postList, setPostList] = useState([]);
    // useEffect(() => {
    //     if (props.id) {
    //         Axios
    //             .get(`https://a.nacapi.com/sainstgram.posts?userid=${props.id}`)
    //             .then((response) => setPostList(response.data))
    //             .catch(error => console.log(`API (posts) call error: ${error}`))
    //     } else {
    //         Axios
    //             .get("https://a.nacapi.com/sainstgram.posts")
    //             .then((response) => setPostList(response.data))
    //             .catch(error => console.log(`API (posts) call error: ${error}`))
    //     }
    // }, [])

    function getPostList() {
        // let list = [...postList].sort(function (a, b) { return b.date.localeCompare(a.date); });
        let list = [...posts].sort(function (a, b) { return b.date.localeCompare(a.date); });

        let post = {
            "userid": 0, "name": "HP Eats", "picture": "/images/pub.gif", "caption": "Venez découvrir notre nouvelle offre",
            "date": "20220128"
        };

        if (list.length !== 0 ) {
            if (list.length <= 3) {
                list.push(post);
            } else {
                list.splice(3, 0, post);
            }
        }
        return list;
    }

    return (
        <div className={`${props.className} Post-list`}>
            {getPostList()
                .map((post, index) => (
                    <div className='Postlist-post' key={index}>
                        <Post post={post} />
                    </div>
                ))}
        </div>
    )
}

export default PostList;