// ButtonList.jsx
import React from 'react'

const buttonList = ["All", "React router", "Gaming", "Web Development", "Science fiction", "Action Thriller", "Podcast", "Software development", "Supervillions", "Bat-Man", "Code refactoring", "office", "Data type", "Startup company", "Machine learning", "Live", "Computer Hardware", "Recruitment", "Recently uploaded", "Watched", "New to you"]

export default function ButtonList() {
  return (
    <div className=' py-4'>
        {buttonList.map((item, index) => {
            return(
                <button key={index} type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-4 py-1.5 mx-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-all">{item}</button>
            )
        })}
        
    </div>
  )
}
