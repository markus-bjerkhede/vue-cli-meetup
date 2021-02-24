import { shallowMount } from '@vue/test-utils'
import Signup from '@/components/Signup.vue';

describe('Signup.vue', () => {
  it('Should display the upcomming meetups names when you enter the site', () => {
    const wrapper = shallowMount(Signup, {
      propsData: {
        meetup: fakeData()
      }
    });
   
    const expected = "Workout";
    const actual = wrapper.find(".name").text();
   
expect(actual).toMatch(expected);
  });