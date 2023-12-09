import React from "react";
interface ListProps {
  type: string;
  data: Record<string, string>[];
}
const Divider = () => {
  return (
    <div
      style={{ height: "1px", background: "#cfcfcf" }}
      className="w-full"
    ></div>
  );
};

const Row = (props: { name: string; price: string; dayChange: string }) => {
  const { name, price, dayChange } = props;
  return (
    <div>
      <div className="flex justify-between py-3">
        <div>
          <span className="text-md text-slate-800">{name}</span>
        </div>
        <div className="flex">
          <div className="mr-4 rounded-[4px] bg-slate-300 px-1">
            <span className="text-slate-800">{price}</span>
          </div>

          <span className="text-green-600">{`${dayChange}%`}</span>
        </div>
      </div>
      <Divider />
    </div>
  );
};

const List = (props: ListProps) => {
  const { data, type } = props;
  console.log(data);
  return (
    <div className="p-3 w-5/12">
      <div className="flex justify-between mb-6">
        <div>
          <span className="font-bold text-lg">{type}</span>
        </div>
        <div className="px-3 bg-slate-200 rounded-[4px]">
          <span className="text-md font-bold text-blue-600">Buy New</span>
        </div>
      </div>
      <Divider />
      {data &&
        data.map((item, i) => (
          <Row
            key={i}
            name={item?.name}
            price={item.price}
            dayChange={item.dayChange}
          />
        ))}
    </div>
  );
};

export default List;
