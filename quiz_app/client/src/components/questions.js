import React, { useState } from 'react';

export default function Questions() {
    const [checked, setChecked] = useState(false);  // or any appropriate initial value

    function onSelect() {
      
        console.log('radio button change');
        setChecked(!checked); // Toggle the checked state
    }

    return (
        <div className='questions'>
            <h2 className='text-light'>Simple Question 1</h2>
            <ul>
                <li>
                    <input
                        type="radio"
                        checked={checked}
                        name="options"
                        id='q1-option'
                        onChange={onSelect} // Pass the function reference
                    />
                </li>
            </ul>
        </div>
    );
}
