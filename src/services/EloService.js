import axios from 'axios'

const ELO_REST_API_URL = 'http://localhost:8080/api/elo/';

class UserService {

    //- `Матч` Рейтинг двух команд до и после матча
    eloChange(matchID){
        return axios.get(ELO_REST_API_URL + 'diff?matchID=' + matchID)
    }

    // - `Команда` Рейтинг команды на указанную дату
    current(teamID,date){
        console.log(date)
        console.log(date.replace('T',' ') + ':00')
        console.log(date)
        return axios.get(ELO_REST_API_URL + 'cur?teamID=' + teamID + '&date=' + date.replace('T',' ') + ':00')
    }

    // - `Команда`  `График` Рейтинг команды за всю историю
    teamHistory(teamID){
        return axios.get(ELO_REST_API_URL + 'rating?teamID=' + teamID)
    }

    // - `Команда` Максимальный рейтинг  команды (значение и дата)
    max(teamID){
        return axios.get(ELO_REST_API_URL + 'max?teamID=' + teamID)
    }

    // - `Рейтинг` Рейтинг всех команд на указанную дату
    currentAll(date){
        return axios.get(ELO_REST_API_URL + 'stats?date=' + date.replace('T',' ') + ':00')
    }

    // - `Рейтинг` Максимальный рейтинг всех команд (значение и дата)
    maxAll(){
        return axios.get(ELO_REST_API_URL + 'max');
    }
    // - `Рейтинг` Лидер рейтинга на указанную дату
    top(date){
        return axios.get(ELO_REST_API_URL + 'top?date=' + date.replace('T',' ') + ':00');
    }
    // - `Рейтинг` Лидеры рейтинга за всю историю
    topHistory(){
        return axios.get(ELO_REST_API_URL + 'history');
    }

    // - `Рейтинг` Максимальные изменения рейтинга за всю историю
    maxChange(){
        return axios.get(ELO_REST_API_URL + 'maxDiff');
    }

    // - Показатели рейтинга (позиция в общем списке и значение рейтинга) на две указанные даты для указанной команды4
    compare(date1,date2,teamID){
        return axios.get(ELO_REST_API_URL + 'comparison?date1='
            + date1.replace('T',' ') + ':00' + '&date2=' + date2.replace('T',' ') + ':00' + '&teamID=' + teamID);
    }
    // - Показатели рейтинга (позиция в общем списке и значение рейтинга) на две указанные даты для всех команд
    compareAll(date1,date2){
        return axios.get(ELO_REST_API_URL + 'comparison?date1='
            + date1.replace('T',' ') + ':00' + '&date2=' + date2.replace('T',' ') + ':00');
    }
}

export default new UserService();