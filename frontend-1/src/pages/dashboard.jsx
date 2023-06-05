import dashboardiai from "../assets/dashboard-iai.jpg";

const Dashboard = () => {
    return (
        <div className="justify-center items-center py-20 lg:py-10 px-3 lg:px-28 h- w-full">
            <div className=" flex flex-col items-center w-full max-w-5xl">
                <h1 className=" font-bold text-4xl text-gray-800">
                    Sistem Informasi Akademis
                </h1>
                <img src={dashboardiai} alt="dashboardimg"></img>
            </div>
        </div>

    );
}

export default Dashboard;