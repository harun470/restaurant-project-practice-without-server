import React from 'react'
import dateFormat from 'dateformat'

export default function loadComment(props) {
    return (
        props.comment.map(comment=>{
            return (
                <div key={comment.id} style={{textAlign:'Left'}}>
                    <h5>{comment.author}</h5>
                    <p>{comment.comment}</p>
                    <p>Rating: {comment.rating}</p>
                    <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                </div>
            )
        })
    )
}
