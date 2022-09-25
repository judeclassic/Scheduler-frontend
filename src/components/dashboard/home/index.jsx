//@ts-check
import { ViewCard } from "../../_/card";
import Analytics from "./analytics";

const HomeTab = ({user, data}) => {

    return (
        <div className="">
            <div className="flex justify-between mt-4 space-y-3 mb-8 flex-col md:flex-row md:space-x-4 md:space-y-0 md:mb-14">
                <ViewCard topic={'Total Requests'} value={user.usedTimes}/>
                <ViewCard topic={'Last Used'} value={(new Date(user.lastUsed)).toDateString()}/>
                <ViewCard topic={'Status'} value={user.verified ? 'Verified' : 'Not Verified'}/>
                <ViewCard topic={'Subscription Plan'} value={user.plan}/>
            </div>
            <div className="flex mb-8 flex-col items-center md:mb-14 xl:flex-row md:items-start md:space-x-4">
                <Analytics data={data}/>
            </div>
        </div>
    )
}

export default HomeTab;