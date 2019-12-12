import {
  expect
} from 'chai'
import {
  mount
} from '@vue/test-utils'
import WeatherPage from '@/components/pages/WeatherPage.vue'

describe('WeatherPage.vue', () => {

  it('Show message that no city is selected.', () => {

    const wrapper = mount(WeatherPage, {
      computed: {
        searchedStorage: function () {
          return 'false'
        }

      }
    })

    let noCityMessage = wrapper.find('[data-tests="no-city"]').exists();
    expect(noCityMessage).to.equal(true);
  })
})