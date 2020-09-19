import React from 'react'
import Card from "../components/card"
import Head from 'next/head'

const lists = [
    {
      name: "Olayinka",
      nickname: "Ameer",
      number: '081154133826'
    },
    {
      name: "Abdulsalam",
      nickname: "Abdulsalam",
      number: '09064777159'
    },
    {
      name: "Abbass",
      nickname: "Abasido",
      number: '09069274163'
    },
    {
      name: "Abdulrazaq",
      nickname: "Adesola",
      number: "081460391436"
    },
    {
      name: "Nabeel",
      nickname: "Alfa Naabeel",
      number: "07034917305"
    },
    {
      name: "Ajala",
      nickname: "Barister",
      number: "07050891436"
    },
    {
      name: "Aisha",
      nickname: "Blooded",
      number: ""
    },
    {
      name: "Faruq",
      nickname: "Akande",
      number: "09031988141"
    },
    {
      name: "Abdulbasit",
      nickname: "Al-Abadiyy",
      number: "081188446214"
    },
  ]
function members() {
    return (
        <div className="layout">
            <Head>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </Head>
            <header>
                <h1 className="header">Members</h1>
            </header>
            <div className="container">
                {lists.map((member, index) => {
                   return <Card name={member.name} key={index} id={index} number={member.number} nickname={member.nickname} />
                })}
                
            </div>
            <footer className="footer">Build with &#10084;&#65039; by <a href="abdulsalam.netlify.com" className="me">Abdulsalam</a></footer>
        </div>
    )
}

export default members
