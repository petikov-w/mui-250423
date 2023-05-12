export const api_query = (page) => {
    return fetch(`${process.env.REACT_APP_API_TOP_PAGE}` + page, {
        headers: { 'Content-Type': 'application/json', 'X-API-KEY': `${process.env.REACT_APP_API_KEY}` },
    }).then((responce) => responce.json()).then(data => (data));
};




