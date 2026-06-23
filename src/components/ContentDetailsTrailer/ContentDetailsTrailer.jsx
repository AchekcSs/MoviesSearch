const ContentDetailsTrailer = ({ trailer }) => {
  return (
    <section className="w-full mb-30">
      <iframe src={trailer} title="Movie Trailer" className="w-full aspect-video rounded-lg" allow="accelerometer; clipboard-write; encrypted-media, gyroscope; picture-in-picture" allowFullScreen></iframe>
    </section>
  )
}

export default ContentDetailsTrailer
