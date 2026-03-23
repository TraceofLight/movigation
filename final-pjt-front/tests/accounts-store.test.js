import { beforeEach, describe, expect, it, vi } from 'vitest'

import accounts from '@/store/modules/accounts'

describe('accounts store actions', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('persists the saved token to local storage', () => {
    const commit = vi.fn()

    accounts.actions.saveToken({ commit }, 'token-123')

    expect(commit).toHaveBeenCalledWith('SET_TOKEN', 'token-123')
    expect(localStorage.getItem('token')).toBe('token-123')
  })
})
