// Memoriza un componente que se ejecuta cuando sus propiedades cambian, si no cambian no se ejecuta.
import { memo } from 'react';

interface SmallProps {
  value: number;
}

// Por lo general se puede haber afuera como React.memo, pero con vite no se puede.

export const Small = memo(({ value }: SmallProps) => {

  console.log('Small component called');

  return (
    <small>{ value }</small>
  )
})
