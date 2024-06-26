export const mainModule = {
  state: () => ({
    guests: [],
    menuItems: [],
  }),
  mutations: {
    setGuests(state, guests) {
      state.guests = guests;
    },
    setMenuItems(state, menuItems) {
      state.menuItems = menuItems;
    },
    addGuests(state, guest) {
      state.guests.push(guest);
    },
    removeGuests(state, guest) {
      state.guests = state.guests.filter(p => p.id != guest.id)
    },
    addMenuItem(state, menuItem) {
      state.menuItems.push(menuItem);
    },
    removeMenuItems(state, menuItem) {
      state.menuItems = state.menuItems.filter((p) => p.id != menuItem.id);
    },
  },
  namespaced: true,
};
