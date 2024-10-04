export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-black text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Acerca del Evento
        </h2>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="aspect-w-16 aspect-h-9">
            <img
              alt="Imagen representativa de la cultura indígena"
              className="mx-auto w-full h-full overflow-hidden rounded-xl object-cover object-center"
              src="/heroim.jpeg"
            />
          </div>
          <div className="space-y-4">
            <p className="text-gray-800 text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl leading-relaxed">
              Este evento es una celebración de la profunda herencia cultural de
              la comunidad Rarámuri, conocida por su resiliencia y su conexión
              espiritual con la naturaleza. A través de sus artesanías,
              tradiciones y valores como la solidaridad y el respeto mutuo,
              buscamos generar conciencia sobre la importancia de preservar y
              honrar estas culturas indígenas.
            </p>
            <p className="text-gray-800 text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl leading-relaxed">
              Contaremos con la participación de líderes comunitarios Rarámuri y
              artesanos locales, quienes compartirán sus conocimientos sobre su
              estilo de vida, sus rituales y su arte, permitiendo a los
              asistentes sumergirse en la riqueza de sus costumbres y
              tradiciones. Además, habrá exhibición y venta de textiles
              artesanales que reflejan la identidad de esta comunidad y su
              conexión con la tierra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
