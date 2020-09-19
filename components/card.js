import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


function card({id,name, number, nickname}) {
    return (
        <div>
                <div className="card">
                     <div className="box" >
                         <div className="content">
    <h1>0{id}</h1>
                             <div className="content__header">
                                <h3 className="name">Name:&nbsp;{name}</h3>
                                <h3 className="nickname">Nickname: {nickname}</h3>
                             </div>
                             <div className="content__body">
                                <h5>About</h5>
                                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

                             </div>

                             <div className="content__footer">
                                 <h3 className="m-b-1">Contact</h3>
                                 <div className="flex">
                                     <a href={`https://wa.me/${number}?text=I'm%20${name}%20from%20Circle%20of%20love%20platform`} className="m-r-20 icons">
                                        <FontAwesomeIcon icon={faWhatsapp}  size="2x"  />
                                     </a>
                                     <a href="https://twitter.com/200_Developer?ref_src=twsrc%5Etfw" className="m-r-20 icons" data-show-count="false">
                                        <FontAwesomeIcon icon={faTwitter}  size="2x"  className="m-r-3" />
                                     </a>

                                     <a href="https://www.facebook.com/abodunrin.abdulsalamoladeji/
" className="m-r-20 icons">
                                        <FontAwesomeIcon icon={faFacebookF} size="2x"  className="m-r-3"  />
                                     </a>
                                    

                                     <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

                                 </div>
                             </div>
                         </div>
                     </div>

                </div>
           
        </div>
    )
}

export default card
