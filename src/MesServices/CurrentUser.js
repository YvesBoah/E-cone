export default {
    // getToken recupère le jeton de l'utilisateur connecté
    // getUser recupère les infos de l'utilisateur connecté
    // DeleteToken Supprime le Token de l'utilisateur connecté
    
    getToken () {
        return  localStorage.getItem('token');
    },
    getUser () {
        return  localStorage.getItem('user');
    },
  DeleteToken () {
    return localStorage.removeItem('token');
  },
getMyName () {
    return  localStorage.getItem('MyUser');
},
getMyPrenom () {
    return  localStorage.getItem('MyPrenom');
},
getMyTel () {
    return  localStorage.getItem('MyTel');
},
getMyEmail() {
    return  localStorage.getItem('MyEmail');
}
}