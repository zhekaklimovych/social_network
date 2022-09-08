const initialState = {
    users: [{
        userName: 'Anna Sthesia',
        status: 'admin',
        url: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/02.jpg'
    },
        {
            userName: 'Paul Molive',
            status: 'Just now',
            url: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/01.jpg'
        },
        {
            userName: 'Anna Mull',
            status: 'admin',
            url: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/03.jpg'
        },
        {
            userName: 'Paige Turner',
            status: 'admin',
            url: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/04.jpg'
        }
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;