import React from 'react'
import Makeup from '../../components/pages/Makeup'
import Skincare from '../../components/pages/Skincare'
import BodyCare from '../../components/pages/Bodycare'
import { Route, Routes } from 'react-router'
import Home from '../../components/pages/Home'
import Hair from '../../components/pages/Hair'
import Cloth from '../../components/pages/Cloth'
import Shoes from '../../components/pages/Shoes'
import Bags from '../../components/pages/Bags'
import Jewelry from '../../components/pages/Jewelry'
import Perfumes from '../../components/pages/Perfumes'
import Sunglases from '../../components/pages/Sunglases'
import Wallet from '../../components/pages/Wallet'
import Mirror from '../../components/pages/Mirror'
import Books from '../../components/pages/Books'
import Lego from '../../components/pages/Lego'
import Mugs from '../../components/pages/Mugs'
import Candle from '../../components/pages/Candle'

const Router = () => {
    const routers = [
        { id: 0, element: <Makeup />, path: '/makeup' },
        { id: 1, element: <Skincare />, path: '/skincare' },
        { id: 2, element: <BodyCare />, path: 'bodycare' },
        { id: 3, element: <Home />, path: '/' },
        { id: 4, element: <Hair />, path: "/hair" },
        { id: 5, element: <Cloth />, path: "/cloth" },
        { id: 6, element: <Shoes />, path: "/shoes" },
        { id: 7, element: <Bags />, path: "/bags" },
        { id: 8, element: <Jewelry />, path: "/jewelry" },
        { id: 9, element: <Perfumes />, path: '/perfumes' },
        { id: 10, element: <Sunglases />, pathh: "/sunglases" },
        { id: 11, element: <Wallet />, path: "/wallet" },
        { id: 12, element: <Mirror />, path: "/mirror" },
        { id: 13, element: <Books />, path: "/books" },
        { id: 14, element: <Lego />, path: "/lego" },
        { id: 15, element: <Mugs />, path: "/mugs" },
        { id: 16, element: <Candle />, path: "/candle" }

    ]
    return (
        <Routes>
            {routers.map(({ id, element, path }) => {
                return <Route key={id} path={path} element={element} />
            })}
        </Routes>
    )
}

export default Router