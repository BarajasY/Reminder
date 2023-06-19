"use client"
import React from 'react'
import style from '../styles/browse.module.css';
import { useArticles } from '@/queryClient/useArticles';
import { articleType } from '@/types';

const Browse = () => {


    const {isLoading, data, error} = useArticles();
    if(isLoading) return <h1>Loading</h1>
    if(error) console.log(error)

    const deleteArticle = async (id:number) => {
        const data = fetch("http://localhost:5000/article")
    }

  return (
    <div className={style.browseContainer}>
        {data.map((article:articleType) => (
            <div className={style.articleContainer} key={article.id}>
                <h1>{article.title}</h1>
                <p>{article.duedate}</p>
                <div className={style.articleDelete}>
                    <button>Delete</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Browse
