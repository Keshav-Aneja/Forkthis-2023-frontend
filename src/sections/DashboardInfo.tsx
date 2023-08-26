import CountdownTimer from "@/components/CountdownTimer";

export default function DashboardInfo()
{
    const targetDate = new Date('2023-08-31T23:59:59');
    

    return (
        <div>
            <div className="flex py-5 mb-10 justify-center items-center font-gilroyRegular text-5xl font-black">
                Dashboard                
            </div>
            <div className="flex w-[100%] bg-opacity-30 px-3 py-5 justify-between">
                <div className="ml-10 px-2 py-2">
                    <CountdownTimer  targetDate={targetDate}/>
                </div>
                <div className="px-2 py-2 justify-center" >
                    Points
                </div>
                <div className="px-2 py-2 justify-center ">
                    Issues
                </div>
            </div>
        </div>
    )
}