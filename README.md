# Proyecto de Práctica de Hooks en React

Este proyecto está diseñado para practicar el uso de varios hooks de React, incluyendo `useState`, `useEffect`, `useRef`, `useMemo`, `useCallback`, `useReducer` y `useContext`. Cada uno de estos hooks se utiliza en diferentes componentes para ilustrar su funcionalidad y cómo pueden ser aplicados en una aplicación de React.

## Hooks Incluidos

- **useState**: Para manejar el estado en componentes funcionales.
- **useEffect**: Para manejar efectos secundarios como la obtención de datos, suscripciones, o cambios manuales en el DOM.
- **useRef**: Para acceder a elementos del DOM directamente y mantener referencias mutables.
- **useMemo**: Para memorizar valores calculados y evitar cálculos costosos en cada renderizado.
- **useCallback**: Para memorizar funciones y evitar recrearlas en cada renderizado.
- **useReducer**: Para manejar el estado complejo y la lógica de actualización.
- **useContext**: Para compartir valores entre componentes sin necesidad de pasar props manualmente.

## Cómo Probar Cada Hook

Para probar un hook en particular, sigue estos pasos:

1. Abre el archivo `main.tsx`.
2. Descomenta el import del componente correspondiente al hook que deseas probar.
3. Llama al componente en el renderizado principal.

Por ejemplo, si deseas probar el hook `useState`, descomenta el import y la llamada al componente `UseStateComponent` en `main.tsx`:

```tsx
// main.tsx

import React from 'react';
import ReactDOM from 'react-dom';
// Descomenta el siguiente import para probar useState
// import UseStateComponent from './components/UseStateComponent';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      {/* Aqui va el componente */}
      <UseStateComponent />
    </StrictMode>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));