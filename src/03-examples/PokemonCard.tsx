interface PokemonCardProps {
  id?: number,
  name?: string,
  sprites: (string | undefined)[]
}

export const PokemonCard = ({ id, name, sprites = [] }: PokemonCardProps ) => {
  return (
    <section>
      <h2 className="text-capitalize">{ id } - { name }</h2>

      {/* Imagenes */}
      <div>
        {
          sprites.map((sprite) => (
            sprites && <img 
              src={ sprite } 
              alt={ name } 
              key={ sprite }
            />
          ))
        }
      </div>
    </section>
  )
}
