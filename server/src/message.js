//On se contentera d'une liste pour simuler la base de données.
var messages = [{auteur: "Arthur", texte: "Hé !",}, 
                {auteur: "Arthur", texte: "Comment je m'appelle ?"},
                {auteur: "Kadoc", texte: "Kaamelot ?"}]

module.exports = {
    
    //La fonction de renvoi de messages devrait faire une requête à la base de donénes pour récupérer les messages.
    //On se contente d'une liste pour le moment.
    getMessages(_, res){
        res.send(messages)
    },



}