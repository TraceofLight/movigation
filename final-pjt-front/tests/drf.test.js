import { describe, expect, it } from 'vitest'
import drf from '@/api/drf'

describe('drf api helpers', () => {
  it('builds the login endpoint from the shared host constant', () => {
    expect(drf.accounts.login()).toBe('http://localhost:8000/api/v1/accounts/login/')
  })
})
