import React from 'react'

const BlogParagraph = (
    { children }: { children: React.ReactNode | string }
) => {
    return (
        <p className='mb-4'>
            {children}
        </p>
    )
}

export default BlogParagraph