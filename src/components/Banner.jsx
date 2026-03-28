function Banner({ title, image, alt = '', variant = '' }) {
  const bannerClassName = variant
    ? `banner banner--${variant}`
    : 'banner'

  return (
    <section
      className={bannerClassName}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
      }}
      aria-label={alt}
    >
      {title && <h1 className="banner__title">{title}</h1>}
    </section>
  )
}

export default Banner