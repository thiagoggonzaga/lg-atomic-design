import Vue from 'vue';

// Atoms
import Button from '@/components/atoms/lg-button/lg-button';

// Molecules
import InputButton from '@/components/molecules/lg-input-button/lg-input-button';
import Card from '@/components/molecules/lg-card-action/lg-card-action';

// Organisms
import ListCard from '@/components/organisms/lg-list-card/lg-list-card';

Vue.component(Button.name, Button);
Vue.component(InputButton.name, InputButton);
Vue.component(Card.name, Card);
Vue.component(ListCard.name, ListCard);
