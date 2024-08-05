import React from 'react'

export default function NameList({data}) {

const filterdData = data.filter(element => element.name.startsWith('a')).map(element => element.name).sort();
  return (
    <div>
    <h2>Names starting with 'A'</h2>
    <ul>
      {filterdData.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  </div>
  )
}
