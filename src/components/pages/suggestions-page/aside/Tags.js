import React, { useState } from 'react';
import { PropTypes } from "prop-types";

import Tag from './Tag';

function Tags({ getActiveTag }) {
    const [tags, setTags] = useState([
        { name: 'All', isSelected: true },
        { name: 'Environment', isSelected: false },
        { name: 'Work-Life Balance', isSelected: false },
        { name: 'Recognition and Rewards', isSelected: false },
        { name: 'Training and Development', isSelected: false },
        { name: 'Communication', isSelected: false },
        { name: 'Others', isSelected: false }
    ]);

    function changeActiveTag(clickedTagIndex) {
        const updatedTags = tags.map((tag, index) => 
            {
                if (index === clickedTagIndex) 
                    return tag = { name: tag.name, isSelected: true };

                else 
                    return tag = { name: tag.name, isSelected: false };
            }
        )

        getActiveTag(updatedTags.filter(tag => tag.isSelected === true)[0].name)
        
        setTags(updatedTags);
    }

    return ( 
        <section className="tags-container">
            <h2 className="screen-reader-only">
                Suggestions tags
            </h2>

            <ul className="tags">
                {
                    tags.map((tag, index) => 
                        <Tag 
                            key={ index }
                            tagName={ tag.name } 
                            isSelected={ tag.isSelected } 
                            index={ index }
                            setActive={ changeActiveTag }
                        />
                    )
                }
            </ul>
        </section>
     );
}

Tags.propTypes = { getActiveTag: PropTypes.func.isRequired }

export default Tags;