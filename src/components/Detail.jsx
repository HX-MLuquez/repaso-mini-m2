import React from 'react'
import { useParams } from "react-router-dom";

export default function Detail() {
const params = useParams()
console.log("params", params)
/*
params = {
    id: undefined
}
params = {
    id: 1
}
*/
  return (
    <div>Detail</div>
  )
}

/*
fetch a ese producto id 1

*/
