import React from 'react'
import { Link } from 'react-router-dom'
import Makeup from '../../Makeup'
import Skincare from '../../Skincare'
import BodyCare from '../../Bodycare'
import "./style.css"
import skincare from '../../../../../public/img/skincare.png'
import bodycare from '../../../../../public/img/bodycare.png'
import hair from '../../../../../public/img/hair.jpg'
import makeup from '../../../../../public/img/makeup.png'
import cloth from '../../../../../public/img/cloth.png'
import shoes from '../../../../../public/img/shoes.jpg'
import bags from '../../../../../public/img/bags.jpg'
import jelewry from '../../../../../public/img/jelewry.png'
import perfume from '../../../../../public/img/perfume.png'
import sunglases from '../../../../../public/img/sunglases.jpg'
import mirror from '../../../../../public/img/mirror.jpg'
import book from '../../../../../public/img/book.png'
import lego from '../../../../../public/img/lego.jpg'
import mug from '../../../../../public/img/mugs.jpg'
import candle from '../../../../../public/img/candle.jpg'
import wallet from '../../../../../public/img/wallet.png'






const Selection = () => {
    return (
        <div className='section'>
            <h2>Section</h2>
            <div className="top1">
                <div className="sec-top1">
                    <div className="sec1">
                        <Link className='a' to='/skincare'><img src={skincare} alt="skincare" /></Link>
                        <p className='tag-name'>Skincare</p>
                    </div>
                    <div className="sec1">
                        <Link className='a' to='/bodycare'><img src={bodycare} alt="bodycare" /></Link>
                        <p className='tag-name'>Bodycare</p>
                    </div>
                    <div className="sec1">
                        <Link className='a' to='/hair'><img src={hair} alt="hair" /></Link>
                        <p className='tag-name'>Hair</p>
                    </div>
                    <div className="sec1">
                        <Link className='a' to='/makeup'><img src={makeup} alt="makeup" /></Link>
                        <p className='tag-name'>Makeup</p>
                    </div>
                </div>

                <div className="sec-top1">
                    <div className="sec1">
                        <Link className='a' to='/cloth'><img src={cloth} alt="cloth" /></Link>
                        <p className='tag-name'>Cloth</p>
                    </div>
                    <div className="sec1">
                        <Link className='a' to='/shoes'><img src={shoes} alt="shoes" /></Link>
                        <p className='tag-name'>Shoes</p>
                    </div>
                    <div className="sec1">
                        <Link className='a' to='/bags'><img src={bags} alt="bags" /></Link>
                        <p className='tag-name'>Bags</p>
                    </div>
                    <div className="sec1">
                        <Link className='a' to='/jewelry'><img src={jelewry} alt="jewelry" /></Link>
                        <p className='tag-name'>Jewelry</p>
                    </div>
                </div>

                <div className="sec-top1">
                    <div className="sec1">
                        <Link className='a' to='/perfumes'><img src={perfume} alt="perfumes" /></Link>
                        <p className='tag-name'>Perfumes</p>
                    </div>
                    <div className="sec1">
                        <Link className='a' to='/sunglases'><img src={sunglases} alt="sunglases" /></Link>
                        <p className='tag-name'>Sunglases</p>
                    </div>
                    <div className="sec1">
                        <Link className='a' to='/wallet'><img src={wallet} alt="wallet" /></Link>
                        <p className='tag-name'>Wallet</p>
                    </div>
                    <div className="sec1">
                        <Link className='a' to='/mirror'><img src={mirror} alt="mirror" /></Link>
                        <p className='tag-name'>Mirror</p>
                    </div>
                </div>

                <div className="sec-top1">
                    <div className="sec1">
                        <Link className='a' to='/books'><img src={book} alt="books" /></Link>
                        <p className='tag-name'>Book</p>
                    </div>
                    <div className="sec1">
                        <Link className='a' to='/lego'><img src={lego} alt="lego" /></Link>
                        <p className='tag-name'>Lego</p>
                    </div>
                    <div className="sec1">
                        <Link className='a' to='/mugs'><img src={mug} alt="mugs" /></Link>
                        <p className='tag-name'>Mug</p>
                    </div>
                    <div className="sec1">
                        <Link className='a' to='/candle'><img src={candle} alt="candle" /></Link>
                        <p className='tag-name'>Candle</p>
                    </div>
                </div>

                

            </div>


        </div>
    )
}

export default Selection