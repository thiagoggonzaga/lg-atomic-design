import { shallowMount } from '@vue/test-utils';
import LGButton from '@/components/atoms/lg-button/lg-button.vue';

describe('lg-button.vue', () => {
  it('Renderize a label passada', () => {
    const label = 'Nova Label';
    const wrapper = shallowMount(LGButton, {
      propsData: { label },
      mocks: {
        $t: () => { },
      },
    });

    expect(wrapper.text()).toMatch(label);
  });
});
