import React from 'react'

export default function InfoCard({ cover, title, release, director, genre, country, colorTheme }) {


    return (
        <div className='relative'>
            <div className='flex flex-col space-y-4 border-black rounded-lg border-4 px-10 pt-10 pb-5 items-center relative bg-white z-[2]'>
                <div className='relative size-full mb-2'>
                    <img className='size-full rounded-lg border-black border-4' src={cover} alt={`${title ? title : 'title not available'}'s cover image`} />
                    <div className={`absolute w-full h-full rounded-lg border-4 border-dashed border-black -z-[2] -bottom-4 -right-4 ${colorTheme % 3 === 0 ? 'bg-yellow-400' : colorTheme % 3 === 1 ? 'bg-orange-400' : 'bg-red-400'}`}></div>
                </div>
                <span className='font-semibold'>Title: <span className={`font-extrabold text-xl ${colorTheme % 3 === 0 ? 'text-yellow-400' : colorTheme % 3 === 1 ? 'text-orange-400' : 'text-red-400'}`}>{`${title ? title : "Movie title"} (${release.slice(0, 4)})`}</span></span>
                <span className='font-semibold'>Director: <span className={`font-extrabold text-xl ${colorTheme % 3 === 0 ? 'text-yellow-400' : colorTheme % 3 === 1 ? 'text-orange-400' : 'text-red-400'}`}>{director}</span></span>
                <span className='font-semibold'>Genre: <span className={`font-bold ${colorTheme % 3 === 0 ? 'text-yellow-400' : colorTheme % 3 === 1 ? 'text-orange-400' : 'text-red-400'}`}>{genre ? genre : 'Not avaible'}</span></span>
                <span className='font-semibold'>Country/Language: <span className={`font-bold ${colorTheme % 3 === 0 ? 'text-yellow-400' : colorTheme % 3 === 1 ? 'text-orange-400' : 'text-red-400'}`}>{country ? country : 'Country not avaible'}</span></span>
            </div>
            <div className={`absolute w-full h-full rounded-lg border-4 border-dashed border-black z-[0] -bottom-4 -right-4 ${colorTheme % 3 === 0 ? 'bg-yellow-400' : colorTheme % 3 === 1 ? 'bg-orange-400' : 'bg-red-400'}`}></div>
        </div>
    );
}
