export const mainModule = {
    state: () => ({
        guests: [],
        menuItems: []
    }),
    getters: {

    },
    mutations: {
        setGuests(state, guests) {
            state.guests = guests;
        },
        setMenuItems(state, menuItems) {
            state.menuItems = menuItems;
        },
        setAddGuests(state, guest) {
            state.guests.push(guest);
        },
        setRemoveGuests(state, guest) {
            state.guests = state.guests.filter(p => p.id != guest.id)
        },
        setAddMenuItem(state, menuItem) {
            state.menuItems.push(menuItem);
        },
        setRemoveMenuItems(state, menuItem) {
            state.menuItems = state.menuItems.filter(p => p.id != menuItem.id)
        }
    },
    actions: {

    },
    namespaced: true
}