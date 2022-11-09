import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    /* Use the map() function to render multiple Blocks! */
    const [block, setBlock] = useState([]);
    const handleClick = (color) => {
        const copy = posts.slice()
        copy.push(color)
        setBlock(copy)
    }
    const posts = block.map((post, index) => 
        <Block key = {index} color = {post} caption = {post}></Block>
    ); // TODO: edit this variable
    //edit variable to represent multiple block components 


    return (
        <div>
            <Menu handleClick = {handleClick}></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;