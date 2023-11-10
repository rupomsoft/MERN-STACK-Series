import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import {useParams} from "react-router-dom";
import {postDetails} from "../APIRequest/APIRequest.js";
import Loader from "../Component/Loader.jsx";
import BlogDetails from "../Component/BlogDetails.jsx";

const DetailsPage = () => {

    let {postID}=useParams();

    let [list,SetList]=useState(null);

    useEffect(()=>{
        (async ()=>{
            let res= await postDetails(postID);
            SetList(res);
        })()

    },[postID])


    return (
        <Layout>
            {list===null?<Loader/>:<BlogDetails list={list}/>}
        </Layout>
    );
};

export default DetailsPage;