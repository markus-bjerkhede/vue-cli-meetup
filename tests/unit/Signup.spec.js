import { shallowMount } from '@vue/test-utils'
import SignUp from '@/components/Signup.vue';

describe('SignUp.vue', () => {
    it('Should show signed up text signed up', () => {
        localStorage.clear();
        localStorage.setItem("username", "Markus");
        localStorage.setItem("signedUp", JSON.stringify(getFakeSignups("Markus")));
        const wrapper = shallowMount(SignUp, {
            propsData: {
                meetupId: 1
            },
        });

        expect(wrapper.find('.signed-up').exists()).toBe(true);
    });

    it('Should show sign up button if not signed up', () => {
        localStorage.clear();
        localStorage.setItem("username", "Not Markus");
        localStorage.setItem("signedUp", JSON.stringify(getFakeSignups("Markus")));
        const wrapper = shallowMount(SignUp, {
            propsData: {
                meetupId: 1
            },
        });

        expect(wrapper.find('.not-signed-up').exists()).toBe(true);
    });
    it('Should sign up as anon when not logged in and signing up.', () => {
        const expected = "anon"
        localStorage.clear();
        localStorage.setItem("signedUp", JSON.stringify(getFakeSignups(expected)));
        const wrapper = shallowMount(SignUp, {
            propsData: {
                meetupId: 1
            },
        });
        const actual = wrapper.find(".display-username").text();
        expect(actual).toMatch(expected);
        expect(wrapper.find('.signed-up').exists()).toBe(true);
    });
});
function getFakeSignups(username) {
    let signups =
        [
            {
                "meetupId": 1,
                "name": username
            },
        ];
    return signups;
}