import React from 'react'
import 'bulma/css/bulma.min.css';
import diego from './assets/diego2.jpeg';
import './App.css'
import alait from './assets/alait.jpeg'
import jeff from './assets/jeff.jpeg'
import aren from './assets/aren.jpeg'

function Officers() {


  const posts = [
    { id: 1, name: 'Muneeb Shuaib', role: 'Current President', content: 'Muneeb primarily codes full stack with MERN. He was the first president to bring the Coding Club to in person meetings.', linkedin: 'https://www.linkedin.com/in/muneeb-shuaib-9a1b171b4/', github: 'https://github.com/MuneebShuaib', img: '', alt: '' },
    { id: 2, name: 'Hazrat Alkozai', role: 'Current Vice President', content: 'Hazrat is really good at cybersecurity and works in tech as technical support. He recently earned his CCNA.', linkedin: 'https://www.linkedin.com/in/hazratalkozai/', github: '', img: '', alt: '' },
    { id: 3, name: 'Diego Fonseca', role: 'Current Treasurer', content: 'Diego is a low level programmer who also programs in Haxe. He also works at a startup and contributes to open source.', linkedin: 'https://www.linkedin.com/in/diego-a-fonseca/', github: 'https://github.com/Just-Feeshy', img: diego, alt: 'Diego\'s picture' },
    {
      id: 4, name: 'Alait Mesfune', role: 'Curent Secretary', content: 'Alait is a beginner programmer and the secretary for the club, he mainly handles the communications and announcements to members.', linkedin: 'https://www.linkedin.com/in/alait-mesfune-9901b726b/', github: 'https://github.com/tiala32', img: alait, alt: 'Alait\'s Picture'
    },

    { id: 5, name: 'Jeffrey Dinackus', role: 'Former President', content: 'Jeffrey was the president for Summer 2023, he since graduated NVCC and got a job as a systems administrator. He\'s also the person who built the website you are current browsing.', linkedin: 'https://www.linkedin.com/in/jeffdinackus/', github: 'https://github.com/jeffreydinackus', img: jeff, alt: 'Jeff\s Pic' },
    { id: 6, name: 'Aren Waheed', role: 'Former President', content: 'Aren has graduated NVCC and now goes to Virginia Tech where he is close to graduating. He is still active in the club through discord.', linkedin: 'http://www.linkedin.com/in/arenwaheed', github: 'https://github.com/arenimations', img: aren, alt: '' },





  ];





  const listItems = posts.map(a => <div key={a.id}><h1 className="is-size-2">{a.name}</h1>
    <p key={`role_${a.id}`} className='is-size-4'>{a.role}</p>

    <img src={a.img} className='image img-officer' alt={a.alt} />
    <p key={`content_${a.id}`} className='is-size-4'>{a.content}</p>
    <p key={`linkedin_${a.id}`} className='is-size-4'><a href={a.linkedin}>{a.linkedin}</a></p>
    <p key={`github_${a.id}`} className='is-size-4'><a href={a.github}>{a.github}</a></p>




  </div>




  );



  return (
    <>


      <div className="has-background-light"><div className="container">{listItems}</div></div></>
  )
}

export default Officers
