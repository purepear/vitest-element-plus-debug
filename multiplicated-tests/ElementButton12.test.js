/**
 * @jest-environment jsdom
 */

import { mount } from '@vue/test-utils'

import ElementButton from '@/ElementButton.vue'

test('renders ElementButton', () => {
  const wrapper = mount(ElementButton, { props: { text: 'test button' }})

  expect(wrapper.find('button').text()).toBe('test button')
})
