import { h } from 'vue'
import { describe, expect, it } from 'vitest'

import { createMovigationApp } from '@/main'

describe('app entry', () => {
  it('creates the frontend app with router and store plugins', () => {
    const RootComponent = {
      render() {
        return h('div', 'movigation')
      },
    }

    const { app, router, store } = createMovigationApp(RootComponent)

    expect(app).toBeTruthy()
    expect(router).toBeTruthy()
    expect(store).toBeTruthy()
  })
})
