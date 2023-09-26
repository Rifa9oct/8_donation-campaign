import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { getStoredDonation } from '../../component/utility/localstorage';

const Statistic = () => {
  const allData = useLoaderData();
  const [length, Setlength] = useState(0);

  useEffect(() => {
    const storedDonationsId = getStoredDonation();
    if (allData.length > 0) {
      const completeDonation = allData.filter(donation =>
        storedDonationsId.includes(donation.id)
      );
      Setlength(completeDonation.length);
    }
  }, [allData]);

  const myDonation = parseFloat(((length / 12) * 100));
  const remaining = 100 - myDonation;

  const COLORS = ['#00C49F', '#FF444A'];
  const data = [
    { name: 'My Donation', value: myDonation },
    { name: 'Remaining', value: remaining },
  ];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text className='font-bold text-2xl'
        x={x} y={y} fill="white"
        textAnchor={x > cx ? 'start' : 'center'}
        dominantBaseline="central" > {`${(percent * 100).toFixed(1)}%`}</text>
    );
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart width={400} height={400}>
          <Pie dataKey={"value"} data={data} cx="50%" cy="50%"
            endAngle={-360}
            labelLine={false}
            label={renderCustomizedLabel}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className='flex flex-col md:flex-row items-center justify-center mb-32 text-lg'>
        <div className='flex items-center mb-5 md:mb-0 ml-14 md:ml-0'>
          <h3>Your Donation</h3>
          <p className='w-[100px] rounded-[2px] ml-3 h-3 bg-[#00C49F] mr-14'></p>
        </div>
        <div className='flex items-center'>
          <h3>Total Donation</h3>
          <p className='w-[100px] rounded-[2px] ml-3 h-3 bg-[#FF444A]'></p>
        </div>
      </div>
    </div>
  );
}; 2

export default Statistic;
