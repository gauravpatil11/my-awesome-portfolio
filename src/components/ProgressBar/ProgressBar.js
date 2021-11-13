import React from 'react'

const ProgressBar = ({ progressPercentage }) => {
    return (
        <div className='h-6 w-full bg-gray-300'>
            <div
                style={{ width: `${progressPercentage}%`}}
                className='h-full bg-purple-400 text-center'>
                {progressPercentage}%
            </div>
        </div>
    );
};

export default ProgressBar
