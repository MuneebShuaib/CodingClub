import React from 'react'
import { Props } from 'react';

function Officers() {


  const posts = [
    { id: 1, name: 'Muneeb Shuaib', role: 'Current President', content: 'Muneeb primarily codes full stack with MERN. He was the first president to bring the Coding Club to in person meetings.', linkedin: '', github: '' },
    { id: 2, name: 'Hazrat', role: 'Current Vice President', content: 'Hazrat is really good at cybersecurity and works in tech as technical support.', linkedin: '', github: '' },
    { id: 3, name: 'Diego', role: 'Current Treasurer', content: 'Diego is a low level programmer in his first semester at NVCC. He also works at a startup and contributes to open source.', linkedin: '', github: '' },
    { id: 4, name: 'Alait', role: 'Curent Secretary', content: '', linkedin: '', github: '' },

    { id: 5, name: 'Jeffrey Dinackus', role: 'Former President', content: 'Jeffrey was the president for Summer 2023, he since graduated NVCC and got a job as a systems administrators. He\'s also the person who built the website you are current browsing.', linkedin: '', github: '' },
    { id: 6, name: 'Aren', role: 'Former President', content: 'Aren has graduated NVCC and now goes to Virginia Tech where he is close to graduating. He is still active in the club through discord.', linkedin: '', github: '' },





  ];





  const listItems = posts.map(a => <div key={a.id}><h1 className="is-size-2" key={a.id}>{a.name}</h1>

    <p key={a.id} className='is-size-4'>{a.role}</p>
    <p key={a.id} className='is-size-4'>{a.content}</p>
    <p key={a.id} className='is-size-4'>{a.linkedin}</p>
    <p key={a.id} className='is-size-4'>{a.github}</p>




  </div>




  );



  return (
    <><div className="container">{listItems}</div></>
  )
}

export default Officers