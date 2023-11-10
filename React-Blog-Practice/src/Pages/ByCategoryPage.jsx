import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import {useParams} from "react-router-dom";
import {postByCategory, postLatest} from "../APIRequest/APIRequest.js";
import Loader from "../Component/Loader.jsx";
import BlogList from "../Component/BlogList.jsx";

const ByCategoryPage = () => {

    let {categoryID}=useParams();

    let [list,SetList]=useState(null);

    useEffect(()=>{
        (async ()=>{
            let res= await postByCategory(categoryID);
            SetList(res);
        })()

    },[categoryID])

    return (
        <Layout>
            {list===null?<Loader/>:<BlogList list={list} />}
        </Layout>
    );
};

export default ByCategoryPage;