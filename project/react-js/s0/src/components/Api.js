import React, {
    useState,
    useEffect,
} from 'react';

import axios from 'axios';

export default function Api(props) {

    const initialState = [];
    const [ data, setData ] = useState(initialState);

    useEffect(() => {
        const fetchData = async (object) => {
            return await axios({
                method : object['method'],
                url : object['url'],
            }).then((result) => {
                return setData(result['data'][object['data']])
            }).catch((error) => {
                return setData(error);
            });
        };
        return fetchData({
            data : 'results',
            method : 'GET',
            url : 'https://pokeapi.co/api/v2/pokemon',
        });
    }, []);
    
    return (
        <div>
            {
                data
                    ?
                data.map((result, index) => {
                    return (
                        <li key={ index }>
                            {
                                result['name']
                            }
                        </li>
                    )
                })
                    :
                ''
            }
        </div>
    );
};