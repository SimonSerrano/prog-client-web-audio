import {API} from '../../constants/constant';

class LoginService {



    postLogin({name,password}) {
        const headers = new Headers({'Content-Type': 'application/json', mode: 'no-cors'});
        const request = new Request(`${API}/account/check_account`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({name, password})
        });
        return fetch(request);

    }


}


export default LoginService;
