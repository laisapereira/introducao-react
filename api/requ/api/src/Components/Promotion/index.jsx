import React from 'react'
import './card.css'


//no footer fazer uma conditional rendering, conferir primeiro se há comentários pra serem exibidos
// havendo, nome do atributo, id dele no array qual é comentário

// target blank - pra abrir o link em outra página
// depois do PromotionCard tem o {promotion} como parametro pra que
// nao precise ficar chamando cada propriedade lá no App.jsx, já chama as propriedades alteradas

const PromotionCard = ({promotion}) => (
        <div className="card">
            <img src={promotion.imageUrl} className="card-image"></img>
            <div className="card-info">
                <h1 className="card-title">{promotion.title}</h1>
                <span className="card-price"> R${promotion.price}</span>
                <footer className="card-footer"> 
                    {promotion.comments.length > 0 && (
                        <div className='card-comment'> 
                            "{promotion.comments[0].comment}" 
                            </div>
                    )}

                    <div className="card-comment-count">
                       <p> {promotion.comments.length}{''} </p>
                       <p>{promotion.comments.length > 1 ? 'Comentários' : 'Comentário'} </p>
                        
                        <a href = {promotion.url} target='_blank' className="card-link"> IR PARA O SITE</a>
                    </div>
                    
                </footer>
            </div>
        </div>
    
);

export default PromotionCard;
