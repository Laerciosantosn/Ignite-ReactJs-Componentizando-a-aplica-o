import React from 'react'

interface SelectedGenreTitleProps {
  title: string;
}

function Header(genre: SelectedGenreTitleProps) {
  return (
    <header>
    <span className="category">Categoria:<span> {genre.title}</span></span>
  </header>
  )
}

export default Header
