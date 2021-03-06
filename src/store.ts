import Vue from 'vue';
import Vuex from 'vuex';
import firstSlider from './modules/firstSlider';
import secondSlider from './modules/secondSlider';
import foodMenu from './modules/foodMenu';
import clientsReviews from './modules/clientsReviews';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    firstSlider,
    secondSlider,
    foodMenu,
    clientsReviews,
  },
  state: {
    cartItems: 1,
    keyWord: 'all',
    currentReviewsIndex: 0,
    isOpenMenu: false,
  },
  mutations: {
    addCartItem(state: any): void {
       state.cartItems++;
    },
    changeFilterKeyWord(state: any, payload: string): void {
      state.keyWord = payload;
    },
    changeReviewIndex(state: any, payload: string): void {
        if (payload === 'next') {
          state.currentReviewsIndex++;
        } else {
          state.currentReviewsIndex--;
        }
    },
    openMenu(state: any): void {
      state.isOpenMenu = !state.isOpenMenu;
    },
  },
  getters: {
    getCartItems: (state: any): number => state.cartItems,
    getFilterKeyWord: (state: any): string => state.keyWord,
    getCurrentReviewsIndex: (state: any): number => state.currentReviewsIndex,
    getMenuStatus: (state: any): boolean => state.isOpenMenu,
  },
  actions: {
    changeFilter(context, word: string): void {
      context.commit('changeFilterKeyWord', word);
    },
    changeReview(context, action: string): void {
      context.commit('changeReviewIndex', action);
    },
    openMenu(context): void {
      context.commit('openMenu');
    },
  },
});
