import { BarChart } from "@/components/Charts/BarChart";
import { DonutChart } from "@/components/Charts/DonutChart";
import LineChart from "@/components/Charts/LineChart";
import { CaretDown, Currency, Money } from "@carbon/icons-react";

const Dashboard = () => {
  return (
    // <div>
    <div className="flex flex-col gap-4 px-2 ">
      <div className="flex items-center gap-3">
        <p className="text-xl">Welcome back, <span className="font-semibold">Admin!</span></p>
      </div>
      <div className="grid grid-flow-col grid-cols-4 gap-3 ">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="col-auto shadow-lg border border-gray-200 bg-white rounded-lg h- justify-between items-center px-3 py-3 flex "
          >
            <div className="flex flex-col gap-4">
              <span className="text-gray-700 font-semibold">Income</span>
              <p className="font-bold lg:text-3xl text-lime-500">$ 500.000</p>
            </div>
            <Currency className="w-12  h-12 fill-lime-300" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-3  ">
        <div className="col-span-8 rounded-lg shadow-lg px-3 pt-3 h-96 bg-white flex">
          <div className="w-full ">
            <LineChart title="Todays Earning" />
          </div>
          {/* <div className="w-2/5 ">
            No.of Sales
          </div> */}
        </div>
        <div className="col-span-4 rounded-lg shadow-lg px-3 pt-3 h-96 bg-white">
          <DonutChart title="Total Income" />
        </div>

        
        <div className="col-span-4 rounded-lg shadow-lg px-3 pt-3 h-96 bg-white">
          <BarChart title="Overview" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
