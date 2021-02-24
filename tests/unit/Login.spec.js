import { shallowMount } from '@vue/test-utils'
import Login from '@/components/Login.vue';

describe('Login.vue', () => {
    it('Should show login form', () => {
        const wrapper = shallowMount(Login, {

        });
        expect(wrapper.find('.login-form').exists()).toBe(true);
    });
    it('Should show login view', () => {
        const wrapper = shallowMount(Login, {

        });
        const expected = "Markus"
        localStorage.setItem("username", expected)
        const actual = wrapper.find(".login-name").text();
        expect(actual).toMatch(expected);
    });
});