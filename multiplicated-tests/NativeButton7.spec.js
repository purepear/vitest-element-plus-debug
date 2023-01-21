import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import NativeButton from '@/NativeButton.vue'

test('renders NativeButton', () => {
  const wrapper = mount(NativeButton, { props: { text: 'test button' }})
  
  expect(wrapper.find('button').text()).toBe('test button')
})
