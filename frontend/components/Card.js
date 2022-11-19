import React, { useState } from 'react';

export default function Card(props) {
    const current = props.data[props.index];
    return (
        <>
            <figure className='flex-centered'>
                <h2>{current.question}</h2>
                <div className='home-menu-img'>
                <img src={current.media} alt="nft image"></img>
                    <figcaption>
                        <h2>{current.title}</h2>
                    <p>Artist: {current.owner}</p>
                    <p>TokenID: {current.nft_contract_id}</p>
                    </figcaption>
                </div>
            </figure>
        </>
    );
}