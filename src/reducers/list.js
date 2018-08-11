import indexListData from "../views/index/data";

function list (state={
    loading: true,
    indexListData: indexListData.data,
}, action) {
    switch (action.type) {
        default: 
            return state;
    }
}
export default list;