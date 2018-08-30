export default  {
        getHeader () {
        const headers = {
            'Accept': 'application/json',  
            'Authorization': 'Bearer '+ localStorage.getItem('token')
        }
        return headers
    }
}