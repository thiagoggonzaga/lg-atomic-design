import { shallowMount } from '@vue/test-utils';
import LGInputText from '@/components/atoms/lg-input-text/lg-input-text.vue';

describe('lg-input-text.vue', () => {
  it('Adicione valor "LG lugar de gente" ao input', () => {
    const texto = 'LG lugar de gente';
    const wrapper = shallowMount(LGInputText, {
      propsData: { value: texto },
      mocks: {
        $t: () => { },
      },
    });

    expect(wrapper.text()).toMatch(texto);
  });
});
