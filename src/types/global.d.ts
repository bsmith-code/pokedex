import { ReactElement } from 'react'
import { RenderResult } from '@testing-library/react'

declare global {
  function customRender(ui: ReactElement, ui = {}): RenderResult
}

declare module 'pokeapi-typescript' {
  interface IPokemonSprites {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}
