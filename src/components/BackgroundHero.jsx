const BackgroundHero = ({children}) => {
  return (
    <div className="bg-hero-mobile w-full h-[1218px] bg-cover bg-no-repeat">
      {children}
    </div>
  )
}

export default BackgroundHero