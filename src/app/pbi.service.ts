import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {CustomEncoder} from './customer-encoder';


@Injectable()
export class PbiService {

    constructor(private http: HttpClient) {
    }

    public auth() {

        const body = new HttpParams({encoder: new CustomEncoder()})
        .set('grant_type', 'refresh_token')
        .set('refresh_token', 'AQABAAAAAABHh4kmS_aKT5XrjzxRAtHzO6L0IB9A3l3riSY9L8uD2JvU5DDbWvdPAQTzjWjp3ITw0guWsewbtpKmVQJIX1A31N_kybdezQ1XA2TEpDtN9Qb8JsrnUbwd-v-_D0sDtVCiM8hKwTCZofDSKHtWQzp1K0UbV3Np6Gr8f1eiFhFOpRlQzc2rbwkqZSBjT5QfoGEG2vIyAi7tFMv7EmlE11zSuq5oCAhf4fyFgfMl9wSEClRGNu_fRjZ3OwPFILqA32aCbSg5i7HUrqyzz6x5Nxk_NJtrrS2zThU3EwHYQ2w_0yzotqG2m5ETiECBQ2j-Ydm3FCibCqn4bIB0ee3fT1SPTlvoeGh0VlHjR30JZkQ8UJfjNbtniRpWBkbP5dxsSKmCXPqpeU-_CyYygHEyFUbnW9NZCH8wgs5FmLER9XOkxLc_5SNYVj9mwL3Y87gyroEnz3gRaWEB6-jFm74cRavlrrjyjJb17dIoURMuhTIiSDtXwbts0T1YsMMcmags4uY40ljFuOKzv5LwQMw50-rKipkC97h-fp9b12fCkSzbZm5BV5y4kfHiU9u-Sa_ZVBCl-1gVh_U55liGKuzP_VsAV-gGj1v7SCxx-ttBjLil-kcOUWK3b8nnXXMIKbmNN0DtY22by0317jZwlYqZ8fXi1KR98ckyQ5wI2Jr7is8B1C2SomR64zLba-BBVq6YGAN9GtYOXBWhM4lG_u7q-DFOjMq1R4YYH64XQnCfADpjvmrvGCydfdWQLvAAW9e5pYHLiWcQ5S_8SdmIhCsxOvpOVzm4mwYgwfA0cQIl4m3i_iAA')
        .set('client_secret', 'e+pvqWrnjR/DWE3TexHLttnx7eC2/p6I6VqZmZWeZ+E=')
        .set('client_id', '3867b3a9-393e-4b9c-b8af-421d61f1ffde')
        .set('resource', 'https://analysis.windows.net/powerbi/api')
        .set('redirect_uri', 'https://sparew8.herokuapp.com/');

        const post = this.http.post(
            'https://login.microsoftonline.com/common/oauth2/token',
            body,
            {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')});
        post.subscribe(v => {
            console.log(v);
        });
    }

}
