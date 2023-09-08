const INITIAL_STATE={
    sections: [
        {
            title : 'Mech.',
            img : 'https://images.unsplash.com/photo-1616723824685-30ca03b667f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            id : 1,
            linkUrl : 'shop/mechanical'
            

        },
        {
            title : 'Minimal',
            img : 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            id : 2,
            linkUrl : 'shop/minimals'
        },
        {
            title : 'Sporty',
            img : 'https://images.unsplash.com/photo-1596574556890-40f0563f2bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=372&q=80',
            id : 3,
            linkUrl : 'shop/sporty'
        },
        {
            title : 'womens',
            size : 'large',
            img : 'https://images.unsplash.com/photo-1584208123923-cc027813cbcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            id : 4,
            linkUrl : 'shop/womens',
        },
        {
            title : 'Mens',
            size : 'large',
            img : 'https://images.unsplash.com/photo-1602024305864-8a1a2e5fd90d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fG1lbiUyMHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            id : 5,
            linkUrl : 'shop/mens'
        },
    
    ]
}
const directoryReducer = (state= INITIAL_STATE, action)=>{
    switch(action.type ){
        default : 
            return state;
    }

}
export default directoryReducer