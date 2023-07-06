export  const fetchQueryFromApi = async (query) => {
    const request = await fetch(query, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
        },
    });    
    return await request.json();
};



