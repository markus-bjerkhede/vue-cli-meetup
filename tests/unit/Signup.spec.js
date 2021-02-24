import { shallowMount } from '@vue/test-utils'
import SignUp from '@/components/Signup.vue';

describe('SignUp.vue', () => {
    it('Should show sign up button if logged in and not signed up', () => {
        const wrapper = shallowMount(SignUp, {

        });
        expect(wrapper.find('.sign-up-button').exists()).toBe(true);
    });
});
function getFakeSignups() {
    let signups =
        [{
            "meetingId": 1,
            "user": "Markus"
        }];
    return signups
}
