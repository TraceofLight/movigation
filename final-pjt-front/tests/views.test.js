import { createStore } from 'vuex'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import ProfileView from '@/views/ProfileView.vue'
import SearchView from '@/views/SearchView.vue'

describe('simplified views', () => {
  it('renders a movie search screen with a title search input', () => {
    const wrapper = mount(SearchView)

    expect(wrapper.text()).toContain('Movie Search')
    expect(wrapper.find('input[placeholder="Search by title"]').exists()).toBe(true)
  })

  it('renders the current user profile summary', () => {
    const store = createStore({
      getters: {
        isLoggedIn: () => true,
        currentUser: () => ({
          username: 'tester',
          nickname: 'Test User',
          like_genres: [1, 2],
          like_movies: [10],
          reviews: [],
        }),
        profile: () => ({
          username: 'tester',
          nickname: 'Test User',
          like_genres: [1, 2],
          like_movies: [10],
          reviews: [],
          phone_number: '01012345678',
        }),
      },
      actions: {
        fetchProfile: () => Promise.resolve(),
      },
    })

    const wrapper = mount(ProfileView, {
      global: {
        plugins: [store],
      },
    })

    expect(wrapper.text()).toContain('My Profile')
    expect(wrapper.text()).toContain('tester')
    expect(wrapper.text()).toContain('Favorite Genres')
  })
})
