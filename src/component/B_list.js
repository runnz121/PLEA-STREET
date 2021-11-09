import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Comment from './Comment'
import Loading from './Loading'
import EndMsg from './EndMsg'

function B_list() {

  const [items, setItems] = useState([])

  const [hasMore, setHasMore] = useState(true)

  const [page, setPage] = useState(2)

  useEffect(() => {
    const getComments = async () => {

      const res = await fetch(
        // 'http://localhost:3004/comments?_page=1&_limit=20'
        'https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20'
      )
      const data = await res.json()
      setItems(data)
    }

    getComments()
  }, [])

  console.log(items)

  const fetchComments = async () => {
    const res = await fetch(
      // `http://localhost:3004/comments?_page=${page}&_limit=20`
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`
    )
    const data = await res.json()
    return data
  }

  const fetchData = async () => {
    const commentsFormServer = await fetchComments()

    setItems([...items, ...commentsFormServer])

    if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
      setHasMore(false)
    }

    setPage(page + 1)

  }

  return (
    <InfiniteScroll
      dataLength={items.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={<Loading />}
      endMessage={<EndMsg />}
    >
    {items.map((item) => {
      return <Comment key={item.id} item={item} />
           })}
  </InfiniteScroll>
  )
}

export default B_list
