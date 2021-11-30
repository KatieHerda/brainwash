import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from '../../axios-instance';
import PostList from './PostList';
import './PostIndex.scss'

export default function PostIndex(props) {
  const { interests, userFilter, likeCounts, setLikeCounts } = props;

  const [ posts, setPosts ] = useState([]);
  const [ users, setUsers ] = useState([]);
  const [ interestsFilter, setInterestsFilter ] = useState([]);
  const [ thumbnails, setThumbnails ] = useState({});

  useEffect(() => {
    const getPosts = function() {
      const filter = {
        interests: interestsFilter,
        user_id: userFilter || null
      }
      axios
        .get('posts', {params: {filter}})
        .then(res => { 
          setLikeCounts(() => res.data.postCounts);
          setPosts(() => res.data.posts);
          setUsers(() => res.data.users);
          setThumbnails(() => res.data.thumbnails)
        })
        .catch(e => console.error(e))
    }
    getPosts();
  }, [interestsFilter, userFilter])

  return (
    <section className="post-index">        
      <PostList 
        posts={posts}
        users={users}
        interests={interests}  
        likeCounts={likeCounts} 
        setLikeCounts={setLikeCounts}
        thumbnails={thumbnails}
        interestsFilter={interestsFilter}
        setInterestsFilter={setInterestsFilter}
      />
      <Outlet/>
    </section>
  )
}