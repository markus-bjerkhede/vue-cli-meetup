import { shallowMount } from '@vue/test-utils'
import SignUp from '@/components/Signup.vue';

describe('SignUp.vue', () => {
    it('Should show sign up button if not signed up', () => {
        const wrapper = shallowMount(SignUp, {
            data() {
                return {
                    signups: getFakeSignups(),
                    username: "Markus"
                }
            },
            propsData: {
                meetupId: 1
            }

        });
        expect(wrapper.find('.signed-up').exists()).toBe(true);
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
