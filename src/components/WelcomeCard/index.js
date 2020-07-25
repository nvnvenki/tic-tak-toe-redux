import React, { useState } from 'react';

export default () => {

    const [ player1, setPlayer1 ] = useState("");

    const [ player2, setPlayer2 ] = useState("");

    return <div className="welcome-card-container wt-480 ht-480 border-dashed padding-x-15 mh-auto margin-top-40 border-2 border-radius-46">
        <div className="welcome-card br-46 padding-left-65 padding-right-65 padding-top-50 padding-bottom-50 bg-2 h-100 border-radius-46 shadow">
            <h2 className="fs-23 lh-25 ls-8 font-white mv-0">Welcome to <span className="uppercase font-yellow">Toc tac toe</span></h2>

            <div className="name-form w-100 margin-top-34">
                <div className="field flex flex-column w-100 margin-bottom-34">
                    <label htmlFor="player1" className="font-white uppercase fs-12 lh-18 margin-bottom-8">player 1</label>
                    <input type="text" className="input" id="player1" onChange={e => setPlayer1(e.target.value)} />
                </div>
                <div className="field flex flex-column w-100 margin-bottom-34">
                    <label htmlFor="player2" className="font-white uppercase fs-12 lh-18 margin-bottom-8">player 2</label>
                    <input type="text" className="input" id="player2" onChange={e => setPlayer2(e.target.value)} />
                </div>

                <button disabled={player1.trim() == "" || player2.trim() == ""} className="button capitalize">continue</button>
            </div>
        </div>
    </div>
}