interface ShowIncrementProps {
  increment: () => void;
}

export const ShowIncrement = ({ increment }: ShowIncrementProps) => {

  console.log('Me volví a generar :(');

  return (
    <button
      className="btn btn-primary"
      onClick={ () => {
        increment();
      }}
    >
      Incrementar
    </button>
  )
}
