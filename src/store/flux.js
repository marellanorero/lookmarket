const getState = ({ getStore, getActions, setStore }) => {
    return{
        store: {
            show:[],
            len: [],
            price:[],
            itemToDelete:[],
            found: []
        },
        actions:{
           addToCart: (item) => {
               const {show, len} = getStore();
                if(show.find((fav)=> fav === item)){
                   len.push(item) 
                   setStore(len)
                } else {
                    if(item === undefined){
                        return;
                    }else{
                     show.push(item)
                    }
                    setStore([...show, item])
                }
                console.log(show, len)
            },
            clearCart: () => {
                const {show} = getStore();
                show.length = 0
                setStore(show)
            },
            delFromCart: item => { 
                const {show, len} = getStore();
                if(show.find((fav)=> fav === item)){
                   setStore(len.length -1)
                 } else {
                show.length = 0
                setStore(show)   
                 }
                
                
            },
            delAllFromCart: (item) => {
                const {show} = getStore();
				let filtered = show.filter((fav) => 
					fav !== item
				)
				setStore({show: filtered});
            },
            resumeCart: (item) => {
                const {show, found} = getStore();
                if(show.find((fav) => fav === item)){
                    if(found.find((fav) => fav === item)){
                        found.push(item)
                        setStore(found)
                    } else {
                        return;
                    }}
            }
       }
    }
}

export default getState;