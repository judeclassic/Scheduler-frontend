//@ts-check

import { useContext, useEffect, useState } from 'react'
import { HomeTabView } from "../../../components/dashboard"
import { UserContext } from '../../../context/userContext';

const HomeTab = () => {
    // @ts-ignore
    const { user } = useContext(UserContext);
    
    const [data, setData ] = useState([{
        "id": "Used Emails",
        "color": "hsl(111, 70%, 50%)",
        "data": [],
    }]);

    const dataAnalyser  = () => {
        if (!user.timeUsedPerDay || user.timeUsedPerDay.length == 0) {
            return [];
        }
        return user.timeUsedPerDay.map((info) => {
            return {
            "x": info.date,
            "y": info.timeUsed
            };
        });
    }

    useEffect(() => {
        setData([{
            "id": "Used Emails",
            "color": "hsl(111, 70%, 50%)",
            "data": dataAnalyser()
        }])
    }, []);

    return (
        <div>
            <HomeTabView data={data} user={user}  />
        </div>
    )
}

export default HomeTab